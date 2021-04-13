const mongoose = require('mongoose')
const Schema = mongoose.Schema


const characterSchema = new Schema({
    characterId: {
        type: Number,
        required: true
    },
    // Default data
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
    // Status
    avaliableStatus: {
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
    },
    // Leveling
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
    },
    // Mission
    activiveMissionId: {
        type: Number,
        required: false
    },
    missionStartTime: {
        type: Date,
        required: false
    },
    // Relations
    rankId: {
        type: Number,
        required: false
    }
})
