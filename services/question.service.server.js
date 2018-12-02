const questionDao = require('../dao/question.dao.server')
const async = require('async')
module.exports = app => {
    createQuestion = (req, res) => {
        async.waterfall(
            [
                (callback) => {
                    questionDao.createQuestion(req.body)
                        .then(result => callback(null, result))
                }],
            () => {
                findAllQuestions(req, res)
            }
        )
    }

    findAllQuestions = (req, res) =>
        questionDao.findAllQuestions()
            .then(questions => res.json(questions))

    findQuestionById = (req, res) =>
        questionDao.findQuestionById(req.params.questionId)
            .then(question => res.json(question))

    deleteQuestion = (req, res) =>
        async.waterfall(
            [
                (callback) => {
                    questionDao.deleteQuestion(req.params.questionId)
                        .exec((result) => callback(null, result))
                }],
            () => {
                findAllQuestions(req, res)
            }
        )

    updateQuestion = (req, res) =>
        async.waterfall(
            [
                (callback) => {
                    questionDao.updateQuestion(req.params.questionId, req.body)
                        .exec((result) => {
                            callback(null, result)})
                }],
            () => {
                findAllQuestions(req, res)
            }
        )

    app.post('/api/question', createQuestion);
    app.get('/api/question', findAllQuestions);
    app.get('/api/question/:questionId', findQuestionById);
    app.put('/api/question/:questionId', updateQuestion);
    app.delete('/api/question/:questionId', deleteQuestion);
}
