const studentModel = require('../models/student.model.server');
const userModel = require('../models/user.model.server');
createStudent = student =>
    studentModel.create(student);

truncateStudent = () => {
    return studentModel.deleteMany({});
    // userModel.remove({});
};

findAllStudents = () => {
    return studentModel.find();
};

findStudentById = studentId =>
    studentModel.findOne({_id: parseInt(studentId)});

deleteStudent = studentId =>
// {
    studentModel.deleteOne({_id: parseInt(studentId)});
    // return findAllStudents();
// };

updateStudent = (studentId, student) => {
    // console.log(studentId)
    // console.log(student)
    return studentModel
        .updateOne(
            {_id: parseInt(studentId)},
            {$set: student});
}

module.exports = {
    createStudent,
    truncateStudent,
    findAllStudents,
    findStudentById,
    deleteStudent,
    updateStudent
};
// let students = [
//     {username: 'alice', _id:123},
//     {username: 'ada', _id:234}
// ];

// module.exports = () => {
//     createStudent = (student) => {
//         student._id = new Date().getTime();
//         students.push(student);
//         return students;
//     };
//
//     findAllStudents = () =>
//         students;
//
//     findStudentById = studentId =>
//         students.find(student => student._id === parseInt(studentId));
//
//     deleteStudent = studentId => {
//         const index = students.findIndex(student => student._id === parseInt(studentId));
//         students.splice(index, 1);
//         return students;
//     };
//
//     updateStudent = (studentId, newStudent) => {
//         const index = students.findIndex(student => student._id === parseInt(studentId));
//         students[index] = newStudent;
//         return students;
//     };
//
//     return {
//         createStudent,
//         findAllStudents,
//         findStudentById,
//         deleteStudent,
//         updateStudent
//     }
// };
