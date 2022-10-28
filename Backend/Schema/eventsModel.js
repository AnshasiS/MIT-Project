const mongoose = require('mongoose'); 
const uniqueValidator = require('mongoose-unique-validator');
const EventSchema = mongoose.Schema({
    id: {type: Number, required: true} , 
    organiser: {type: Number, required: true}, 
    label: {type: String, required: true},
    description: {type: Number, required: true},
    calendarEntry:{ id : {type : Number},name: { type : String},begin: { type: String},end:{type : String}} 
    
});   

module.exports = mongoose.model('Events', EventSchema); 

