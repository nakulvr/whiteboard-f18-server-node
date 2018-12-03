const answerDao = require('../dao/answer.dao.server')
const async = require('async')

module.exports = app => {

    answerQuestion = (req, res) =>
        async.waterfall([
                (callback) => {
                    answerDao.answerQuestion(
                        req.params.studentId,
                        req.params.questionId,
                        req.body)
                        .then((answers) => callback(null, answers))
                }
            ],
            () => {
                findAllAnswers(req, res)
            })


    findAnswersbyStudentQuestion = (req, res) =>
        answerDao.findAnswerByStudentQuestion(
            req.params.studentId,
            req.params.questionId
        )
            .then((answers) => res.json(answers))

    findAllAnswers = (req, res) =>
        answerDao.findAllAnswers()
            .then((answers) => res.json(answers))

    app.post('/api/student/:studentId/question/:questionId/answer', answerQuestion)
    app.get('/api/student/:studentId/question/:questionId/answer', findAnswersbyStudentQuestion)
    app.get('/api/question/:questionId/student/:studentId/answer', findAnswersbyStudentQuestion)
    // app.get('/api/question/answer', findAnswers)
}