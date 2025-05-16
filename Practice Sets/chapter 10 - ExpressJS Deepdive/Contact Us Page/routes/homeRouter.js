const path = require("path");
const express = require("express");
const homeRouter = express.Router();
const rootDir = require("../utils/path_utility");

homeRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = homeRouter;
