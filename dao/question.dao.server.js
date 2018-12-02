const questionModel = require('../models/question.model.server')

createQuestion = question =>
    questionModel.create(question)

truncateQuestion = () =>
    questionModel.deleteMany()

findAllQuestions = () =>
    questionModel.find()

findQuestionById = questionId =>
    questionModel.findById(parseInt(questionId))

deleteQuestion = questionId =>
    questionModel.deleteOne({_id: parseInt(questionId)})

updateQuestion = (questionId, question) =>
    questionModel.updateOne(
        {_id: parseInt(questionId)},
        {$set: question})

module.exports = {
    createQuestion,
    truncateQuestion,
    findAllQuestions,
    findQuestionById,
    deleteQuestion,
    updateQuestion
}