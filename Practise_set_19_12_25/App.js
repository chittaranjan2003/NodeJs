// http module import ho raha hai (Node.js ka in-built module)
// Ye module HTTP server create karne ke kaam aata hai
const http = require("http");

// HTTP server create ho raha hai
// Ye callback function har incoming request par execute hoga
const server = http.createServer((req, res) => {
  // Har request ka URL, method aur headers console me print honge
  console.log(req.url, req.method, req.headers);

  // ===== ROOT ROUTE "/" =====
  // Jab user base URL hit kare (http://localhost:3000/)
  if (req.url === "/") {
    // Browser ko bataya ja raha hai ki response HTML hai
    res.setHeader("Content-Type", "text/html");

    // Main Myntra landing page browser ko bhej rahe hain
    res.write(`<html>
        <head>
        <title>Myntra Page.</title>
        </head>
        <body>
        <h>Welcome to Myntra</h1><br><br>

        <!-- Navigation links -->
        <a href="/home">Home</a><br><br>
        <a href="/men">Men</a><br><br>
        <a href="/women">Women</a><br><br>
        <a href="/kids">Kids</a><br><br>
        <a href="/cart">Cart</a>
        </body>
        </html>`);

    // Response yahin end ho jata hai
    return res.end();
  }

  // ===== HOME PAGE ROUTE =====
  // Jab user /home URL open kare
  else if (req.url === "/home") {
    // Response ka type HTML set kar rahe hain
    res.setHeader("Content-Type", "text/html");

    // Home page ka HTML bhej rahe hain
    res.write(`<html>
        <head>
        <title>Home Page.</title>
        </head>
        <body>
        <h1>Welcome to Home Page</h1>
        </body>
        </html>`);

    // Response end
    return res.end();
  }

  // ===== MEN PAGE ROUTE =====
  // Jab user /men URL open kare
  else if (req.url === "/men") {
    // Content type HTML set
    res.setHeader("Content-Type", "text/html");

    // Men page ka content bhej rahe
    res.write(`<html>
        <head>
        <title>Men Page.</title>
        </head>
        <body>
        <h1>Welcome to Men Page</h1>
        </body>
        </html>`);

    // Response finish
    return res.end();
  }

  // ===== WOMEN PAGE ROUTE =====
  // Jab user /women URL open kare
  else if (req.url === "/women") {
    // Response header set
    res.setHeader("Content-Type", "text/html");

    // Women page ka HTML bhej rahe
    res.write(`<html>
        <head>
        <title>Women Page.</title>
        </head>
        <body>
        <h1>Welcome to Women Page</h1>
        </body>
        </html>`);

    // Response end
    return res.end();
  }

  // ===== KIDS PAGE ROUTE =====
  // Jab user /kids URL open kare
  else if (req.url === "/kids") {
    // Content type HTML
    res.setHeader("Content-Type", "text/html");

    // Kids page ka content
    res.write(`<html>
        <head>
        <title>Kids Page.</title>
        </head>
        <body>
        <h1>Welcome to Kids Page</h1>
        </body>
        </html>`);

    // Response close
    return res.end();
  }

  // ===== CART PAGE ROUTE =====
  // Jab user /cart URL open kare
  else if (req.url === "/cart") {
    // Header set
    res.setHeader("Content-Type", "text/html");

    // Cart page ka HTML
    res.write(`<html>
        <head>
        <title>Cart Page.</title>
        </head>
        <body>
        <h1>Welcome to Cart Page</h1>
        </body>
        </html>`);

    // Response end
    return res.end();
  }

  // ===== 404 ERROR PAGE =====
  // Agar upar ka koi bhi route match na kare
  res.setHeader("Content-Type", "text/html");

  // Error page browser ko bhej rahe
  res.write(`<html>
        <head>
        <title>Error Page.</title>
        </head>
        <body>
        <h1> 404 Page not found</h1>
        </body>
        </html>`);

  // Response end
  res.end();
});

// Server kis port par chalega
const PORT = 3000;

// Server start ho raha hai aur given port par listen kar raha hai
server.listen(PORT, () => {
  console.log(`Server running  on address http://localhost:${PORT}`);
});
