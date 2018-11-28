'use strict';

let UserSchema = require('UserSchema'); 
let CommentSchema = require('CommentSchema');

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let PostSchema = new Schema({
    usuario : UserSchema.Schema,
    picture : String,
    comments : [CommentSchema.Schema]
});

module.exports = mongoose.models.post || mongoose.model('post', PostSchema);