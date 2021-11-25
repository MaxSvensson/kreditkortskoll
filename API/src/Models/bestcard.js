const mongoose = require('mongoose');


const bestCardSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    img: {
        required:true,
        type: String
    },
    url: {
        required:true,
        type: String
    }
})

const BestCard = mongoose.model('BestCard', bestCardSchema)

module.exports = BestCard;