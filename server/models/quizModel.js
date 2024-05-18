const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Question schema
const questionSchema = new Schema({
    qNumber : {
        type: Number,
        required : true,
    },
    qName: {
        type: String,
        required: true,
    },
    options: {
        type: [String],
        required: true,
    },
    correctOption: {
        type: String,
        required: true,
    }
}, {
    _id: false // Optionally disable _id generation for embedded documents
});

// Define the Quiz schema
const quizSchema = new Schema(
    {
        quizName: {
            type: String,
            required: true,
        },
        quizType: {
            type: String,
            required: true,
            enum: ["Q&A", "poll"],
        },
        timer: {
            type: Number,
            default : 0,
        },
        questions: {
            type: [questionSchema],
            required: true
        },
        refUserId: {
            type: mongoose.ObjectId,
            required: true
        }
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

module.exports = mongoose.model("Quiz", quizSchema);