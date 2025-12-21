// Import the http module (Node.js built-in module)
// This module is used to create an HTTP server
const http = require("http");

// Create an HTTP server
// This callback function runs for every incoming request
const server = http.createServer((req, res) => {

  // Print request URL, method, and headers in the console
  console.log(req.url, req.method, req.headers);

  // ===== ROOT ROUTE "/" =====
  // When the user hits the base URL (http://localhost:3000/)
  if (req.url === "/") {

    // Tell the browser that the response is HTML
    res.setHeader("Content-Type", "text/html");

    // Send the main Myntra landing page to the browser
    res.write(`<html>
        <head>
        <title>Myntra Page.</title>
        </head>
        <body>
        <h>Welcome to Myntra</h1><br><br>

        <!-- Navigation links -->
        <a href="/home">Home</a><br><br>
        <a href="/men">Men</a><br><br>
        <a href="/women">Women</a><br><br>
        <a href="/kids">Kids</a><br><br>
        <a href="/cart">Cart</a>
        </body>
        </html>`);

    // End the response here
    return res.end();
  }

  // ===== HOME PAGE ROUTE =====
  // When the user opens the /home URL
  else if (req.url === "/home") {

    // Set response content type as HTML
    res.setHeader("Content-Type", "text/html");

    // Send Home page HTML
    res.write(`<html>
        <head>
        <title>Home Page.</title>
        </head>
        <body>
        <h1>Welcome to Home Page</h1>
        </body>
        </html>`);

    // End response
    return res.end();
  }

  // ===== MEN PAGE ROUTE =====
  // When the user opens the /men URL
  else if (req.url === "/men") {

    // Set content type to HTML
    res.setHeader("Content-Type", "text/html");

    // Send Men page content
    res.write(`<html>
        <head>
        <title>Men Page.</title>
        </head>
        <body>
        <h1>Welcome to Men Page</h1>
        </body>
        </html>`);

    // Finish response
    return res.end();
  }

  // ===== WOMEN PAGE ROUTE =====
  // When the user opens the /women URL
  else if (req.url === "/women") {

    // Set response header
    res.setHeader("Content-Type", "text/html");

    // Send Women page HTML
    res.write(`<html>
        <head>
        <title>Women Page.</title>
        </head>
        <body>
        <h1>Welcome to Women Page</h1>
        </body>
        </html>`);

    // End response
    return res.end();
  }

  // ===== KIDS PAGE ROUTE =====
  // When the user opens the /kids URL
  else if (req.url === "/kids") {

    // Set content type as HTML
    res.setHeader("Content-Type", "text/html");

    // Send Kids page content
    res.write(`<html>
        <head>
        <title>Kids Page.</title>
        </head>
        <body>
        <h1>Welcome to Kids Page</h1>
        </body>
        </html>`);

    // Close response
    return res.end();
  }

  // ===== CART PAGE ROUTE =====
  // When the user
