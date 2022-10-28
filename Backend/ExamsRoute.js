const express =require('express');
const router = express.Router();

const cors = require('cors');
router.options('*', cors());
router.use(cors());

const ExamModel = require('./Schema/examsModel');
// fetches JSON objects that corresponds to ExamsModel
router.get("/exams", cors(), (req,res,next) => {
    ExamModel.find().then(documents => {console.log(documents);    // ExamModel is imported schema model
       res.status(200).json(documents);  // it returns json object
    });    
});

module.exports = router