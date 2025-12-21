const { SumHandler } = require("./Sum");

const ReqeuestHandler = (req, res) => {
  // Log the requested URL and HTTP method
  console.log(req.url, req.method);

  // Home page route
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
  }

  // Calculator page route
  else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
        <head>
        <title>Calculator Page.</title>
        </head>
        <body>
        <h1>Welcome to the Calculator page.</h1>

        <!-- Form sends POST request to /result -->
        <form action="/result" method="POST">
        <input type="text" name="first" placeholder="Enter first number"/><br><br>
        <input type="text" name="second" placeholder="Enter second number"/><br><br>
        <button type="submit">Calculate</button><br><br>
        <a href="/">Back to Home</a>
        </form>

        </body>
        </html>`);

    return res.end();
  }

  // Result route for POST request
  else if (req.url === "/result" && req.method === "POST") {
    // Pass request and response to SumHandler
    return SumHandler(req, res);
  }
};

exports.ReqeuestHandler = ReqeuestHandler;
