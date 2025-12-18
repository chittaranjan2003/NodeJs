const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

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
    fs.writeFileSync("user.txt", "Chitta");
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
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running  on address http://localhost:${PORT}`);
});
