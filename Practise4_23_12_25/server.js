const http = require("http");
const requestHandler = require("./Handler");

const Server = http.createServer(requestHandler);

const PORT = 3000;

Server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
