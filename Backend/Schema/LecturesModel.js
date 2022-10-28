const mongoose = require('mongoose'); 
const uniqueValidator = require('mongoose-unique-validator');
const LectureSchema = mongoose.Schema({
    id: {type: Number, required: true} , 
    name: {type: String, required: true}   
});   

module.exports = mongoose.model('Lectures', LectureSchema); 