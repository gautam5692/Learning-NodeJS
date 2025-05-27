const express = require("express");
const hostRouter = express.Router();
const hostHomeController = require("../controllers/hostController");

hostRouter.get("/addHome", hostHomeController.getAddHome);
hostRouter.post("/homeRegistered", hostHomeController.postHomeRegistered);

module.exports = hostRouter;
