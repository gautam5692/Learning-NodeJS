// External module
const express = require("express");
const userRouter = express.Router();

// local module
const { getHome } = require("../controllers/home");

userRouter.get("/", getHome);

module.exports = userRouter;
