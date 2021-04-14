const mongoose = require('mongoose')
const Schema = mongoose.Schema


const rankSchema = new Schema({
    rankId: {
        type: Number,
        required: true
    },
    reputation: {
        type: Number,
        required: true
    },
    position: {
        type: Number,
        required: true
    }
})

const rank = mongoose.model('rank', rankSchema)

module.exports = rank