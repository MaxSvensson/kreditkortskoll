const mongoose = require('mongoose');

const EmailSchema = new mongoose.Schema({
    email: {
        required:true,
        type: String
    },
    status: {
        type: String,
        default: 'subscribed'
    },
    date: {
        type: Date,
        default: Date.now
    }
})
 

const Email = mongoose.model('Email', EmailSchema);


module.exports = Email;