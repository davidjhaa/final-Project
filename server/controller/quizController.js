const Quiz = require("../models/userModel");

module.exports.getQuiz = async (req, res, next) => {
    try {
        let id = req.params.id;
        let quizDetails = await Quiz.findById(id);
        if (quizDetails) {
          return res.json({
            message: "quiz retrieved",
            data: quizDetails,
          });
        } 
        else {
          return res.json({
            message: "quiz not found",
          });
        }
    } 
    catch (error) {
        next("error");
    }
};

