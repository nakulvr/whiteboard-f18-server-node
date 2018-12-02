// const studentModel = require('../models/student.model.server');
const studentDao = require('./student.dao.server');
const questionDao = require('./question.dao.server')
const async = require('async')
createStudent = student =>
    // studentModel.create(student);
    studentDao.createStudent(student);

truncateDatabase = () => {
    // studentDao.truncateStudent()
    // questionDao.truncateQuestion()
    // return true;
    async.waterfall(
        [
            (callback) => {
                studentDao.truncateStudent()
                    .then(() => callback(null))
            },
            (callback) => {
                questionDao.truncateQuestion()
                    .then(() => callback(null, 'done'))
            }],
        () => {
            console.log('Truncated databases')
            // populateDatabase()
        }
    )
}

populateDatabase = () => {
    async.waterfall(
        [
            (callback) => {
                studentDao.createStudent(
                    {
                        _id: 123,
                        user:
                            {
                                firstName: 'Alice',
                                lastName: 'Wonderland',
                                username: 'alice',
                                password: 'alice'
                            },
                        gradYear: 2020,
                        scholarShip: 15000
                    }).then(() => callback(null))
            },
            (callback) => {
                studentDao.createStudent(
                    {
                        _id: 234,
                        user:
                            {
                                firstName: 'Bob',
                                lastName: 'Hope',
                                username: 'bob',
                                password: 'bob'
                            },
                        gradYear: 2021,
                        scholarShip: 12000
                    }).then(() => callback(null))
            },
            (callback) => {
                questionDao.createQuestion(
                    {
                        _id: 321,
                        question: 'Is the following schema valid?',
                        points: 10,
                        questionType: 'TRUE_FALSE',
                        trueFalse: {
                            isTrue: false
                        }
                    })
                    .then(() => callback(null))
            },
            (callback) => {
                questionDao.createQuestion(
                    {
                        _id: 432,
                        question: 'DAO stands for Dynamic Access Object.',
                        points: 10,
                        questionType: 'TRUE_FALSE',
                        trueFalse: {
                            isTrue: false
                        }
                    })
                    .then(() => callback(null))
            },
            (callback) => {
                questionDao.createQuestion(
                    {
                        _id: 543,
                        question: 'What does JPA stand for?',
                        points: 10,
                        questionType: 'MULTIPLE_CHOICE',
                        multipleChoice: {
                            choices: 'Java Persistence API,Java Persisted Application,JavaScript Persistence API,JSON Persistent Associations',
                            correct: 1
                        }
                    })
                    .then(() => callback(null))
            },
            (callback) => {
                questionDao.createQuestion(
                    {
                        _id: 654,
                        question: 'What does ORM stand for?',
                        points: 10,
                        questionType: 'MULTIPLE_CHOICE',
                        multipleChoice: {
                            choices: 'Object Relational Model,Object Relative Markup,Object Reflexive Model,Object Relational Mapping',
                            correct: 4
                        }
                    })
                    .then(() => callback(null, 'done'))
            }
        ], () => console.log('Populated databases'))
};

createQuestion = question =>
    questionDao.createQuestion(question)

truncateAndPopulate = () =>
    async.waterfall(
        [
            // (callback) => {
            //     studentDao.truncateStudent()
            //         .then(() => callback(null))
            // },
            // (callback) => {
            //     questionDao.truncateQuestion()
            //         .then(() => callback(null, 'done'))
            // }
            (callback) => {
                truncateDatabase()
                callback(null, 'done')
            }
        ],
        () => {
            // console.log('Truncated databases')
            populateDatabase()
        }
    )

module.exports = {
    createStudent,
    truncateDatabase,
    populateDatabase,
    createQuestion,
    truncateAndPopulate
};