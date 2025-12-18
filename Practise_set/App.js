const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
        <head>
        <title>Myntra Page.</title>
        </head>
        <body>
        <h>Welcome to Myntra</h1><br><br>
        <a href="/home">Home</a><br><br>
        <a href="/men">Men</a><br><br>
        <a href="/women">Women</a><br><br>
        <a href="/kids">Kids</a><br><br>
        <a href="/cart">Cart</a>
        </body>
        </html>`);
    return res.end();
  } else if (req.url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
        <head>
        <title>Home Page.</title>
        </head>
        <body>
        <h1>Welcome to Home Page</h1>
        </body>
        </html>`);
    return res.end();
  } else if (req.url === "/men") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
        <head>
        <title>Men Page.</title>
        </head>
        <body>
        <h1>Welcome to Men Page</h1>
        </body>
        </html>`);
    return res.end();
  } else if (req.url === "/women") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
        <head>
        <title>Women Page.</title>
        </head>
        <body>
        <h1>Welcome to Women Page</h1>
        </body>
        </html>`);
    return res.end();
  } else if (req.url === "/kids") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
        <head>
        <title>Kids Page.</title>
        </head>
        <body>
        <h1>Welcome to Kids Page</h1>
        </body>
        </html>`);
    return res.end();
  } else if (req.url === "/cart") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
        <head>
        <title>Cart Page.</title>
        </head>
        <body>
        <h1>Welcome to Cart Page</h1>
        </body>
        </html>`);
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`<html>
        <head>
        <title>Error Page.</title>
        </head>
        <body>
        <h1> 404 Page not found</h1>
        </body>
        </html>`);
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running  on address http://localhost:${PORT}`);
});
