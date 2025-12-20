const fs = require("fs");

const requestHandler = (req, res) => {
  console.log("Request URL:", req.url);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");

    res.write(`<html>
        <head>
        <title>Home Page.</title>
        </head>
        <body>
        <h1>Enter Your Details.</h1>
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
  } else if (
    req.url.toLocaleLowerCase() === "/submit" &&
    req.method === "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);

      const params = new URLSearchParams(fullBody);
      const bodyObj = Object.fromEntries(params);
      console.log(bodyObj);
      fs.writeFileSync("user.txt", JSON.stringify(bodyObj));
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`<html>
        <head><title>Error Page.</title>
        </head>
        <body>
        <h1>404 Page Not Found</h1>
        </body>
        </html>`);
  return res.end();
};
module.exports = requestHandler;
