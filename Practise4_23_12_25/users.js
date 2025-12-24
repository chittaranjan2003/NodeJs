const fs = require("fs");

// Show all registered users
const users = (req, res) => {
  // Read users data from JSON file
  fs.readFile("users.json", "utf-8", (err, data) => {
    if (err) {
      res.statusCode = 500;
      return res.end("Error reading file");
    }

    const usersArray = JSON.parse(data);
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <title>Users page</title>
        </head>
        <body>
          <h1>Registered Users </h1>
    `);

    // Loop through users and display details
    usersArray.forEach((users, index) => {
      res.write(`
            <p>${index + 1}. Name: ${users.name}<br>
            Gender: ${users.gender}<br>
            Email Address: ${users.email}<br>
            Feedback Type: ${users.feedback}<br>
            Feedback Message: ${users.message}<br>
            <p>
             <a href="/delete?index=${index}">Delete</a>
            <hr>`);
    });

    res.write(`<a href="/">Go to Home page</a> </body> </html>`);
    res.end();
  });
};

module.exports = users;
