const express =require('express');
const router = express.Router();

const cors = require('cors');
router.options('*', cors());
router.use(cors());

const LecturesModel = require('./Schema/LecturesModel');
// fetches JSON objects that corresponds to LecturesModel
router.get("/lectures", cors(), (req,res,next) => {
    LecturesModel.find().then(documents => {console.log(documents);    //LecturesModel is imported schema model
       res.status(200).json(documents);  // it returns json objects
    });   
});

module.exports = router;