const express = require("express");
const {
  createUser,
  deleteUser,
  findUser,
  logIn,
} = require("../controllers/user.controller");
const userRout = express.Router();

userRout.post("/createUser", createUser);
userRout.post("/deleteUser", deleteUser);
userRout.post("/findUser", findUser);
userRout.post('/logIn',logIn)
module.exports = userRout;
