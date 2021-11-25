const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    name:{
        required: true,
        trim: true,
        type: String

    },
    id:{
        type: Number,
        min:0
    },
    show: {
        default: true,
        type: Boolean
    },
    rating:{
        type: Number,
        min:1,
        max:5
    },
    order: {
        type: Number,
        default: 1,
    },
    properties:[{
        propertie:{
            type: String,
            required: true
        },
        type: {
            type: String,
            required:true
        }
    }],
    specifics:[{
        text: String,
        värde: mongoose.Schema.Types.Mixed
         }],
    försäkringar:[{
        text:{
            type: String,
            required: true
        },
        type:{
            required:true,
            type: String
        }
    }],
    krav:[{
        type:String
    }],
    facts:[{
        text: String,
        värde: String
    }],
    description:{
        type:String,
        required:true,
        trim:true
    },
    bonustext:{
        type:String,
        trim:true
    },
    försäkringtext:{
        type: String,
        trim:true
    },
    kredittext: {
        type: String,
        trim:true
    },
    img: {
        type: String,
        trim:true,
    },
    url: {
        trim:true,
        type: String,
    }
})


const Card = mongoose.model('Card', CardSchema);

module.exports = Card;