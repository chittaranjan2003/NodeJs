const fs = require("fs");

const users = (req, res) => {
  // read users file
  fs.readFile("users.json", "utf-8", (err, data) => {
    if (err) {
      res.statusCode = 500;
      return res.end("Error reading file");
    }

    // convert JSON data to array
    const usersArray = JSON.parse(data);

    res.setHeader("Content-Type", "text/html");

    res.write(`<html><body><h1>Registered Users</h1>`);

    // 🔁 LOOP IS USED HERE BECAUSE USERS ARE MULTIPLE
    usersArray.forEach((user, index) => {
      res.write(`
        <p>
          ${index + 1}. Name: ${user.name} <br>
          Gender: ${user.gender}
        </p>
        <hr>
      `);
    });

    res.write(`<a href="/">Go Home</a></body></html>`);
    res.end();
  });
};

module.exports = users;
