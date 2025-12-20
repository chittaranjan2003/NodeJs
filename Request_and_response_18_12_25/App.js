// http module import ho raha hai (Node.js ka in-built module)
// Is module ka use karke hum HTTP server bana sakte hain
const http = require("http");

// HTTP server create ho raha hai
// Ye callback function tab chalega jab bhi browser se request aayegi
const server = http.createServer((req, res) => {
  // Jaise hi request aati hai,
  // request ka URL, headers aur method console me print hote hain
  console.log(req.url, req.headers, req.method);

  // Response ka content type HTML set kar rahe hain
  res.setHeader("Content-Type", "text/html");

  // Browser ko HTML response bhej rahe hain
  res.write(`<html>
    <head>
    <title>My First Page</title>
    </head>
    <body>
    <h1>Hello from my Node.js Server!</h1>
    </body>
    </html>
    `);

  // Response end kar rahe hain
  res.end();
});

// Server kis port par chalega wo define kar rahe hain
const PORT = 3000;

// Server start ho raha hai aur port par listen kar raha hai
// Ye callback sirf tab chalega jab server successfully start ho jaye
server.listen(PORT, () => {
  console.log(`Server running in  on addres http://localhost:${PORT}`);
});
