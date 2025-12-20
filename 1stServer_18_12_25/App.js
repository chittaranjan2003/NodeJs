// http module ko import kar rahe hain (Node ka in-built module)
const http = require("http");

// Server create kar rahe hain
// Ye function tab chalega jab bhi koi request aayegi
const server = http.createServer((req, res) => {
  // Client ki request ka data print kar rahe hain
  console.log(req.url); // kaunsa URL hit hua
  console.log(req.method); // GET / POST
  console.log(req.headers); // request headers
});

// Port number define kar rahe hain
const PORT = 3000;

// Server ko start kar rahe hain aur port par listen kara rahe hain
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
