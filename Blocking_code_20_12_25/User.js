// Import console error (not required here, but included)
const { error } = require("console");

// Import the file system module
const fs = require("fs");

// Request handler function
// This function executes on every incoming request
const requestHandler = (req, res) => {
  // Log request URL and HTTP method
  console.log(req.url, req.method);

  // If request is for home page
  if (req.url === "/") {
    // Set response header to HTML
    res.setHeader("Content-Type", "text/html");

    // Send HTML form to the browser
    res.write(`<html>
        <head>
        <title>Home Page.</title>
        </head>
        <body>
        <h1>Enter Your Details.</h1>

        <!-- Form will send POST request to /submit -->
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

    // End the response
    return res.end();
  }

  // If form is submitted using POST method
  else if (req.url.toLocaleLowerCase() === "/submit" && req.method === "POST") {
    // Array to collect incoming data chunks
    const body = [];

    // Listen for incoming data
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    // When all data is received
    req.on("end", () => {
      // Convert buffer data to string
      const fullBody = Buffer.concat(body).toString();

      // Parse URL-encoded form data
      const params = new URLSearchParams(fullBody);

      // Convert form data into JavaScript object
      const bodyObj = Object.fromEntries(params);

      // Write user data into a file
      fs.writeFile("user.txt", JSON.stringify(bodyObj), (error) => {
        console.log("Data Written Successfully");

        // Redirect user back to home page
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  // If route does not match any condition
  else {
    // Set response header
    res.setHeader("Content-Type", "text/html");

    // Send 404 error page
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
};

// Export request handler function
exports.requestHandler = requestHandler;
