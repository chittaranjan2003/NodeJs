// Node.js ka in-built http module import ho raha hai
// Isse hum server bana sakte hain
const http = require("http");

// File system module import ho raha hai
// Isse file me data write / read kar sakte hain
const fs = require("fs");

// stream/consumers se json import hua hai (abhi use nahi ho raha)
const { json } = require("stream/consumers");

// HTTP server create ho raha hai
// Ye callback function tab chalega jab bhi browser se request aayegi
const server = http.createServer((req, res) => {

  // Har request ka URL aur method console me print hoga
  console.log(req.url, req.method);

  // ===== HOME PAGE ROUTE =====
  // Agar user "/" URL hit kare
  if (req.url === "/") {

    // Response ka content type HTML set kar rahe hain
    res.setHeader("Content-Type", "text/html");

    // Browser ko HTML page bhej rahe hain
    res.write(`<html>
        <head>
        <title>Home Page.</title>
        </head>
        <body>
        <h1>Enter Your Details.</h1>

        <!-- Form banaya gaya hai -->
        <!-- action="/submit" matlab submit hone par /submit route hit hoga -->
        <!-- method="POST" matlab data request body me jayega -->
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

    // Response end kar diya, yahin se request ka flow finish
    return res.end();
  }

  // ===== FORM SUBMIT ROUTE =====
  // Agar URL /submit ho aur method POST ho
  else if (
    req.url.toLocaleLowerCase() === "/submit" &&
    req.method === "POST"
  ) {

    // Yahan body chunks collect karne ke liye array banaya
    const body = [];

    // "data" event tab trigger hota hai
    // jab request body ka koi chunk aata hai
    req.on("data", (chunk) => {
      console.log(chunk); // raw buffer data
      body.push(chunk);   // chunk ko array me push kar rahe
    });

    // "end" event tab chalega
    // jab poora data aa chuka hoga
    req.on("end", () => {

      // Saare chunks ko ek buffer me jod diya
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);

      // URL encoded data ko parse kar rahe
      const params = new URLSearchParams(fullBody);

      // URLSearchParams ko normal object me convert kar rahe
      const bodyObj = Object.fromEntries(params);
      console.log(bodyObj);

      // User ka data file me save kar rahe (blocking operation)
      fs.writeFileSync("user.txt", JSON.stringify(bodyObj));
    });

    // Client ko redirect response bhej rahe hain
    res.statusCode = 302;

    // Redirect hone ke baad "/ "
