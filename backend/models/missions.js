const mongoose = require('mongoose')
const Schema = mongoose.Schema


const missionSchema = new Schema({
    _id: {
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
    sender: {
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

const mission = mongoose.model('mission', missionSchema)

module.exports = mission
