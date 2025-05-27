// External module
const express = require("express");
const userRouter = express.Router();

const homesController = require("../controllers/homes"); // Local Module

userRouter.get("/", homesController.getHomes);

module.exports = userRouter;
