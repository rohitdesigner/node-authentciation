var express = require('express');
var passport = require('passport');
var app = express();
app.post('/authenticate', passport.authenticate('local'), function(req, res) {

    console.log("Logged in!!");

});