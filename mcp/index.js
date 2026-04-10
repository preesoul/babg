import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");

// ========== INDEX BUILD ==========

function buildIndex() {
  const src = fs.readFileSync(path.join(ROOT, "game_core.js"), "utf-8");
  const lines = src.split("\n");

  // Section index
  const sections = [];
  let currentSection = null;
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^\/\/\s*=+\s*(.+?)\s*=+\s*$/);
    if (m) {
      if (currentSection) currentSection.end = i;
      currentSection = { name: m[1], start: i + 1, end: lines.length };
      sections.push(currentSection);
    }
  }

  // Function index
  const functions = [];
  const fnPatterns = [
    /^function\s+(\w+)\s*\(/,
    /^(const|let|var)\s+(\w+)\s*=\s*(async\s+)?function/,
  ];
  for (let i = 0; i < lines.length; i++) {
    for (const pat of fnPatterns) {
      const m = lines[i].match(pat);
      if (m) {
        const name = m[2] || m[1];
        functions.push({ name, line: i + 1 });
        break;
      }
    }
  }

  // Find function end by brace matching
  function getFunctionEnd(startLine) {
    let depth = 0;
    let started = false;
    for (let i = startLine - 1; i < lines.length; i++) {
      for (const ch of lines[i]) {
        if (ch === "{") { depth++; started = true; }
        if (ch === "}") { depth--; }
        if (started && depth === 0) return i + 1;
      }
    }
    return Math.min(startLine + 100, lines.length);
  }

  return { lines, sections, functions, getFunctionEnd };
}

let INDEX = null;
function getIndex() {
  if (!INDEX) INDEX = buildIndex();
  return INDEX;
}

// Rebuild index if game_core.js changed
let lastMtime = 0;
function ensureFreshIndex() {
  try {
    const stat = fs.statSync(path.join(ROOT, "game_core.js"));
    if (stat.mtimeMs !== lastMtime) {
      lastMtime = stat.mtimeMs;
      INDEX = null;
    }
  } catch {}
  return getIndex();
}

// ========== CSV PARSER ==========

function parseCSV(filename) {
  const fp = path.join(ROOT, filename);
  if (!fs.existsSync(fp)) return [];
  const text = fs.readFileSync(fp, "utf-8");
  const rows = text.split("\n").filter(r => r.trim());
  if (rows.length === 0) return [];
  const headers = rows[0].split(",");
  return rows.slice(1).map(row => {
    const vals = row.split(",");
    const obj = {};
    headers.forEach((h, i) => obj[h.trim()] = (vals[i] || "").trim());
    return obj;
  });
}

// ========== MCP SERVER ==========

const server = new McpServer({
  name: "babg-index",
  version: "1.0.0",
});

// --- Tool 1: get_overview ---
server.tool(
  "get_overview",
  "프로젝트 구조 개요 + game_core.js 섹션맵 + 함수 목록. 세션 시작 시 먼저 호출하세요.",
  {},
  async () => {
    const idx = ensureFreshIndex();

    const fileList = fs.readdirSync(ROOT)
      .filter(f => !f.startsWith(".") && f !== "node_modules" && f !== "mcp")
      .map(f => {
        const stat = fs.statSync(path.join(ROOT, f));
        return `${f} (${stat.isDirectory() ? "dir" : Math.round(stat.size / 1024) + "KB"})`;
      });

    const sectionMap = idx.sections.map(s =>
      `  L${s.start}-${s.end}: ${s.name}`
    ).join("\n");

    const fnList = idx.functions.map(f => `  L${f.line}: ${f.name}`).join("\n");

    const text = [
      "=== BABG Project Overview ===",
      `Files: ${fileList.join(", ")}`,
      "",
      `=== game_core.js Sections (${idx.lines.length} lines) ===`,
      sectionMap,
      "",
      `=== Functions (${idx.functions.length} total) ===`,
      fnList,
    ].join("\n");

    return { content: [{ type: "text", text }] };
  }
);

