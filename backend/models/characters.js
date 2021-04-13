const mongoose = require('mongoose')
const Schema = mongoose.Schema


const characterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    status: {
        type: Object,
        required: true
    },
    activeMission: {
        type: Object,
        required: true
    }
})
