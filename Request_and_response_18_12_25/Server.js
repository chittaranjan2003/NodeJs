// Import the http module (built-in Node.js module)
// This module is used to create an HTTP server
const http = require("http");

// Create an HTTP server
// This callback function runs whenever a request comes from the browser
const server = http.createServer((req, res) => {
  // As soon as a request comes,
  // the request URL, headers, and method are printed in the console
  console.log(req.url, req.headers, req.method);

  // Set the response content type to HTML
  res.setHeader("Content-Type", "text/html");

  // Send an HTML response to the browser
  res.write(`<html>
    <head>
    <title>My First Page</title>
    </head>
    <body>
    <h1>Hello from my Node.js Server!</h1>
    </body>
    </html>
    `);

  // End the response
  res.end();
});

// Define the port number where the server will run
const PORT = 3000;

// Start the server and listen on the given port
// This callback runs only when the server starts successfully
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
