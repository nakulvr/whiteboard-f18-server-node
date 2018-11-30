const mongoose = require('mongoose')
const student = require('./student.schema.server')
const question = require('./question.schema.server')
module.exports = mongoose.Schema({
    _id: Number,
    trueFalseAnswer: Boolean,
    multipleChoiceAnswer: Number,
    student: {type: mongoose.Schema.Types.ObjectId, ref: 'StudentModel'},
    question: {type: mongoose.Schema.Types.ObjectId, ref: 'QuestionModel'}
}, {collection: 'answers'});
// module.exports = answer; 