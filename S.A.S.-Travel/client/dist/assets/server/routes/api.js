var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/db');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/userModel");

router.post('/signup', function(req, res) {
    console.log(req.body);
  if (!req.body.email || !req.body.password) {
    res.json({success: false, msg: 'Please pass Email and Password.'});
  } else {
    var newUser = new User({
      username: req.body.email,
      password: req.body.password
    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        
        return res.json({success: false, msg: err});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
});

router.post('/signin', function(req, res) {
  User.findOne({
    email: req.body.Email
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token

          // TODO: Move "secret" to env or config file
          var token = jwt.sign(user.toJSON(), "secret", {
            expiresIn: 604800 // 1 week
          });
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});

router.get('/signout', passport.authenticate('jwt', { session: false}), function(req, res) {
  req.logout();
  res.json({success: true, msg: 'Sign out successfully.'});
});

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;