const mongoose = require('mongoose'); 
const uniqueValidator = require('mongoose-unique-validator');
const RoomsSchema = mongoose.Schema({
    room: {type: String, required: true} , 
    building: {type: String, required: true}, 
    floor: {type : String, required: true},
    long: {type: String, required: true},
    lat: {type: String, required: true}
});   // S in string should be capital in JS

module.exports = mongoose.model('Rooms', RoomsSchema);  // name of model should start with capital
// mongoose model is the bridge between nodejs express and database

// creating a model from schema so that it can be used in app.js


// we use mongoose so that we can transform the object into json object interepeted by database