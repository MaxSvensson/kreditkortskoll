const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: {
        required:true,
        type: String
    },
    email: {
        required:true,
        type: String
    },
    subject: {
        type: String
    },
    message: {
        required: true,
        type: String
    },
    answered: {
        type: Boolean,
        default:false
    },
    date: {
        type: Date,
        default: Date.now 
    }
})

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;