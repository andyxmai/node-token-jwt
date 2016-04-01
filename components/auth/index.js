'use strict';

var express = require('express');
var controller = require('./controller');
var config = require('../../config')
var User = require('../accounts/model');

// Passport Configuration
require('./local/passport').setup(User, config);

var router = express.Router();

router.use('/local', require('./local'));
//router.post('/token', controller.authenticate);

module.exports = router;
