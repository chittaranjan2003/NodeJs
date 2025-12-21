// import all modules
const Register = require("./Register");
const users = require("./users");
const FormHandling = require("./FormHandling");

// main request handler function
const requestHandler = (req, res) => {
  // log url and method for debugging
  console.log(req.url, req.method);

  // HOME PAGE
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");

    res.write(`
      <html>
        <head><title>Home Page</title></head>
        <body>
          <h1>Welcome to Home Page</h1>
          <a href="/register">Go to Register Page</a>
        </body>
      </html>
    `);

    return res.end();
  }

  // REGISTER PAGE (FORM UI)
  else if (req.url.toLowerCase() === "/register") {
    // calling Register module
    Register(req, res);
  }

  // FORM SUBMIT HANDLING
  else if (req.url.toLowerCase() === "/submit" && req.method === "POST") {
    // calling FormHandling module
    FormHandling(req, res);
  }

  // USERS PAGE (SHOW ALL USERS)
  else if (req.url.toLowerCase() === "/users") {
    // calling users module
    users(req, res);
  }

  // 404 PAGE
  else {
    res.statusCode = 404;
    res.end("404 Page Not Found");
  }
};

module.exports = requestHandler;
