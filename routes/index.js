var express = require('express');
var router = express.Router();
var moongose = require("mongoose");
var auth = require('../controllers/AuthController');

/* GET home page. */
router.get('/', auth.home);

// restrict index for logged in user only
router.get('/register', auth.register);

// route for register action
router.post('/register', auth.doRegister);

// route to login page
router.get('/login', auth.login);

router.post('/login', auth.doLogin);

// route for logout action
router.get('/logout', auth.logout);

module.exports = router;
