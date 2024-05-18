const express = require("express");
const quizRouter = express.Router();
const {getQuiz} = require("../controller/quizController")

quizRouter
    .route('/:id')
    .get(getQuiz)

quizRouter
    .route('/:id/:number')
    .get(getQuiz)
    post(postQuizAnswer)

module.exports = quizRouter;