const mongoose = require('mongoose');
const sectionSchema =
    mongoose.Schema({
        name: String,
        seats: Number
    }, {collection: 'section'});
module.exports = sectionSchema;
