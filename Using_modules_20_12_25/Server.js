// Import the http module (Node.js built-in module)
// This module is used to create an HTTP server
const http = require("http");

// Import the custom module
// requestHandler is coming from the "./User" file
const requestHandler = require("./User");

// Create an HTTP server
// requestHandler is passed as the callback function
// Whenever a request comes, requestHandler(req, res) will run
const server = http.createServer(requestHandler);

// Define the port on which the server will run
const PORT = 3000;

// Start the server and listen on the given port
// This callback runs only when the server starts successfully
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
