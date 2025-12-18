const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  process.exit();
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running in  on addres http://localhost:${PORT}`);
});
//process.exit() method he jisse hum apne node js application ko exit kar sakte hai. and ye method node installation ke sath hi aata hai.like js me window he
