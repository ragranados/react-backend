'use strict';

var User = require("../models/User");

var userController = {};

userController.profile = function (req, res) {
    User.findOne({
        username: req.user.username
    }, function () {
        if (err) next(err);
        res.send(docs);
    });

    /*res.json([
        User.findOne({
            username: "vladi"
        })
    ]);*/
};

module.exports = userController;