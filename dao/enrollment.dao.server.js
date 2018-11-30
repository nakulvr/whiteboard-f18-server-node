const enrollmentModel = require('../models/enrollment.model.server');
enrollStudentIntoSection = (studentId, sectionId) =>
    enrollmentModel.create(
        {
            student: studentId,
            section: sectionId
        });

studentEnrollments = studentId =>
    enrollmentModel
        .find({student: studentId})
        .populate('section')
        .exec();

module.exports = {
    enrollStudentIntoSection,
    studentEnrollments
};
