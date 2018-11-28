'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

let UserSchema = new Schema({
    profilePicture: String,
    username: {
        type: String,
        unique: true,
        index: true
    },
    name: String,
    lastname: String,
    password: String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.models.user || mongoose.model('user', UserSchema);