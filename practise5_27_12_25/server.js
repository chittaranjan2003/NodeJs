const http = require("http");
const userRoute = require("./routes/userRoute");

//step1:-create server.
const server = http.createServer((req, res) => {
  //step 3
  userRoute(req, res);
});

//step2 listen server
const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
