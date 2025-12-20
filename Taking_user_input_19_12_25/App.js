// http module import ho raha hai (Node.js ka in-built module)
// Is module ki madad se hum HTTP server bana sakte hain
const http = require("http");

// fs module import ho raha hai
// Is module ka use file system ke sath kaam karne ke liye hota hai
const fs = require("fs");

// HTTP server create ho raha hai
// Ye callback function tab chalega jab bhi browser se request aayegi
const server = http.createServer((req, res) => {
  // Har incoming request ka URL, method aur headers console me print honge
  console.log(req.url, req.method, req.headers);

  // ===== HOME PAGE ROUTE =====
  // Agar user "/" URL hit karta hai
  if (req.url === "/") {
    // Response ka content type HTML set kar rahe hain
    res.setHeader("Content-Type", "text/html");

    // Browser ko HTML form page bhej rahe hain
    res.write(`<html>
        <head>
        <title>Home Page.</title>
        </head>
        <body>
        <h1>Enter Your Details.</h1>

        <!-- Form submit hone par /submit route POST request ke sath hit hoga -->
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

    // Response yahin end ho jata hai
    return res.end();
  }

  // ===== FORM SUBMIT ROUTE =====
  // Agar URL /submit ho aur request method POST ho
  else if (req.url.toLocaleLowerCase() === "/submit" && req.method === "POST") {
    // Server side par file me data write ho raha hai (synchronous way)
    fs.writeFileSync("user.txt", "Chitta");

    // Client ko redirect karne ke liye status code set kar rahe hain
    res.statusCode = 302;

    // Redirect hone ke baad user "/" page par wapas jayega
    res.setHeader("Location", "/");
  }

  // ===== 404 ERROR PAGE =====
  // Agar URL kisi bhi route se match nahi karta
  res.setHeader("Content-Type", "text/html");

  // Error page ka HTML response bhej rahe hain
  res.write(`<html>
        <head><title>Error Page.</title>
        </head>
        <body>
        <h1>404 Page Not Found</h1>
        </body>
        </html>`);

  // Response end
  return res.end();
});

// Server kis port par run karega
const PORT = 3000;

// Server start ho raha hai aur given port par listen kar raha hai
server.listen(PORT, () => {
  console.log(`Server running  on address http://localhost:${PORT}`);
});
