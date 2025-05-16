// Core Module
const path = require("path");

// External module
const express = require("express");
const userRouter = express.Router();

const { registeredHomes } = require("./hostRouter"); // Local Module
const rootDir = require("../utils/path_uitility"); // Local Module

userRouter.get("/", (req, res, next) => {
  if (registeredHomes.length != 0) {
    console.log(registeredHomes, registeredHomes.length);
  }
  res.render("home", {
    registeredHomes: registeredHomes,
    pageTitle: "Airbnb Home",
  });
});

module.exports = userRouter;
