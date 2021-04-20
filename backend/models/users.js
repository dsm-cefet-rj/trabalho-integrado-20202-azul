var mongoose = require('mongoose')
var Schema = mongoose.Schema
var passportLocalMongoose = require('passport-local-mongoose')

var userSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    }
});

userSchema.plugin(passportLocalMongoose)

const user = mongoose.model('user', userSchema)

module.exports = user
