// Import the fs module
// This module is used to work with the file system
const fs = require("fs");

// requestHandler is a function
// This function handles every request coming to the server
const requestHandler = (req, res) => {
  // Print the request URL in the console
  console.log("Request URL:", req.url);

  // ===== HOME PAGE ROUTE =====
  // If the user visits the "/" URL
  if (req.url === "/") {
    // Set response content type to HTML
    res.setHeader("Content-Type", "text/html");

    // Send the HTML form page to the browser
    res.write(`<html>
        <head>
        <title>Home Page.</title>
        </head>
        <body>
        <h1>Enter Your Details.</h1>

        <!-- When the form is submitted, a POST request goes to /submit -->
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

    return res.end();
  }

  // ===== FORM SUBMIT ROUTE =====
  // If the URL is "/submit" and the request method is POST
  else if (req.url.toLocaleLowerCase() === "/submit" && req.method === "POST") {
    // Create an empty array to collect request body data
    const body = [];

    // The "data" event fires when a chunk of data is received
    req.on("data", (chunk) => {
      console.log(chunk); // raw buffer data
      body.push(chunk); // store each chunk in the array
    });

    // The "end" event fires when all data has been received
    req.on("end", () => {
      // Combine all chunks and convert them into a string
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);

      // Parse URL-encoded form data
      const params = new URLSearchParams(fullBody);

      // Convert parsed data into a normal JavaScript object
      const bodyObj = Object.fromEntries(params);
      console.log(bodyObj);

      // Write user data into a file (synchronous operation)
      fs.writeFileSync("user.txt", JSON.stringify(bodyObj));
    });

    // Set status code for redirection
    res.statusCode = 302;

    // After redirect, the user will go back to the home page
    res.setHeader("Location", "/");
  }

  // ===== 404 ERROR PAGE =====
  // If no route matches the request URL
  res.setHeader("Content-Type", "text/html");

  // Send the 404 error page to the browser
  res.write(`<html>
        <head><title>Error Page.</title>
        </head>
        <body>
        <h1>404 Page Not Found</h1>
        </body>
        </html>`);

  // End the response
  return res.end();
};

// Export the requestHandler function
// So it can be used in server.js
module.exports = requestHandler;
