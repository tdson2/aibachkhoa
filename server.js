const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ---------------------------------------------------------------------------
// JemulWap — the Java game emulator runs as its own service; /jemulwap is a
// reverse proxy onto it. The emulator is mounted under the same prefix
// (BASE_PATH=/jemulwap) so the path is forwarded unchanged, and its frame
// stream is a WebSocket, which is why the upgrade is proxied too.
// ---------------------------------------------------------------------------
const JEMULWAP_ORIGIN = process.env.JEMULWAP_ORIGIN || 'http://127.0.0.1:8787';
const JEMULWAP_PREFIX = '/jemulwap';
const jemulwap = new URL(JEMULWAP_ORIGIN);

const jemulwapTarget = (reqPath) => ({
    protocol: jemulwap.protocol,
    hostname: jemulwap.hostname,
    port: jemulwap.port || (jemulwap.protocol === 'https:' ? 443 : 80),
    path: reqPath,
});

function proxyToJemulwap(req, res) {
    const upstream = http.request({
        ...jemulwapTarget(req.originalUrl),
        method: req.method,
        headers: {
            ...req.headers,
            host: jemulwap.host,
            'x-forwarded-host': req.headers.host || '',
            'x-forwarded-proto': req.headers['x-forwarded-proto'] || req.protocol,
            'x-forwarded-for': req.socket.remoteAddress || '',
        },
    }, (upstreamRes) => {
        res.writeHead(upstreamRes.statusCode || 502, upstreamRes.headers);
        upstreamRes.pipe(res);
    });

    upstream.on('error', () => {
        if (res.headersSent) return res.destroy();
        res.status(502).type('html').send(
            '<!doctype html><meta charset="utf-8"><title>JemulWap is offline</title>'
            + '<style>body{font:16px/1.6 system-ui;margin:14vh auto;max-width:34rem;padding:0 6vw;color:#0f172a}'
            + 'code{background:#f1f5f9;padding:2px 6px;border-radius:5px}</style>'
            + '<h1>JemulWap is not running</h1><p>The emulator service did not answer at <code>'
            + JEMULWAP_ORIGIN + '</code>.</p><p><a href="/jemul">Back to the JeMul page</a></p>',
        );
    });

    req.pipe(upstream);
}

app.use(JEMULWAP_PREFIX, proxyToJemulwap);

// Clean URL for the BKSafe product page — served directly so the
// browser never sees a /bksafe -> /bksafe/ redirect.
app.get('/bksafe', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'bksafe', 'index.html'));
});

app.get('/bksafe/policy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'bksafe', 'policy', 'index.html'));
});

// Clean URLs for the Dungeon of the Fallen Blade pages, for the same
// reason: no /dungeon-blade -> /dungeon-blade/ redirect on the way in.
app.get('/dungeon-blade', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dungeon-blade', 'index.html'));
});

app.get('/dungeon-blade/policy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dungeon-blade', 'policy', 'index.html'));
});

// Clean URLs for the Iron Line pages, for the same reason: no
// /iron-line -> /iron-line/ redirect on the way in.
app.get('/iron-line', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'iron-line', 'index.html'));
});

app.get('/iron-line/policy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'iron-line', 'policy', 'index.html'));
});

// Clean URLs for the Novaryn pages, for the same reason.
app.get('/novaryn', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'novaryn', 'index.html'));
});

app.get('/novaryn/policy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'novaryn', 'policy', 'index.html'));
});

// The iOS build gets its own page: an App Store listing's support and
// marketing URLs must not lead to another storefront.
app.get('/novaryn/ios', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'novaryn', 'ios', 'index.html'));
});

// Clean URLs for the GenVideo pages, for the same reason.
app.get('/genvideo', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'genvideo', 'index.html'));
});

app.get('/genvideo/policy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'genvideo', 'policy', 'index.html'));
});

// The iOS build gets its own page: an App Store listing's support and
// marketing URLs must not lead to another storefront.
app.get('/genvideo/ios', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'genvideo', 'ios', 'index.html'));
});

// Clean URLs for the Castle of Ancients pages, for the same reason.
app.get('/castle-of-ancients', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'castle-of-ancients', 'index.html'));
});

app.get('/castle-of-ancients/policy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'castle-of-ancients', 'policy', 'index.html'));
});

// Clean URLs for the Chilly Novels pages, for the same reason.
app.get('/chilly-novels', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'chilly-novels', 'index.html'));
});

app.get('/chilly-novels/policy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'chilly-novels', 'policy', 'index.html'));
});

// Clean URLs for the ChefEasy pages. The App Store listing's support and
// marketing URLs must not lead to a Google Play page, so the iOS build gets
// its own page next to the Android one.
app.get('/chefeasy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'chefeasy', 'index.html'));
});

app.get('/chefeasy/ios', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'chefeasy', 'ios', 'index.html'));
});

app.get('/chefeasy/policy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'chefeasy', 'policy', 'index.html'));
});

// Clean URLs for the JeMul pages, for the same reason.
app.get('/jemul', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'jemul', 'index.html'));
});

app.get('/jemul/policy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'jemul', 'policy', 'index.html'));
});

// Clean URLs for the Mini Castle pages, for the same reason.
app.get('/mini-castle', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'mini-castle', 'index.html'));
});

app.get('/mini-castle/policy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'mini-castle', 'policy', 'index.html'));
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to index.html for any other requests (SPA-like behavior)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// An explicit http server (rather than app.listen) so the WebSocket upgrade
// used by JemulWap's frame stream can be forwarded as well.
const server = http.createServer(app);

server.on('upgrade', (req, socket, head) => {
  if (!req.url.startsWith(`${JEMULWAP_PREFIX}/`)) {
    socket.destroy();
    return;
  }

  const upstream = http.request({
    ...jemulwapTarget(req.url),
    method: 'GET',
    headers: { ...req.headers, host: jemulwap.host },
  });

  upstream.on('upgrade', (upstreamRes, upstreamSocket, upstreamHead) => {
    const headers = Object.entries(upstreamRes.headers)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\r\n');
    socket.write(`HTTP/1.1 101 Switching Protocols\r\n${headers}\r\n\r\n`);
    if (upstreamHead && upstreamHead.length) socket.unshift(upstreamHead);
    upstreamSocket.pipe(socket);
    socket.pipe(upstreamSocket);
    upstreamSocket.on('error', () => socket.destroy());
    socket.on('error', () => upstreamSocket.destroy());
  });

  upstream.on('error', () => socket.destroy());
  if (head && head.length) upstream.write(head);
  upstream.end();
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`JemulWap proxied from ${JEMULWAP_ORIGIN} at ${JEMULWAP_PREFIX}`);
});

// Export the Express API for Vercel
module.exports = app;
