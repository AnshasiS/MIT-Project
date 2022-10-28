const mongoose = require('mongoose'); 
const uniqueValidator = require('mongoose-unique-validator');
const ExamsSchema = mongoose.Schema({
    id: {type: Number, required: true} , 
    subject: {type: String, required: true}, 
    courseOfStudy: {type: String, required: true},
    day: {type: String, required: true},
    time: {type: String, required: true}, 
    duration: {type: String, required: true}, 
    room: {type: String, required: true},
    examiner: {type: String, required: true},
    semester: {type: String, required: true},
    type: {type: String, required: true},
    
});   

module.exports = mongoose.model('Exam', ExamsSchema); 