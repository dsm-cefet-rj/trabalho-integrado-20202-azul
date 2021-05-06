const mongoose = require('mongoose')
const Schema = mongoose.Schema

const characterSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: false
    },
    wins: {
        type: Number,
        required: true
    },
    losses: {
        type: Number,
        required: true
    },
    status: {
        pointsAvailable: {
            type: Number,
            required: false
        },
        atk: {
            type: Number,
            required: true
        },
        res: {
            type: Number,
            required: true
        },
        lck: {
            type: Number,
            required: true
        },
        rsl: {
            type: Number,
            required: true
        }
    },
    leveling: {
        xp: {
            type: Number,
            required: true
        },
        level: {
            type: Number,
            required: true
        },
        upXp: {
            type: Number,
            required: true
        }
    },
    activeMission: {
        missionId: {
            type: Number,
            ref: 'mission',
            required: false
        },
        missionStartTime: {
            type: Number,
            required: false
        }
    },
    rankId: {
        type: Number,
        required: false
    }
})

const Character = mongoose.model('character', characterSchema)

module.exports = Character
