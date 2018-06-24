var express  = require('express');
var moment = require('moment');
var app      = express();                               // create our app w/ express

// configuration =================

app.use(express.static(__dirname + '/src'));                 // set the static files location /public/img will be /img for users
app.use(moment.static(__dirname + '/node_modules'));
// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");