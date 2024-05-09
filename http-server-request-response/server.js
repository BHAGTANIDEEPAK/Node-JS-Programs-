const http = require('http');

// Create an HTTP server instance
const server = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write the response body
  res.write('Hello, world!\n');

  // End the response
  res.end();
});

// Listen for incoming requests on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
