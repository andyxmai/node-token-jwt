var express = require('express');
var router = express.Router();
var User   = require('../components/accounts/model');

/* GET home page. */
router.get('/', function(req, res, next) {
  var nick = new User({
    firstName: 'Andrew',
    lastName: 'Mai',
    password: 'password',
    email: 'andrew.x.mai@gmail.com',
    admin: true
  });

  // save the sample user
  nick.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
  });
});

module.exports = router;
