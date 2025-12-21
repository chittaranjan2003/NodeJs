// Import the http module (Node.js built-in module)
const http = require("http");

// Create the server
// This callback function runs every time a request comes to the server
const server = http.createServer((req, res) => {
  // Log request details sent by the client
  console.log(req.url); // Which URL was requested
  console.log(req.method); // HTTP method (GET / POST etc.)
  console.log(req.headers); // Request headers
});

// Define the port number
const PORT = 3000;

// Start the server and make it listen on the given port
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
