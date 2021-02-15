const express = require("express");
const path = require("path");

//Inicialization
const app = express();

//Settings
app.set("port", 5000);

//Static files
app.use(express.static(path.join(__dirname, "./public")));

//Routes
app.use(require("./routes"));

module.exports = app;
