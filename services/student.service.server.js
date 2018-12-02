const studentDao = require('../dao/student.dao.server');
const async = require('async')
module.exports = app => {
    createStudent = (req, res) => {
        async.waterfall(
            [
                (callback) => {
                    studentDao.createStudent(req.body)
                        .then(result => callback(null, result))
                }],
            () => {
                findAllStudents(req, res)
            }
        )
    }
    // students.push(req.body);

    findAllStudents = (req, res) => {
        studentDao.findAllStudents()
            .then(students => res.json(students))
    };

    findStudentById = (req, res) =>
        studentDao.findStudentById(req.params['studentId'])
            .then(student => res.json(student))

    deleteStudent = (req, res) => {
        async.waterfall(
            [
                (callback) => {
                    studentDao.deleteStudent(req.params.studentId)
                        .exec((result) => callback(null, result))
                }],
            () => {
                findAllStudents(req, res)
            }
        )
    }

    updateStudent = (req, res) => {
        async.waterfall(
            [
                (callback) => {
                    studentDao.updateStudent(req.params.studentId, req.body)
                        .exec((result) => callback(null, result))
                }],
            () => {
            findAllStudents(req, res)
            }
        )
    }

    app.post('/api/student', createStudent)
    app.get('/api/student', findAllStudents);
    app.get('/api/student/:studentId', findStudentById);
    app.put('/api/student/:studentId', updateStudent);
    app.delete('/api/student/:studentId', deleteStudent);
};