const express =require('express');
const router = express.Router();
const cors = require('cors');
router.options('*', cors());
router.use(cors());

const EventsModel = require('./Schema/eventsModel');
// fetches JSON objects that corresponds to EventsModel
router.get("/events", cors(), (req,res,next) => {
    EventsModel.find().then(documents => {console.log(documents);    
       res.status(200).json(documents);  
    });   
});

module.exports = router;