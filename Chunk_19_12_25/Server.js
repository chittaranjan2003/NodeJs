// Import Node.js built-in http module
// It is used to create a server
const http = require("http");

// Import file system module
// It is used to read and write data in files
const fs = require("fs");

// Create an HTTP server
// This callback function runs whenever a request comes from the browser
const server = http.createServer((req, res) => {

  // Print request URL and method in the console
  console.log(req.url, req.method);

  // ===== HOME PAGE ROUTE =====
  // If the user hits the "/" URL
  if (req.url === "/") {

    // Set response content type to HTML
    res.setHeader("Content-Type", "text/html");

    // Send HTML page to the browser
    res.write(`<html>
        <head>
        <title>Home Page.</title>
        </head>
        <body>
        <h1>Enter Your Details.</h1>

        <!-- HTML form -->
        <!-- action="/submit" means the form will go to /submit route -->
        <!-- method="POST" means data will be sent in the request body -->
        <form action="/submit" method="POST">

        <input type="text" name="name' placeholder="Enter your name"><br><br>

        <label for="gender">Gender:</label>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label>

        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label><br><br>

        <button type="submit">Submit</button>
        
        </form>
        </body>
        </html>`);

    // End the response and finish the request
    return res.end();
  }

  // ===== FORM SUBMIT ROUTE =====
  // If URL is /submit and method is POST
  else if (
    req.url.toLocaleLowerCase() === "/submit" &&
    req.method === "POST"
  ) {

    // Create an array to collect request body chunks
    const body = [];

    // "data" event is triggered
    // when a chunk of request body is received
    req.on("data", (chunk) => {
