const express = require("express");
const hostRouter = express.Router();
const hostHomeController = require("../controllers/hostController");

hostRouter.get("/homePage", hostHomeController.getHostHomePage);
hostRouter.get("/addHome", hostHomeController.getAddHome);
hostRouter.post("/homeRegistered", hostHomeController.postHomeRegistered);
hostRouter.get("/homeList", hostHomeController.getHostHomeList);

module.exports = hostRouter;
