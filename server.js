const express = require("express");
const log = require("morgan");
const mongoose = require("mongoose");

const PORT = 3000;

const app = express();

app.use(log("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

///routes

app.use(require("./routes/api"));
//app.use(require("./routes/view"));

app.listen(PORT, () => {
  console.log("You are connected on port 3000");
});
