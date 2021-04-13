const mongoose = require('mongoose')
const Schema = mongoose.Schema


const missionSchema = new Schema({
    missionId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    xp: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        required: true
    }
})
