const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("add_home", { pageTitle: "Add Home to Airbnb" });
};

exports.postRegisteredSuccessfully = (req, res, next) => {
  const { houseName, price, location, rating, homeImage } = req.body;
  const home = new Home(houseName, price, location, rating, homeImage);
  home.save();
  console.log(req.body);
  res.render("home_added", { pageTitle: "Home added successfully" });
};

exports.getHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) => {
    res.render("home", {
      registeredHomes: registeredHomes,
      pageTitle: "Airbnb Home",
    });
  });
};
