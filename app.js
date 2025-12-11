// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

// Simple root endpoint
app.get('/', (req, res) => {
  res.status(200).send('Hello DevOps Lab!');
});

// Health Check Endpoint (Crucial for CI/CD verification)
app.get('/health', (req, res) => {
  res.status(200).send({ status: 'ok' });
});

// The server listener is outside the main app export for testability
const server = app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

// Export the app for testing
module.exports = app;