// Core Module
const path = require("path");

// External module
const express = require("express");
const userRouter = express.Router();

const rootDir = require("../utils/path_uitility"); // Local Module

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = userRouter;
