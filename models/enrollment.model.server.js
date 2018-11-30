const mongoose = require('mongoose');
const enrollmentSchema = require('./enrollment.schema.server');
module.exports =  mongoose.model('EnrollmentModel', enrollmentSchema);
