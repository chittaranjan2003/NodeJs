// http module import ho raha hai (Node.js ka in-built module)
// Is module ka use karke hum HTTP server bana sakte hain
const http = require("http");

// Server create ho raha hai
// Ye callback function tab execute hoga jab bhi koi request aayegi
const server = http.createServer((req, res) => {
  // Jaise hi browser se request aati hai,
  // poora request object console me print ho jata hai
  console.log(req);

  // Ye line Node.js process ko turant terminate kar deti hai
  // Iske baad server band ho jata hai
  process.exit();
});

// Server kis port par chalega wo define kar rahe hain
const PORT = 3000;

// Server start ho raha hai aur given port par listen kar raha hai
// Ye callback sirf tab chalega jab server successfully start ho jaye
server.listen(PORT, () => {
  console.log(`Server running in  on addres http://localhost:${PORT}`);
});

//process.exit() method he jisse hum apne node js application ko exit kar sakte hai.
//and ye method node installation ke sath hi aata hai.like js me window he
