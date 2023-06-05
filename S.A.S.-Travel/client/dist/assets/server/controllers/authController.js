var exports = module.exports = {};
const mongoose = require("mongoose");

let config = require('../config/db'),
    jwt = require('jsonwebtoken');

// Call User model
const User = require("../models/userModel");

exports.signup = async function(req, res) {
    console.log("Here: ",req.body);
    if (!req.body.email || !req.body.password) {
        res.json({success: false, msg: 'Please pass Email and password.'});
    } else {

        const users = await User.find({email: req.body.email});
        if (users.length >= 1) {
            return res.status(409).json({success: false, msg: 'Email already exists.'});
        } else {
            let newUser = new User({
                _id: mongoose.Types.ObjectId(),
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            // save the user
            newUser.save(function(err) {
                if (err) {
                    return res.json({success: false, msg: 'Email already exists.'});
                    //return res.json({success: false, msg: err});
                }
                res.json({success: true, msg: 'Successful created new user.'});
            });
        }
        
    }
};

exports.signin = function(req, res) {
    console.log("Here2: ",req.body);
    User.findOne({
        email: req.body.email
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
      
};

exports.signout = function(req, res) {
    req.logout();
    res.json({success: true, msg: 'Sign out successfully.'});
};