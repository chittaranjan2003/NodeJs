// fs module import ho raha hai
// Iska use file system ke sath kaam karne ke liye hota hai
const fs = require("fs");

// requestHandler ek function hai
// Ye function server se aane wali har request ko handle karega
const requestHandler = (req, res) => {
  // Har request ka URL console me print ho raha hai
  console.log("Request URL:", req.url);

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

        <!-- Form submit hone par POST request /submit par jayegi -->
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
    // Body data ko collect karne ke liye empty array
    const body = [];

    // "data" event tab fire hota hai
    // jab request body ka chunk aata hai
    req.on("data", (chunk) => {
      console.log(chunk); // raw buffer data
      body.push(chunk); // chunk ko array me push kar rahe
    });

    // "end" event tab chalega
    // jab saara data receive ho chuka hoga
    req.on("end", () => {
      // Saare chunks ko combine karke string bana rahe hain
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);

      // URL encoded data ko parse kar rahe hain
      const params = new URLSearchParams(fullBody);

      // Parsed data ko normal object me convert kar rahe hain
      const bodyObj = Object.fromEntries(params);
      console.log(bodyObj);

      // User ka data file me write kar rahe hain (sync way)
      fs.writeFileSync("user.txt", JSON.stringify(bodyObj));
    });

    // Redirect ke liye status code set kar rahe hain
    res.statusCode = 302;

    // Redirect hone ke baad user "/" page par wapas jayega
    res.setHeader("Location", "/");
  }

  // ===== 404 ERROR PAGE =====
  // Agar URL kisi bhi route se match nahi karta
  res.setHeader("Content-Type", "text/html");

  // 404 error page browser ko bhej rahe hain
  res.write(`<html>
        <head><title>Error Page.</title>
        </head>
        <body>
        <h1>404 Page Not Found</h1>
        </body>
        </html>`);

  // Response end
  return res.end();
};

// requestHandler function ko export kar rahe hain
// Taaki dusri file (server.js) me use ho sake
module.exports = requestHandler;
