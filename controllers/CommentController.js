'use strict'
const mongoose = require('mongoose')
commentModel = require('../models/Comment');

var commentController = {};

//CREATE
commentController.create = function (req, res) {
    var data = {
        usuario: req.body.usuario,
        comment: req.body.comment,
        date: req.body.date
    }
    if (data.usuario && data.comment && data.date && data.usuario != '' && data.comment != '') {
        let comment = new commentModel(data);
        comment.save(function (err, saved) {
            if (err) {
                res.status(500);
                res.json({ code: 500, err });
            } else {
                res.json({ ok: true, message: 'Se ha guardado con exito', guardado });
            }
        });
    } else {
        res.status(400);
        res.json({ err: { code: 400, message: 'Faltan datos', data } });
    }

};
//GET
commentController.get = function (req, res) {
    // Buscar por id, el psot
    postModel.findOne({ _id: req.params.id }, function (err, post) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, post });
        }
    });
}

//GETALL
commentController.getAll = function (req, res) {
    // Obtener todos los post de la base datos
    postModel.find({}, function (err, posts) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, posts });
        }
    });
    // Enviarlos como respuesta en JSON
};
//DELETE
commentController.delete = function (req, res) {
    // intentar eliminar
    postModel.findByIdAndRemove(req.params.id, function (err, eliminado) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, eliminado });
        }
    });
};
module.exports = commentController;
