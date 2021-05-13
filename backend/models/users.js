var mongoose = require('mongoose')
var Schema = mongoose.Schema
var passportLocalMongoose = require('passport-local-mongoose')

var userSchema = new Schema({
    admin: {
        type: Boolean,
        default: false
    },
    character: {
        type: Schema.Types.ObjectId,
        ref: 'character',
        required: true
    }
});

userSchema.plugin(passportLocalMongoose)

const user = mongoose.model('user', userSchema)

module.exports = user
