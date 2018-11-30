const mongoose = require('mongoose')
modules.exports = mongoose.Schema({
    _id: Number,
    choices: String,
    correct: Number
})