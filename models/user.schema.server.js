const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: String,
    firstName: String,
    lastName: String,
    office: String,
    salary: {type: Number, min: 0},
    dob: Date,
    doh: {type: Date, default: Date.now},
    type: {type: String, enum: ['FACULTY', 'STUDENT']}
}, {collection: 'user'});
module.exports = userSchema;
