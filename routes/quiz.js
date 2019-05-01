const express = require('express');
// const quizes = require('../data/data');
const Quiz = require('../model/quiz');
const router = express.Router();

router.post('/new', (req, res, next)=>{

})

router.get('', (req, res, next)=>{
    console.log('request received for quiz');
    try {
        Quiz.find()
            .then((quizes)=>{
                console.log('quizes retrieved from db:', quizes);
                res.status(200).json(quizes);
            })
        
    } catch (error) {
        console.log('error:', error);
        res.status(400).json({message:error})
    }
})

module.exports = router;