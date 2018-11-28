'use strict';

var User = require("../models/User");

var userController = {};

userController.profile = function (req, res) {
    User.findOne({username: req.body.username},function(err,docs){
        if(err){
            res.json({err});
        }else{
            res.json(docs);
        }
    });
};

userController.profilePicture = function(req,res){
    let update = {
        profilePicture: req.body.profilePicture
    };

    User.findOneAndUpdate({username: req.body.username},update,function(err){
        if(err){
            res.status(500);
            res.json({ code: 500, err });
        }else{
            res.json({mensaje: 'se ha guardado con exito',update});
        }
    });
}

module.exports = userController;