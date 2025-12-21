// Import the built-in http module
const http = require("http");

// Import the request handler from UserPage file
const { requestHandler } = require("./UserPage");

// Create the server and pass the request handler
const server = http.createServer(requestHandler);

// Define the port number
const PORT = 3000;

// Start the server and listen on the given port
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
