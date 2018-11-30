const mongoose = require('mongoose');
const enrollmentSchema = mongoose.Schema({
    grade: Number,
    feedback: String,
    student: {ref: 'UserModel',
        type: mongoose.Schema.Types.ObjectId},
    section: {ref: 'SectionModel',
        type: mongoose.Schema.Types.ObjectId}
}, {collection : 'enrollments'});
module.exports = enrollmentSchema;
