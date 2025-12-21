const http = require("http");
const { ReqeuestHandler } = require("./UserPage");

// Create the server
const server = http.createServer(ReqeuestHandler);

// Define the port number
const PORT = 3000;

// Start the server and listen on port 3000
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
