const express = require('express');
// const quizes = require('../data/data');
const Quiz = require('../model/quiz');
const router = express.Router();

// router.post('/new', (req, res, next)=>{

// })
//db.quizes.find({"subcategory":{$in:["Geography", "sports"]}})

router.post('', (req, res, next)=>{
    console.log('request received for quiz');
    const query = req.body;
    console.log('query categories:', query.categories);
    console.log('query subcategory:', query.subCat);
    console.log('query level:', query.level);
    const queryObj = [];
    if(query.categories.length>0){
        queryObj.push({"category":{$in:query.categories}});
    }
    if(query.subCat.length>0){
        queryObj.push({"subcategory":{$in:query.subCat}});
    }
    if(query.level.length>0){
        queryObj.push({"type":{$in:query.level}});
    }
    try {
        // Quiz.find({"category":{$in:query.categories}, "subcategory":{$in:query.subCat}, "type":{$in:query.level}})
        Quiz.find({$and:queryObj})
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