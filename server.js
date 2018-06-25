var express  = require('express');
var app      = express();                               // create our app w/ express
var open = require("open");

//Config

//static director path setup
app.use(express.static(__dirname + '/src'));

//Listen application on port 8080
open("http://localhost:8080/index.html");
app.listen(8080);
console.log("Weather App listening on port 8080");