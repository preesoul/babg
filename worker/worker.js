// Cloudflare Worker — BABG Records Proxy
// PAT는 Cloudflare 환경변수(GITHUB_PAT)에 저장, 클라이언트에 노출되지 않음

const REPO = 'preesoul/babg';
const FILE = 'records.json';
const API_BASE = `https://api.github.com/repos/${REPO}/contents/${FILE}`;
const RAW_URL = `https://raw.githubusercontent.com/${REPO}/main/${FILE}`;
const ALLOWED_ORIGINS = [
  'https://preesoul.github.io',
  'http://localhost:3333',
  'http://127.0.0.1:3333',
];

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const cors = corsHeaders(origin);

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }

    const pat = env.GITHUB_PAT;
    if (!pat) {
      return new Response(JSON.stringify({ error: 'PAT not configured' }), {
        status: 500,
        headers: { ...cors, 'Content-Type': 'application/json' },
      });
    }

    const ghHeaders = {
      'Authorization': `token ${pat}`,
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'babg-worker',
    };

    try {
      // GET /records — fetch records.json
      if (request.method === 'GET') {
        // SHA 가져오기 (업데이트용)
        const metaRes = await fetch(API_BASE, { headers: ghHeaders });
        if (!metaRes.ok) throw new Error(`GitHub API ${metaRes.status}`);
        const meta = await metaRes.json();
        const sha = meta.sha;

        // Raw 파일 직접 다운로드 (인코딩 문제 없음)
        const rawRes = await fetch(RAW_URL, {
          headers: { 'Authorization': `token ${pat}`, 'User-Agent': 'babg-worker' },
        });
        if (!rawRes.ok) throw new Error(`GitHub Raw ${rawRes.status}`);
        const content = await rawRes.json();

        // pw 필드 제거 (평문 비밀번호 노출 방지)
        if (content.players) {
          for (const name in content.players) {
            delete content.players[name].pw;
          }
        }
        return new Response(JSON.stringify({ content, sha }), {
          headers: { ...cors, 'Content-Type': 'application/json' },
        });
      }

      // POST /records — update records.json
      if (request.method === 'POST') {
        const body = await request.json();
        if (!body.content || !body.sha) {
          return new Response(JSON.stringify({ error: 'content and sha required' }), {
            status: 400,
            headers: { ...cors, 'Content-Type': 'application/json' },
          });
        }
        const jsonStr = JSON.stringify(body.content, null, 2);
        const encoded = btoa(String.fromCharCode(...new TextEncoder().encode(jsonStr)));
        const res = await fetch(API_BASE, {
          method: 'PUT',
          headers: { ...ghHeaders, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: 'record update',
            content: encoded,
            sha: body.sha,
          }),
        });
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);
        const result = await res.json();
        return new Response(JSON.stringify({ ok: true, sha: result.content.sha }), {
          headers: { ...cors, 'Content-Type': 'application/json' },
        });
      }

      return new Response('Method not allowed', { status: 405, headers: cors });
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), {
        status: 500,
        headers: { ...cors, 'Content-Type': 'application/json' },
      });
    }
  },
};
