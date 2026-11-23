const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to My Node.js Application</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f0f2f5; color: #333; display: flex; justify-content: center; align-items: center; min-height: 100vh;">
  <div style="background-color: #ffffff; padding: 40px 48px; border-radius: 12px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08); text-align: center; max-width: 520px; width: 90%;">
    <h1 style="color: #1e293b; font-size: 26px; margin-top: 0; margin-bottom: 20px;">Welcome to My Node.js Application</h1>
    <p style="font-size: 16px; color: #475569; line-height: 1.6; margin: 10px 0;">This application is running using Node.js</p>
    <p style="font-size: 16px; color: #475569; line-height: 1.6; margin: 10px 0;">This application will be managed using PM2</p>
  </div>
</body>
</html>`);
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
