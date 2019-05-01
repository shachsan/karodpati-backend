const express = require('express');
const quizRouter = require('./routes/quiz');
const mongoose = require('mongoose');

const app = express();

//Connecting our node server to Mongo Db cloud server via Mongoose
mongoose.connect("mongodb+srv://sanjay:0TFkCKMaLEllpiBH@teashop-4gomh.mongodb.net/karodpati?retryWrites=true") 
//connect method return promise and hence it can be chainned with .then()
    .then(()=>console.log("Successfully connected to Mongo Database"))
    .catch(()=>{
        console.log("Something went wrong");
    })
//connection code end....

//CORS setup start......
app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
})
//CORS setup end.....


app.use("/api/quiz/", quizRouter);

module.exports = app;