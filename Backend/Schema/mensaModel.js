const mongoose = require('mongoose'); 
const uniqueValidator = require('mongoose-unique-validator');
const MensaSchema = mongoose.Schema({
    id: {type: Number, required: true} , 
    day: {type: String, required: true},
    mainPlate: {type: String, required: true}, 
    salad: {type: String, required: true},
    drinks: {type: String, required: true},
    price: {type: String, required: true}, 
    openingTime: {type: String, required: true},
    closingTime: {type: String, required: true}, 
    
});   
// third argument is collection name
module.exports = mongoose.model('Mensa', MensaSchema, 'mensa'); 