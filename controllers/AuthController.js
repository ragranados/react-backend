'use strict'
var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/User");

var authController = {};

// Restrict access to root page
authController.home = function (req, res) {
    console.log("home");
  res.render('index', {
    user: req.user,
    title: 'Express'
  });
};

// Go to registration page
authController.register = function (req, res) {
    console.log("register");
  res.redirect('/register');
};

// Post registration
authController.doRegister = function (req, res) {
    console.log("doregister");
  User.register(new User({
    name: req.body.name,
    lastname: req.body.lastname,
    username: req.body.username
  }), req.body.password, function (err, user) {
    if (err) {
      return res.redirect('/register', {
        user: req.body.username
      });
    }

    passport.authenticate('local')(req, res, function () {
        console.log("authen");
      res.redirect('/');
    });
  });
};

// Go to login page
authController.login = function (req, res) {
    console.log("loginregister");
  res.render('/login', {title: 'Sing in'});
};

// Post login
authController.doLogin = function (req, res) {
    console.log("dologinregister");
  passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true
  })(req, res, function () {
    res.redirect('/');
  });
};

// logout
authController.logout = function (req, res) {
    console.log("fuera");
  req.logout();
  res.clearCookie('sessionid', {path: '/'});
  res.redirect('/');
};

module.exports = authController;