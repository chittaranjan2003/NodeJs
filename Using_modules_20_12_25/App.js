// http module import ho raha hai (Node.js ka in-built module)
// Is module ki madad se hum HTTP server bana sakte hain
const http = require("http");

// Custom module import ho raha hai
// "./User" file se requestHandler function aa raha hai
const requestHandler = require("./User");

// HTTP server create ho raha hai
// Yahan requestHandler ko callback ke roop me pass kiya gaya hai
// Jab bhi koi request aayegi, requestHandler(req, res) execute hoga
const server = http.createServer(requestHandler);

// Server kis port par run karega
const PORT = 3000;

// Server start ho raha hai aur given port par listen kar raha hai
// Ye callback sirf tab chalega jab server successfully start ho jaye
server.listen(PORT, () => {
  console.log(`Server running  on address http://localhost:${PORT}`);
});
