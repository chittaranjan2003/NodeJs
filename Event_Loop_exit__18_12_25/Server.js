// Import the http module (Node.js built-in module)
// This module is used to create an HTTP server
const http = require("http");

// Create the server
// This callback function runs whenever a request is received
const server = http.createServer((req, res) => {
  // As soon as a request comes from the browser,
  // the complete request object is printed in the console
  console.log(req);

  // This line immediately terminates the Node.js process
  // After this, the server stops running
  process.exit();
});

// Define the port number on which the server will run
const PORT = 3000;

// Start the server and listen on the given port
// This callback runs only when the server starts successfully
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

// process.exit() is a method used to exit a Node.js application
// This method comes with Node.js installation
// Similar to how "window" exists in JavaScript for browsers
