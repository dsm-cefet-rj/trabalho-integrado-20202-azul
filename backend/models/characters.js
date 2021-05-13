const mongoose = require('mongoose')
const Schema = mongoose.Schema

const characterSchema = new Schema({
    // _id: {
    //     type: Number,
    //     required: true
    // },
    name: {
        type: String,
        required: true,
        default: 'little dude from across the street'
    },
    picture: {
        type: String,
        required: false,
        default: 'https://dd2t.github.io/psw/images/character/character-images/mafia-luffy.jpg'
    },
    wins: {
        type: Number,
        required: true,
        default: 0
    },
    losses: {
        type: Number,
        required: true,
        default: 0
    },
    status: {
        pointsAvailable: {
            type: Number,
            required: false,
            default: 1
        },
        atk: {
            type: Number,
            required: true,
            default: 1
        },
        res: {
            type: Number,
            required: true,
            default: 1
        },
        lck: {
            type: Number,
            required: true,
            default: 1
        },
        rsl: {
            type: Number,
            required: true,
            default: 1
        }
    },
    leveling: {
        xp: {
            type: Number,
            required: true,
            default: 0
        },
        level: {
            type: Number,
            required: true,
            default: 1
        },
        upXp: {
            type: Number,
            required: true,
            default: 10
        }
    },
    activeMission: {
        missionId: {
            type: Number,
            ref: 'mission',
            required: false,
            default: null
        },
        missionStartTime: {
            type: Number,
            required: false,
            default: null
        }
    },
    rankId: {
        type: Number,
        required: false,
        default: null
    }
})

const Character = mongoose.model('character', characterSchema)

module.exports = Character
