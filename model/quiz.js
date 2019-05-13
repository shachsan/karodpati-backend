const mongoose=require('mongoose');

const quiz = mongoose.Schema({
    _id:Number,
    question:{type:String, required:true},
    questionInNep:{type:String},
    options:{type:Object, required:true},
    answer:{type:String, required:true},
    category:{type:String, required:true},
    subcategory:{type:String, required:true},
    type:{type:String, required:true}
})

module.exports = mongoose.model('Quiz', quiz, 'quizes');