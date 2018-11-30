const mongoose = require('mongoose');
const sectionSchema =
    require('./section.schema.server');
const sectionModel =
    mongoose.model('SectionModel',
        sectionSchema);
module.exports = sectionModel;
