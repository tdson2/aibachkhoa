const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Clean URL for the BKSafe product page — served directly so the
// browser never sees a /bksafe -> /bksafe/ redirect.
app.get('/bksafe', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'bksafe', 'index.html'));
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
