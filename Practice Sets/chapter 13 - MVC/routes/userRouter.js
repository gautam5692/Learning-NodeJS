const express = require("express");
const userRouter = express.Router();
const userHomeController = require("../controllers/userController");

userRouter.get("/", userHomeController.getHomes);

module.exports = userRouter;
