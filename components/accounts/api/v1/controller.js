'use strict'

var User = require('../../model')

exports.index = function(req, res) {
  res.json({ message: 'Welcome to the coolest API on earth!' });
};

exports.users = function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
};
