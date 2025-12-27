// Import express
const express = require("express");

// Create router
const sucessRouter = express.Router();

// Import path module
const path = require("path");

// Root directory
const rootDir = require("../utils/pathUtils");

/*
  POST request for "/sucess"
  => Usually comes from form submit
*/
sucessRouter.post("/sucess", (req, res, next) => {
  console.log("Handling /sucess for POST", req.url, req.method, req.body);

  // Send sucess.html file
  res.sendFile(path.join(rootDir, "views", "sucess.html"));
});

// Export router
module.exports = sucessRouter;