// --- Tool 2: get_function ---
server.tool(
  "get_function",
  "함수명으로 해당 함수 코드만 추출 (game_core.js)",
  { name: z.string().describe("함수명 (예: runBattle, triggerSOC)") },
  async ({ name }) => {
    const idx = ensureFreshIndex();
    const fn = idx.functions.find(f => f.name === name);
    if (!fn) {
      const similar = idx.functions
        .filter(f => f.name.toLowerCase().includes(name.toLowerCase()))
        .slice(0, 10)
        .map(f => f.name);
      return {
        content: [{ type: "text", text: `함수 '${name}' 없음. 유사: ${similar.join(", ") || "없음"}` }],
      };
    }
    const endLine = idx.getFunctionEnd(fn.line);
    const code = idx.lines.slice(fn.line - 1, endLine)
      .map((l, i) => `${fn.line + i}: ${l}`)
      .join("\n");
    return {
      content: [{ type: "text", text: `=== ${name} (L${fn.line}-${endLine}) ===\n${code}` }],
    };
  }
);

// --- Tool 3: get_section ---
server.tool(
  "get_section",
  "섹션명으로 해당 영역 코드 추출 (예: SHOP, BATTLE, AI, HIDDEN)",
  {
    name: z.string().describe("섹션명 키워드 (부분 매칭)"),
    summary: z.boolean().optional().describe("true면 함수 시그니처만 반환 (기본: false = 전체 코드)"),
  },
  async ({ name, summary }) => {
    const idx = ensureFreshIndex();
    const sec = idx.sections.find(s =>
      s.name.toLowerCase().includes(name.toLowerCase())
    );
    if (!sec) {
      return {
        content: [{
          type: "text",
          text: `섹션 '${name}' 없음. 가능한 섹션:\n${idx.sections.map(s => s.name).join("\n")}`,
        }],
      };
    }

    if (summary) {
      const fns = idx.functions
        .filter(f => f.line >= sec.start && f.line <= sec.end)
        .map(f => `  L${f.line}: ${idx.lines[f.line - 1].substring(0, 120)}`);
      return {
        content: [{ type: "text", text: `=== ${sec.name} (L${sec.start}-${sec.end}, ${sec.end - sec.start + 1} lines) ===\nFunctions:\n${fns.join("\n")}` }],
      };
    }

    const code = idx.lines.slice(sec.start - 1, sec.end)
      .map((l, i) => `${sec.start + i}: ${l}`)
      .join("\n");

    // If too large, truncate with warning
    if (code.length > 100000) {
      return {
        content: [{
          type: "text",
          text: `=== ${sec.name} (L${sec.start}-${sec.end}) ===\n[경고: ${sec.end - sec.start + 1}줄로 매우 큼. summary=true 사용 권장]\n${code.substring(0, 100000)}\n... (truncated)`,
        }],
      };
    }

    return {
      content: [{ type: "text", text: `=== ${sec.name} (L${sec.start}-${sec.end}) ===\n${code}` }],
    };
  }
);

// --- Tool 4: search_code ---
server.tool(
  "search_code",
  "키워드/정규식으로 프로젝트 코드 검색 (game_core.js, index.html 등)",
  {
    query: z.string().describe("검색어 또는 정규식"),
    file: z.string().optional().describe("특정 파일만 검색 (예: game_core.js). 생략시 주요 파일 전체"),
    context: z.number().optional().describe("매칭 줄 전후 컨텍스트 줄 수 (기본: 2)"),
    max_results: z.number().optional().describe("최대 결과 수 (기본: 30)"),
  },
  async ({ query, file, context: ctx, max_results }) => {
    const ctxLines = ctx ?? 2;
    const maxR = max_results ?? 30;
    const targets = file
      ? [path.join(ROOT, file)]
      : [
          path.join(ROOT, "game_core.js"),
          path.join(ROOT, "index.html"),
          path.join(ROOT, "index_mobile.html"),
        ];

    let regex;
    try {
      regex = new RegExp(query, "i");
    } catch {
      regex = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
    }

    const results = [];
    for (const fp of targets) {
      if (!fs.existsSync(fp)) continue;
      const lines = fs.readFileSync(fp, "utf-8").split("\n");
      const fname = path.basename(fp);
      for (let i = 0; i < lines.length && results.length < maxR; i++) {
        if (regex.test(lines[i])) {
          const start = Math.max(0, i - ctxLines);
          const end = Math.min(lines.length, i + ctxLines + 1);
          const snippet = lines.slice(start, end)
            .map((l, j) => `${start + j + 1}${start + j === i ? ">" : ":"} ${l}`)
            .join("\n");
          results.push(`--- ${fname}:${i + 1} ---\n${snippet}`);
        }
      }
    }

    return {
      content: [{
        type: "text",
        text: results.length > 0
          ? `${results.length}건 발견:\n\n${results.join("\n\n")}`
          : `'${query}' 검색 결과 없음`,
      }],
    };
  }
);

