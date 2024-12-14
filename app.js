const express = require("express");
const mongoose = require("mongoose");
const Router = require("./API/routes/routes");

const app = express();
app.use(express.json());
// app.use(cors());
// app.use('/' , Routes)

const mongooseURL =
  "mongodb+srv://mahmodtaya0:12345678aa@cluster0.u7sp8.mongodb.net/";

mongoose.connect(mongooseURL);

mongoose.connection.on("connected", () => {
  console.log("mongo connected");
});

app.use("/", Router);

module.exports = app;
