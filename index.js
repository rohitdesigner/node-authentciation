var express = require('express');
var passport = require('passport');
var app = express();
var LocalStrategy = require('passport-local').Strategy;
app.post('/login', passport.authenticate('local'), function(req, res) {

    console.log("Logged in!!");

});
app.get('/', function(req, res) {
    res.render('index');
})
passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));