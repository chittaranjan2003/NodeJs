// Import express
const express = require("express");

// Create router object
const homeRouter = express.Router();

// Import path module
const path = require("path");

// Root directory helper
const rootDir = require("../utils/pathUtils");

/*
  GET request for "/"
   =>Runs when user opens http://localhost:3000/
*/
homeRouter.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);

  // Send Home.html file to browser
  res.sendFile(path.join(rootDir, "views", "Home.html"));
});

// Export router
module.exports = homeRouter;
