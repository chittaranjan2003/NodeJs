// http module import ho raha hai (Node.js ka in-built module)
// Is module ki madad se hum HTTP server bana sakte hain
const http = require("http");

// HTTP server create ho raha hai
// Ye callback function tab execute hota hai jab bhi browser se request aati hai
const server = http.createServer((req, res) => {
  // Har incoming request ka URL, method aur headers console me print honge
  console.log(req.url, req.method, req.headers);

  // ===== HOME ROUTE =====
  // Agar user "/" URL hit karta hai
  if (req.url === "/") {
    // Response ka content type HTML set kar rahe hain
    res.setHeader("Content-Type", "text/html");

    // Home page ka HTML response bhej rahe hain
    res.write(`<html>
        <head><title>Home Page.</title>
        </head>
        <body>
        <h1>Home page.</h1>
        </body>
        </html>`);

    // Response yahin end ho jata hai
    return res.end();
  }

  // ===== PRODUCTS ROUTE =====
  // Agar user "/products" URL hit karta hai
  else if (req.url === "/products") {
    // HTML response set ho raha hai
    res.setHeader("Content-Type", "text/html");

    // Products page ka response bheja ja raha hai
    res.write(`<html>
        <head><title>Products Page.</title>
        </head>
        <body>
        <h1>Checkout our products.</h1>
        </body>
        </html>`);

    // Response complete
    return res.end();
  }

  // ===== 404 ERROR ROUTE =====
  // Agar URL kisi bhi condition se match nahi hota
  else {
    // Error page ka content type set kar rahe hain
    res.setHeader("Content-Type", "text/html");

    // 404 error page bhej rahe hain
    res.write(`<html>
        <head><title>Error Page.</title>
        </head>
        <body>
        <h1>404 Page Not Found</h1>
        </body>
        </html>`);

    // Response end
    return res.end();
  }
});

// Server kis port par run karega
const PORT = 3000;

// Server start ho raha hai aur given port par listen kar raha hai
// Ye callback sirf tab chalega jab server successfully start ho jaye
server.listen(PORT, () => {
  console.log(`Server running  on address http://localhost:${PORT}`);
});
