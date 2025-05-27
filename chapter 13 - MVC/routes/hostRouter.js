const express = require("express");
const hostRouter = express.Router();
const homesController = require("../controllers/homes");

hostRouter.get("/add-home", homesController.getAddHome);

hostRouter.post(
  "/registered-successfully",
  homesController.postRegisteredSuccessfully
);

exports.hostRouter = hostRouter;
