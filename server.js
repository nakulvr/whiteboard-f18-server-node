const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

require('./db/database')();

const studentService = require('./services/student.service.server');
studentService(app);

const questionService = require('./services/question.service.server')
questionService(app);

const answerService = require('./services/answer.service.server')
answerService(app);

const universityDao = require('./dao/university.dao.server')
// const studentDao = require('./dao/student.dao.server')
// universityDao.truncateDatabase()
// universityDao.populateDatabase()
universityDao.truncateAndPopulate()

// const userDao = require('./dao/user.dao.server');
// const sectionDao = require('./dao/section.dao.server');
// const enrollmentDao = require('./dao/enrollment.dao.server');

// enrollmentDao.enrollStudentIntoSection('5bffd885a93394f5cffde52c', '5c0052442b623a62c8f745ac').
//     then(enroll => console.log(enroll));
// enrollmentDao.studentEnrollments('5bffd885a93394f5cffde52c')
//     .then(s => console.log(s));
// userDao.findUserById('5bffd885a93394f5cffde52c')
//     .then(users => console.log(users));
// userDao.findByUsername('ada')
//     .then(user => console.log(user));
// userDao.createUser({username: 'Bob', firstName: 'Bob', lastName: 'Bob'})
//     .then(user => console.log(user));
// userDao
//     .updateUser(
//         '5c004b19e215ec4f10f70bd2',
//         {firstName: 'Paul Muad\'dib'})
//     .then(status => {
//         console.log(status);
//     });
// userDao
//     .deleteUser(
//         '5bffd985a93394f5cffde52d')
//     .then(status => {
//         console.log(status);
//     });

// sectionDao.createSection(
//     {name: 'section101'}
// );
// sectionDao.createSection(
//     {name: 'section202'}
// );


app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", 'true');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With");
    next();
});

// createCourse = (req, res) => {
//   console.log(req.body);
//   res.json(req.body)
// };
// app.post('/api/course', createCourse);

app.listen(3000);