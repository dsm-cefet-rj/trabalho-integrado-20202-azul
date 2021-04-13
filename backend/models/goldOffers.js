const mongoose = require('mongoose')
const Schema = mongoose.Schema


const goldOfferSchema = new Schema({
    goldOfferId: {
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
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    }
})
