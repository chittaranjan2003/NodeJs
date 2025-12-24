// Import custom modules for different routes
const register = require("./Register");
const registerHandler = require("./register_handler");
const users = require("./users");
const delete_btn = require("./delete_btn");

// Main request handler function
const requestHandler = (req, res) => {
  // Create URL object to easily get path and query params
  const urlObj = new URL(req.url, `http://localhost:3000`);
  const path = urlObj.pathname;

  console.log(req.url, req.method);

  // If user visits root URL
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Home Page</title></head>
        <body>
          <h1>Welcome to Home Page</h1>
          <a href="/register">Go to Register Page</a>
        </body>
      </html>`);
    return res.end();
  }
  // If user visits register page
  else if (req.url.toLowerCase() === "/register") {
    register(req, res);
  }
  // Handle form submission (POST request)
  else if (req.url.toLowerCase() === "/submit" && req.method === "POST") {
    registerHandler(req, res);
  }
  // Show all registered users
  else if (req.url.toLowerCase() === "/users") {
    users(req, res);
  }
  // Handle delete request
  else if (path.toLowerCase() === "/delete") {
    delete_btn(req, res);
  }
  // If page not found
  else {
    res.statusCode = 404;
    res.end("404 Page Not Found");
  }
};

module.exports = requestHandler;
