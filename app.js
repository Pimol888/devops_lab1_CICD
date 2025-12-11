import express from 'express';
import { MESSAGES } from './constants.js';

const app = express();app.get('/', (req, res) => {
  res.send(MESSAGES.GREETING);
});

// Health check endpoint for deployment platforms
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
  });
});

// Add a simple API endpoint for better test coverage
app.get('/api/info', (req, res) => {
  res.json({
    name: 'CI/CD Lab App',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

export default app;