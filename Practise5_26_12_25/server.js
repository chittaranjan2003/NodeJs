// Import express framework
const express = require("express");

// Import all routers
const homeRouter = require("./routes/home");
const contactRouter = require("./routes/contact-us");
const sucessRouter = require("./routes/sucess");

// Create express application
const app = express();

/*
  app.use() middleware
  => Whenever a request comes,
  Express will check these routers one by one
*/

// If request URL is "/" → goes to homeRouter
app.use(homeRouter);

// If request URL is "/contact-us" → goes to contactRouter
app.use(contactRouter);

// If request URL is "/sucess" → goes to sucessRouter
app.use(sucessRouter);

// Server port
const PORT = 3000;

/*
  app.listen()
  => Starts the server
  => Now server is ready to accept requests
*/
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
