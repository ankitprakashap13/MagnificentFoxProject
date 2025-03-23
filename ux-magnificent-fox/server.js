const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const PORT = process.env.FRONTEND_PORT || 3000;
const BACKEND_SERVER = process.env.BACKEND_SERVER_URL || 'http://localhost:8000';

// Proxy configuration
const apiProxy = createProxyMiddleware('/api', {
  target: BACKEND_SERVER,
  changeOrigin: true,
});

app.use('/api', apiProxy);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Proxying API requests to ${BACKEND_SERVER}`);
});
