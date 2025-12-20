const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
        <head><title>Home Page.</title>
        </head>
        <body>
        <h1>Home page.</h1>
        </body>
        </html>`);
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
        <head><title>Products Page.</title>
        </head>
        <body>
        <h1>Checkout our products.</h1>
        </body>
        </html>`);
    return res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
        <head><title>Error Page.</title>
        </head>
        <body>
        <h1>404 Page Not Found</h1>
        </body>
        </html>`);
    return res.end();
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running  on address http://localhost:${PORT}`);
});
