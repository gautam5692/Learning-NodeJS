const path = require("path");
const express = require("express");
const hostRouter = express.Router();
const rootDir = require("../utils/path_uitility"); // Local Module

hostRouter.get("/add-home", (req, res, next) => {
  res.render("add_home", { pageTitle: "Add Home to Airbnb" });
});

const registeredHomes = [];

hostRouter.post("/registered-successfully", (req, res, next) => {
  registeredHomes.push({
    houseName: req.body.houseName,
    price: req.body.price,
    location: req.body.location,
    rating: req.body.rating,
    homeImage: req.body.homeImage,
  });
  console.log(req.body);
  res.render("home_added", { pageTitle: "Home added successfully" });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
