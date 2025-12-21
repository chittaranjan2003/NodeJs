// Import the http module (Node.js built-in module)
// This module is used to create an HTTP server
const http = require("http");

// Import the fs module
// This module is used to work with the file system
const fs = require("fs");

// Create an HTTP server
// This callback function runs whenever a request comes from the browser
const server = http.createServer((req, res) => {
  // Log the request URL, method, and headers
  console.log(req.url, req.method, req.headers);

  // ===== HOME PAGE ROUTE =====
  // If the user visits the "/" URL
  if (req.url === "/") {
    // Set the response content type to HTML
    res.setHeader("Content-Type", "text/html");

    // Send the HTML form page to the browser
    res.write(`<html>
        <head>
        <title>Home Page.</title>
        </head>
        <body>
        <h1>Enter Your Details.</h1>

        <!-- When the form is submitted, a POST request is sent to /submit -->
        <form action="/submit" method="POST">
        <input type="text" name="name' placeholder="Enter your name"><br><br>

        <label for="gender">GEnder:</label>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label>

        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label><br><br>

        <button type="submit">Submit</button>
        
        </form>
        </body>
        </html>`);

    // End the response here
    return res.end();
  }

  // ===== FORM SUBMIT ROUTE =====
  // If the URL is "/submit" and the request method is POST
  else if (req.url.toLocaleLowerCase() === "/submit" && req.method === "POST") {
    // Write data to a file on the server (synchronous operation)
    fs.writeFileSync("user.txt", "Chitta");

    // Set status code for redirection
    res.statusCode = 302;

    // After redirect, the user will go back to the "/" page
    res.setHeader("Location", "/");
  }

  // ===== 404 ERROR PAGE =====
  // If the URL does not match any route above
  res.setHeader("Content-Type", "text/html");

  // Send the 404 error page HTML
  res.write(`<html>
        <head><title>Error Page.</title>
        </head>
        <body>
        <h1>404 Page Not Found</h1>
        </body>
        </html>`);

  // End the response
  return res.end();
});

// Define the port on which the server will run
const PORT = 3000;

// Start the server and listen on the given port
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
