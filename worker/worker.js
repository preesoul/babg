// Cloudflare Worker — BABG Records Proxy
// PAT는 Cloudflare 환경변수(GITHUB_PAT)에 저장, 클라이언트에 노출되지 않음

const REPO = 'preesoul/babg';
const FILE = 'records.json';
const API_BASE = `https://api.github.com/repos/${REPO}/contents/${FILE}`;
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
        const res = await fetch(API_BASE, { headers: ghHeaders });
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);
        const data = await res.json();
        const content = JSON.parse(atob(data.content.replace(/\n/g, '')));
        return new Response(JSON.stringify({ content, sha: data.sha }), {
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
        const res = await fetch(API_BASE, {
          method: 'PUT',
          headers: { ...ghHeaders, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: 'record update',
            content: btoa(unescape(encodeURIComponent(JSON.stringify(body.content, null, 2)))),
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
