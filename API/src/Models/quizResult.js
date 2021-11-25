const mongoose = require('mongoose');

const quizResultSchema = new mongoose.Schema({
    ip: {
        type: String
    },
    result: {
        required:true,
        type: Number
    },
    date: {
        type: Object
    }
})

const quizResult = mongoose.model('quizResult', quizResultSchema);

module.exports = quizResult;