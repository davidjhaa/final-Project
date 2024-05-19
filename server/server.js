const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require("./Routers/authRoute");
const quizRouter = require("./Routers/quizRouter");


require('dotenv').config()

const db_link = process.env.MONGODB_URI;

const app = express();

app.use(cors()) ;
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

mongoose
    .connect(db_link)
    .then(function (db) {
    console.log("MongoDB connected successfully");
    })
    .catch(function (err) {
        console.log("Error connecting to MongoDB:", err);
});

app.use("/api/v1/auth", userRouter);
app.use("/api/v1/quiz", quizRouter);


// // Create a new quiz with the timer field omitted
// const newQuiz = new Quiz({
//   quizName: "Sample Quiz",
//   quizType: "Q&A",
//   questions: [
//     {
//       qNumber:1,
//       qName: "What is the capital of France?",
//       options: ["Paris", "Berlin", "Madrid", "Rome"],
//       correctOption: "Paris"
//     },
//     {
//       qNumber:2,
//       qName: "The sky is blue.",
//       options: ["True", "False"],
//       correctOption: "True"
//     }
//   ],
//   refUserId: new mongoose.Types.ObjectId("6648bc840dd4514e9212df46") 
// });

// newQuiz.save().then(quiz => {
//   console.log("Quiz saved successfully:", quiz);
// }).catch(err => {
//   console.error("Error saving quiz:", err);
// });
