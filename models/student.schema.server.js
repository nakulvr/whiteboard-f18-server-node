const mongoose = require('mongoose');
const userModel = require('./user.schema.server');
module.exports = mongoose.Schema({
    // _id: {type: Number, required: true},
    _id: Number,
    user: userModel,
    gradYear: Number,
    scholarShip: Number
}, {collection : 'student'});
