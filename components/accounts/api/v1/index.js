'use strict';

var express = require('express');
var controller = require('./controller');
var auth = require('../../../../auth/auth')

var router = express.Router();

router.get('/', controller.index);
router.get('/users', auth.isAuthenticated(), controller.users);

module.exports = router;
