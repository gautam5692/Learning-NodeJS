const path = require("path");
const express = require("express");
const contactRouter = express.Router();
const rootDir = require("../utils/path_utility");

contactRouter.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact_us.html"));
});

contactRouter.post("/contacting-shortly", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "form_successful.html"));
});

module.exports = contactRouter;
