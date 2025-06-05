const express = require("express");
const storeRouter = express.Router();
const storeHomeController = require("../controllers/storeController");

storeRouter.get("/", storeHomeController.getHomes);
storeRouter.get("/homeList", storeHomeController.getHomeList);
storeRouter.get("/homeDetails", storeHomeController.getHomeDetails);
storeRouter.get("/favList", storeHomeController.getFavList);
storeRouter.get("/reserve", storeHomeController.getReserve);
storeRouter.get("/bookings", storeHomeController.getBookings);

module.exports = storeRouter;