// --- Tool 5: get_char_data ---
server.tool(
  "get_char_data",
  "CSV에서 캐릭터/마법카드 데이터 조회",
  {
    type: z.enum(["char", "magic"]).describe("char=캐릭터, magic=마법카드"),
    query: z.string().optional().describe("이름/ID로 필터 (부분 매칭). 생략시 전체 목록"),
  },
  async ({ type, query }) => {
    const file = type === "char"
      ? "블루아카전장_캐릭터_최신.csv"
      : "블루아카전장_마법카드.csv";
    const data = parseCSV(file);

    if (data.length === 0) {
      return { content: [{ type: "text", text: `${file} 파일 없거나 비어있음` }] };
    }

    let filtered = data;
    if (query) {
      const q = query.toLowerCase();
      filtered = data.filter(row =>
        Object.values(row).some(v => v.toLowerCase().includes(q))
      );
    }

    if (filtered.length === 0) {
      return { content: [{ type: "text", text: `'${query}' 매칭 결과 없음` }] };
    }

    // Format as compact table
    const headers = Object.keys(filtered[0]);
    const rows = filtered.map(row => headers.map(h => row[h] || "").join(" | "));
    const text = [
      `=== ${file} (${filtered.length}/${data.length}건) ===`,
      headers.join(" | "),
      "---",
      ...rows,
    ].join("\n");

    return { content: [{ type: "text", text }] };
  }
);

// --- Tool 6: get_recent_changes ---
server.tool(
  "get_recent_changes",
  "최근 N개 커밋 요약 (git log)",
  {
    count: z.number().optional().describe("커밋 수 (기본: 15)"),
    file: z.string().optional().describe("특정 파일의 변경만 보기"),
  },
  async ({ count, file }) => {
    const n = count ?? 15;
    try {
      let cmd = `git -C "${ROOT}" log --oneline -${n}`;
      if (file) cmd += ` -- "${file}"`;
      const out = execSync(cmd, { encoding: "utf-8", timeout: 5000 });

      let diffSummary = "";
      try {
        const diffCmd = `git -C "${ROOT}" diff --stat HEAD~${Math.min(n, 5)}`;
        diffSummary = "\n\n=== Recent diff stat ===\n" +
          execSync(diffCmd, { encoding: "utf-8", timeout: 5000 });
      } catch {}

      return {
        content: [{ type: "text", text: `=== Recent ${n} commits ===\n${out}${diffSummary}` }],
      };
    } catch (e) {
      return { content: [{ type: "text", text: `git error: ${e.message}` }] };
    }
  }
);

// --- Tool 7: get_lines ---
server.tool(
  "get_lines",
  "파일의 특정 줄 범위만 추출",
  {
    file: z.string().describe("파일명 (예: game_core.js, index.html)"),
    start: z.number().describe("시작 줄 번호"),
    end: z.number().describe("끝 줄 번호"),
  },
  async ({ file, start, end }) => {
    const fp = path.join(ROOT, file);
    if (!fs.existsSync(fp)) {
      return { content: [{ type: "text", text: `파일 없음: ${file}` }] };
    }
    const lines = fs.readFileSync(fp, "utf-8").split("\n");
    const s = Math.max(1, start);
    const e = Math.min(lines.length, end);
    const code = lines.slice(s - 1, e)
      .map((l, i) => `${s + i}: ${l}`)
      .join("\n");
    return {
      content: [{ type: "text", text: `=== ${file} L${s}-${e} (of ${lines.length}) ===\n${code}` }],
    };
  }
);

// ========== START ==========

const transport = new StdioServerTransport();
await server.connect(transport);
