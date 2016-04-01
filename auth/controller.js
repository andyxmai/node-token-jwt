'use strict'

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var User = require('../components/accounts/model');
var config = require('../config');

exports.authenticate = function(req, res) {

  // find the user
  User.findOne({
    firstName: req.body.firstName
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign(user, config.secret, {
          expiresInMinutes: 1440 // expires in 24 hours
        });

        // return the information including token as JSON
        res.json({
          success: true,
          token: token
        });
      }
    }
  });
};
