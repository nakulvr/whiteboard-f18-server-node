let students = [
    {username: 'alice', _id:123},
    {username: 'ada', _id:234}
];

module.exports = () => {
    createStudent = (student) => {
        student._id = new Date().getTime();
        students.push(student);
        return students;
    };

    findAllStudents = () =>
        students;

    findStudentById = studentId =>
        students.find(student => student._id === parseInt(studentId));

    deleteStudent = studentId => {
        const index = students.findIndex(student => student._id === parseInt(studentId));
        students.splice(index, 1);
        return students;
    };

    updateStudent = (studentId, newStudent) => {
        const index = students.findIndex(student => student._id === parseInt(studentId));
        students[index] = newStudent;
        return students;
    };

    return {
        createStudent,
        findAllStudents,
        findStudentById,
        deleteStudent,
        updateStudent
    }
};