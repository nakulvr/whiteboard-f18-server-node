const mongoose = require('mongoose');
const userModel = require('./user.schema.server');
module.exports = mongoose.Schema({
    userModel: userModel,
    gradYear: Number,
    scholarShip: Number
});
