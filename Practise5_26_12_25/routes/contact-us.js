// Import express
const express = require("express");

// Create router
const contactRouter = express.Router();

// Import path module
const path = require("path");

// Root directory
const rootDir = require("../utils/pathUtils");

/*
  GET request for "/contact-us"
  => Runs when user opens http://localhost:3000/contact-us
*/
contactRouter.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);

  // Send contact.html file
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});

// Export router
module.exports = contactRouter;
