const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// /new was the preview URL for the redesign that is now simply the home
// page. It redirects rather than serving a second copy: two URLs with the
// same content compete with each other in search results.
app.get('/new', (req, res) => res.redirect(301, '/'));

// Clean URLs, for every page and every language: /bksafe, /vi/bksafe and
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the Express API for Vercel
module.exports = app;
