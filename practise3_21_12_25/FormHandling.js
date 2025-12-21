const fs = require("fs");

const FormHandling = (req, res) => {
  const body = [];

  // data chunks receive ho rahe hain
  req.on("data", (chunk) => {
    body.push(chunk);
  });

  // jab pura data aa jata hai
  req.on("end", () => {
    // convert buffer to string
    const fullBody = Buffer.concat(body).toString();

    // convert form data to object
    const params = new URLSearchParams(fullBody);
    const bodyObj = Object.fromEntries(params);

    // read existing users from file
    fs.readFile("users.json", "utf-8", (err, data) => {
      let users = [];

      // agar file me data hai
      if (!err && data) {
        users = JSON.parse(data);
      }

      // add new user
      users.push(bodyObj);

      // save updated data to file
      fs.writeFile("users.json", JSON.stringify(users), (error) => {
        if (error) {
          res.statusCode = 500;
          return res.end("Error saving data");
        }

        console.log("Data Written Successfully");

        // redirect to users page
        res.statusCode = 302;
        res.setHeader("Location", "/users");
        return res.end();
      });
    });
  });
};

module.exports = FormHandling;
