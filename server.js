const express = require("express");
const log = require("morgan");
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3001;

const app = express();

app.use(log("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  MONGODB_URI ||
    "mongodb://fitness:tracker1@ds245240.mlab.com:45240/heroku_wnpdqzkt",
  {
    useNewUrlParser: true
  }
);

///routes

app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log("App listening on : http://localhost:" + PORT);
});
