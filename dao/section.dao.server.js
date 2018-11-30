const sectionModel = require('../models/section.model.server');
createSection = section =>
    sectionModel.create(section);

module.exports = {
    createSection
};