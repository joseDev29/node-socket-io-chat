const express = require("express");
const path = require("path");
const config = require("./config");

//Inicialization
const app = express();

//Settings
app.set("port", config.server.port || 4001);

//Static files
app.use(express.static(path.join(__dirname, "./public")));

//Routes
app.use(require("./routes"));

module.exports = app;
