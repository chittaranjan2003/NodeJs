//core module
const http = require("http");

//External module
const express = require("express");

//Local module
const Request_Handler = require("./Request_Handler");

const app = express();

app.use((req, res, next) => {
  console.log("1st middleware");
  next();
});

app.use((req, res, next) => {
  console.log("2nd middleware");
  res.send("<h1>hello world</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
