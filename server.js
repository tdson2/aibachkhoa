const express = require('express');
const path = require('path');
const fs = require('fs');

const analytics = require('./lib/analytics/collect');
const store = require('./lib/analytics/store');
const admin = require('./lib/admin/routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Behind the Cloudflare tunnel the client address and the original scheme
// only exist in forwarded headers; without this, every visitor looks like it
// came from the tunnel over plain HTTP. The container publishes its port on
// 127.0.0.1 only, so nothing but the tunnel can set those headers.
app.set('trust proxy', true);
app.disable('x-powered-by');

// /new was the preview URL for the redesign that is now simply the home
// page. It redirects rather than serving a second copy: two URLs with the
// same content compete with each other in search results.
app.get('/new', (req, res) => res.redirect(301, '/'));

// The site used to ship a Vietnamese translation under /vi/. It has been
// retired, but those URLs were indexed and linked, so they answer with a
// permanent redirect to the English page rather than a 404: every /vi/<path>
// had an English twin at /<path>, which makes the mapping exact.
app.use((req, res, next) => {
  if (req.path !== '/vi' && !req.path.startsWith('/vi/')) return next();
  res.redirect(301, req.path.slice(3) || '/');
});

// The analytics beacon. It sits ahead of everything static because it is a
// POST to a path that does not exist on disk, and it answers 204 with no
// body: a page has nothing to do with the reply and should not wait for one.
app.post('/api/collect', analytics.handleCollect);

// The dashboard and its API. Mounted before the page routes so that /admin
// can never be answered by a file that happens to be sitting in public/.
admin.mount(app);

// Counts installer downloads on the request for the file itself, then hands
// the request straight on to express.static, which does the serving.
app.use(analytics.downloadTracker);

// Clean URLs, for every page and every language: /bksafe, /es/bksafe and
// /chefeasy/policy are each served straight from their own index.html. The
// alternative — letting express.static redirect /bksafe to /bksafe/ — puts a
// 301 in front of every visit, including the ones arriving from a paid ad.
//
// This replaced a hand-written route per page. Translated pages are generated
// (tools/build-i18n-pages.js), so that list could only ever fall behind.
app.use((req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') return next();
  if (req.path.includes('.')) return next();          // let static files through

  const root = path.join(__dirname, 'public');
  const file = path.join(root, req.path.replace(/\/+$/, ''), 'index.html');

  // path.join has already resolved any "..", so this rejects traversal.
  if (!file.startsWith(root + path.sep)) return next();
  if (!fs.existsSync(file)) return next();

  res.sendFile(file);
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Anything that reached this point matched no page and no static file.
// This site is a set of distinct static pages, not a single-page app, so the
// old catch-all that replied with index.html only produced soft 404s: every
// mistyped or stale URL answered 200 with a copy of the home page, which
// search engines then had to sort out. Answer with a real 404 instead.
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Retention: drop event files past the window at boot and once a day after
// that, so the volume cannot grow without bound on a machine nobody watches.
store.prune();
setInterval(() => store.prune(), 24 * 3600 * 1000).unref();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the Express API for Vercel
module.exports = app;
