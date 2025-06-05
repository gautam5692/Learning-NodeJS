const Home = require("../models/homeListModel");

exports.getHostHomePage = (req, res, next) => {
  res.render("host/host_home_page", {
    pageTitle: "Host Home Page",
    currentPage: "host/homePage",
  });
};

exports.getAddHome = (req, res, next) => {
  res.render("host/addHome", {
    pageTitle: "Add Home",
    currentPage: "host/addHome",
  });
};

exports.postHomeRegistered = (req, res, next) => {
  const { houseName, price, location, rating, homeImage } = req.body;
  const home = new Home(houseName, price, location, rating, homeImage);
  home.save();
  res.render("host/homeRegistered", {
    pageTitle: "Home  registered successfully",
  });
};

exports.getHostHomeList = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("host/host_home_list", {
      pageTitle: "Host Home List",
      currentPage: "host/homeList",
      registeredHomes: registeredHomes,
    });
  });
};
