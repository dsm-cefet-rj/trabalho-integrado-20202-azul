const mongoose = require('mongoose')
const Schema = mongoose.Schema


const goldOfferSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    }
})

const GoldOffer = mongoose.model('goldOffer', goldOfferSchema)

module.exports = GoldOffer
