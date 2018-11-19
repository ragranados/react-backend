'use strict';

let UserSchema = require('UserSchema'); 

let CommentSchema = new Schema({
    usuario : UserSchema.Schema,
    comment : String,
    date : String
});

module.exports = mongoose.models.comment || mongoose.model('comment', CommentSchema);