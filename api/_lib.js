const crypto = require('crypto');

const REPO = 'abdulazizkhasanboyevich/my-blog';
const FILE_PATH = 'js/posts.js';
const SESSION_TTL_MS = 1000 * 60 * 60 * 4; // 4 soat

function sign(payload) {
  return crypto.createHmac('sha256', process.env.SESSION_SECRET).update(payload).digest('hex');
}

function createSessionToken() {
  const expires = Date.now() + SESSION_TTL_MS;
  const payload = String(expires);
  const sig = sign(payload);
  return Buffer.from(`${payload}.${sig}`).toString('base64');
}

function verifySessionToken(token) {
  if (!token) return false;
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf8');
    const [payload, sig] = decoded.split('.');
    if (!payload || !sig) return false;
    const expected = sign(payload);
    const sigBuf = Buffer.from(sig);
    const expBuf = Buffer.from(expected);
    if (sigBuf.length !== expBuf.length) return false;
    if (!crypto.timingSafeEqual(sigBuf, expBuf)) return false;
    return Date.now() < Number(payload);
  } catch {
    return false;
  }
}

function requireAuth(req, res) {
  const header = req.headers['authorization'] || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  if (!verifySessionToken(token)) {
    res.status(401).json({ error: "Avtorizatsiyadan o'tilmagan yoki sessiya muddati tugagan" });
    return false;
  }
  return true;
}

async function githubGetFile() {
  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json'
    }
  });
  if (!res.ok) throw new Error("GitHub'dan fayl olinmadi");
  const data = await res.json();
  return {
    sha: data.sha,
    content: Buffer.from(data.content, 'base64').toString('utf8')
  };
}

async function githubSaveFile(content, sha, message) {
  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`, {
    method: 'PUT',
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message,
      content: Buffer.from(content, 'utf8').toString('base64'),
      sha
    })
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "GitHub'ga saqlashda xato");
  }
}

function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function esc(str) {
  return String(str).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function textToHtml(text) {
  const lines = String(text).split('\n');
  let html = '';
  let inList = false;
  for (let line of lines) {
    line = line.trim();
    if (!line) { if (inList) { html += '</ul>\n      '; inList = false; } continue; }
    if (line.startsWith('## ')) {
      if (inList) { html += '</ul>\n      '; inList = false; }
      html += `<h2>${line.slice(3)}</h2>\n      `;
    } else if (line.startsWith('### ')) {
      if (inList) { html += '</ul>\n      '; inList = false; }
      html += `<h3>${line.slice(4)}</h3>\n      `;
    } else if (line.startsWith('- ')) {
      if (!inList) { html += '<ul>\n        '; inList = true; }
      html += `<li>${line.slice(2)}</li>\n        `;
    } else {
      if (inList) { html += '</ul>\n      '; inList = false; }
      html += `<p>${line}</p>\n      `;
    }
  }
  if (inList) html += '</ul>';
  return html.trim();
}

function parsePosts(fileContent) {
  const match = fileContent.match(/const blogPosts = \[([\s\S]*?)\];\s*\n\nfunction/);
  if (!match) throw new Error('Postlar topilmadi');
  // Fayl repo egasi tomonidan yoziladi va faqat autentifikatsiyadan
  // o'tgan so'rovlar orqali ishga tushadi (server ichida, brauzerda emas).
  const fn = new Function(`const blogPosts = [${match[1]}]; return blogPosts;`);
  return fn();
}

function rebuildFile(originalContent, posts) {
  const postsCode = posts
    .map(p => {
      return `  {\n    slug: '${p.slug}',\n    title: '${esc(p.title)}',\n    excerpt: '${esc(p.excerpt)}',\n    category: '${esc(p.category)}',\n    date: '${p.date}',\n    readTime: '${esc(p.readTime || '')}',\n    image: '${esc(p.image || '')}',\n    content: \`${p.content}\`\n  }`;
    })
    .join(',\n');

  const functionsMatch = originalContent.match(/\];\s*\n\nfunction[\s\S]*/);
  const functions = functionsMatch ? functionsMatch[0] : '\n];\n';
  return `const blogPosts = [\n${postsCode}\n${functions}`;
}

module.exports = {
  requireAuth,
  createSessionToken,
  verifySessionToken,
  githubGetFile,
  githubSaveFile,
  slugify,
  textToHtml,
  parsePosts,
  rebuildFile
};
