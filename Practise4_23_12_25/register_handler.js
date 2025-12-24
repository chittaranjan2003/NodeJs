const fs = require("fs");

// Handle registration form submission
const registerHandler = (req, res) => {
  const body = [];

  // Listen to data chunks from POST request
  req.on("data", (chunk) => {
    body.push(chunk);
  });

  // After all data is received
  req.on("end", () => {
    // Convert buffer to string
    const parseBody = Buffer.concat(body).toString();
    // Convert form data to object
    const params = new URLSearchParams(parseBody);
    const bodyObj = Object.fromEntries(params);

    // Read existing users from JSON file
    fs.readFile("users.json", "utf-8", (err, data) => {
      let user = [];
      if (!err && data) {
        user = JSON.parse(data);
      }

      // Add new user to array
      user.push(bodyObj);

      // Save updated array back to JSON file
      fs.writeFile("users.json", JSON.stringify(user), (err) => {
        if (err) {
          res.statusCode = 500;
          return res.end("Error saving data");
        }
        console.log("Data Written Successfully");

        // Redirect to users page after submission
        res.statusCode = 302;
        res.setHeader("Location", "/users");
        return res.end();
      });
    });
  });
};

module.exports = registerHandler;
