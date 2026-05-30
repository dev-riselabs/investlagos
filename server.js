// ---------------------------------------------------------------------------
// Phusion Passenger startup file for the Invest Lagos SPA.
//
// Why this file exists:
//   The site is hosted via cPanel "Setup Node.js App" (Phusion Passenger).
//   When Passenger is active it intercepts every request BEFORE Apache's
//   .htaccess mod_rewrite rules run, so the SPA fallback in
//   public/.htaccess is ignored. That is why `/` works on reload but any
//   other route (e.g. /about) returns the generic Passenger 500 page.
//
//   This script serves the built `dist/` folder as static files and falls
//   back to `dist/index.html` for any non-file route so React Router can
//   take over on the client.
//
// Deployment steps (cPanel → "Setup Node.js App"):
//   1. Application root:        investlagos_frontend
//   2. Application URL:         (your domain / subdomain)
//   3. Application startup file: server.js
//   4. Node.js version:         18.x or newer
//   5. Run `npm run build` so the `dist/` folder exists.
//   6. Click "Restart" on the Node.js app.
//
// Zero external dependencies on purpose — uses Node built-ins only.
// ---------------------------------------------------------------------------

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, 'dist');
const INDEX_FILE = path.join(DIST_DIR, 'index.html');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.mjs':  'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.webp': 'image/webp',
  '.ico':  'image/x-icon',
  '.pdf':  'application/pdf',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
  '.otf':  'font/otf',
  '.eot':  'application/vnd.ms-fontobject',
  '.map':  'application/json; charset=utf-8',
  '.txt':  'text/plain; charset=utf-8',
};

function send(res, status, body, headers = {}) {
  res.writeHead(status, headers);
  res.end(body);
}

function sendFile(req, res, filePath) {
  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) return sendIndex(res);

    const ext = path.extname(filePath).toLowerCase();
    const type = MIME_TYPES[ext] || 'application/octet-stream';

    // Long cache for hashed asset files, no-cache for the SPA entry point.
    const isHashedAsset = /\/assets\//.test(filePath) || /\.[0-9a-f]{8,}\./i.test(filePath);
    const cacheControl = isHashedAsset
      ? 'public, max-age=31536000, immutable'
      : 'public, max-age=3600';

    res.writeHead(200, {
      'Content-Type': type,
      'Content-Length': stat.size,
      'Cache-Control': cacheControl,
    });
    fs.createReadStream(filePath).pipe(res);
  });
}

function sendIndex(res) {
  fs.readFile(INDEX_FILE, (err, data) => {
    if (err) {
      return send(res, 500, 'index.html not found. Did you run `npm run build`?', {
        'Content-Type': 'text/plain; charset=utf-8',
      });
    }
    send(res, 200, data, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    });
  });
}

const server = http.createServer((req, res) => {
  // Only GET/HEAD are meaningful for a static SPA.
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return send(res, 405, 'Method Not Allowed', { 'Allow': 'GET, HEAD' });
  }

  // Decode and normalise the URL path; reject traversal attempts.
  let pathname;
  try {
    pathname = decodeURIComponent(url.parse(req.url).pathname || '/');
  } catch (_) {
    return send(res, 400, 'Bad Request');
  }
  if (pathname.includes('\0')) return send(res, 400, 'Bad Request');

  // Resolve target inside DIST_DIR and ensure the result stays inside it.
  const safeRelative = path
    .normalize(pathname)
    .replace(/^([/\\])+/, '');
  const target = path.join(DIST_DIR, safeRelative);
  if (!target.startsWith(DIST_DIR)) {
    return send(res, 403, 'Forbidden');
  }

  // If the path has no extension, treat it as a client-side route and
  // serve index.html so React Router can resolve it.
  if (!path.extname(target)) {
    return sendIndex(res);
  }

  sendFile(req, res, target);
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Invest Lagos SPA server listening on port ${PORT}`);
});
