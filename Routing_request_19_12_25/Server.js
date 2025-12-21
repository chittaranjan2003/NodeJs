// Import the http module (built-in Node.js module)
// This module is used to create an HTTP server
const http = require("http");

// Create an HTTP server
// This callback function runs whenever a request comes from the browser
const server = http.createServer((req, res) => {
  // Print the URL, method, and headers of every incoming request
  console.log(req.url, req.method, req.headers);

  // ===== HOME ROUTE =====
  // If the user hits the "/" URL
  if (req.url === "/") {
    // Set the response content type to HTML
    res.setHeader("Content-Type", "text/html");

    // Send the Home page HTML response
    res.write(`<html>
        <head><title>Home Page.</title>
        </head>
        <body>
        <h1>Home page.</h1>
        </body>
        </html>`);

    // End the response here
    return res.end();
  }

  // ===== PRODUCTS ROUTE =====
  // If the user hits the "/products" URL
  else if (req.url === "/products") {
    // Set the response content type to HTML
    res.setHeader("Content-Type", "text/html");

    // Send the Products page HTML response
    res.write(`<html>
        <head><title>Products Page.</title>
        </head>
        <body>
        <h1>Checkout our products.</h1>
        </body>
        </html>`);

    // Finish the response
    return res.end();
  }

  // ===== 404 ERROR ROUTE =====
  // If the URL does not match any route above
  else {
    // Set the content type for the error page
    res.setHeader("Content-Type", "text/html");

    // Send the 404 error page
    res.write(`<html>
        <head><title>Error Page.</title>
        </head>
        <body>
        <h1>404 Page Not Found</h1>
        </body>
        </html>`);

    // End the response
    return res.end();
  }
});
