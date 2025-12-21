// Import the http module (Node.js built-in module)
const http = require("http");

// Import the custom request handler from User module
const { requestHandler } = require("./User");

// Create the HTTP server and pass the request handler
const server = http.createServer(requestHandler);

// Define the port number
const PORT = 3000;

// Start the server and listen on the given port
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
