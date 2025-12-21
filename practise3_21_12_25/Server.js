// http module is used to create server
const http = require("http");

// importing request handler function
const requestHandler = require("./Request_Handler");

// create server and pass requestHandler
const server = http.createServer(requestHandler);

// server will listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
