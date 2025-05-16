const path = require("path");
const express = require("express");
const hostRouter = express.Router();
const rootDir = require("../utils/path_uitility"); // Local Module

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add_home.html"));
});

hostRouter.post("/registered-successfully", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home_added.html"));
});

module.exports = hostRouter;
