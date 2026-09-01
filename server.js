const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

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

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to index.html for any other requests (SPA-like behavior)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the Express API for Vercel
module.exports = app;
