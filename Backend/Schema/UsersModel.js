const mongoose = require('mongoose'); 
const uniqueValidator = require('mongoose-unique-validator');
const UsersSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true} , 
    email: {type: String, required: true, unique: true}, 
    password: {type : String, required: true, unique: true}
});   // S in string should be capital in JS

module.exports = mongoose.model('Users', UsersSchema);  // name of model should start with capital
// mongoose model is the bridge between nodejs express and database

// creating a model from schema so that it can be used in app.js

UsersSchema.plugin(uniqueValidator);
// we use mongoose so that we can transform the object into json object interepeted by database