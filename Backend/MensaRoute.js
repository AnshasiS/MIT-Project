const express =require('express');
const router = express.Router();

const cors = require('cors');
router.options('*', cors());
router.use(cors());

const MensaModel = require('./Schema/mensaModel');
// fetches JSON objects that corresponds to MensaModel
router.get("/mensa", cors(), (req,res,next) => {
    MensaModel.find().then(documents => {console.log(documents);    //MensaModel is imported schema model
       res.status(200).json(documents);  // it returns json object
    });   
});

module.exports = router;