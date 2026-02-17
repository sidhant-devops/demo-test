const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: '🚀 Hello from AI Deployment Platform!',
    status: 'running',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    deployment: 'automatic',
    platform: 'local-demo'
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.get('/info', (req, res) => {
  res.json({
    app: 'demo-app',
    nodeVersion: process.version,
    platform: process.platform,
    port: port,
    environment: process.env.NODE_ENV || 'development'
  });
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${port}`);
  console.log(`🌐 Access at: http://localhost:${port}`);
  console.log(`📊 Health check: http://localhost:${port}/health`);
});
