const express = require('express');
const quizes = require('../data/data');
const router = express.Router();

router.post('/new', (req, res, next)=>{

})

router.get('', (req, res, next)=>{
    console.log('request received for quiz');
    res.status(200).json(quizes);
})

module.exports = router;