// Export so server.js use kar sake
const { sumReqeuestHandler } = require("./Sum");

// Main request handler function
const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
        <head>
        <title>Home Page.</title>
        </head>
        <body>
        <h1>Welcome to the home page.</h1>
        <a href="/calculator">Go to Calculator</a>
        </body>
        </html>`);
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
        <head>
        <title>Calculator Page.</title>
        </head>
        <body>
        <h1>Welcome to the Calculator page.</h1>
        <form action="/result" method="POST">
        <input type="text" name="first" placeholder="Enter first number"/><br><br>
        <input type="text" name="second" placeholder="Enter 2nd number"/><br><br>
        <button type ="Submit" >Calculate</button><br><br>
        <a href="/">Back to Home</a>
        </form>
        </body>
        </html>`);
    return res.end();
  } else if (req.url === "/result" && req.method === "POST") {
    // Calculation ka kaam Sum.js ko de diya
    return sumReqeuestHandler(req, res);
  }
};
// Export so server.js use kar sake
exports.requestHandler = requestHandler;
