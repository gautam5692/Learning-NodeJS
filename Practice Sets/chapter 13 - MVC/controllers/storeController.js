const Home = require("../models/homeListModel");

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/home", {
      pageTitle: "Airbnb Home Page",
      registeredHomes: registeredHomes,
      currentPage: "/",
    });
  });
};

exports.getHomeList = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/home_list", {
      pageTitle: "Airbnb Home List",
      currentPage: "homeList",
      registeredHomes: registeredHomes,
    });
  });
};

exports.getHomeDetails = (req, res, next) => {
  res.render("store/home_details", {
    pageTitle: "Airbnb Home Details",
    currentPage: "homeDetails",
  });
};

exports.getFavList = (req, res, next) => {
  res.render("store/fav_list", {
    pageTitle: "Airbnb Fav List",
    currentPage: "favList",
  });
};

exports.getReserve = (req, res, next) => {
  res.render("store/reserve", {
    pageTitle: "Airbnb Reserves",
    currentPage: "reserve",
  });
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "Airbnb Bookings",
    currentPage: "bookings",
  });
};
