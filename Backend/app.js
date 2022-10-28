
const express =require('express');
const bcrypt = require('bcrypt');   // for hashing the password
const jwt = require ("jsonwebtoken");
var cors = require('cors');    // for bybassing CORS policy
const bodyparser = require('body-parser');
const AuthCheck = require("./middlewares/check-Auth");
const mongoose = require('mongoose');   

// connection to data base
mongoose.connect('mongodb+srv://Anshasi:7Km8p96ZY8bItDsD@cluster0.gpwcr.mongodb.net/test?retryWrites=true&w=majority')
    .then(() => {
        console.log("connected to database");    // returns a promise 
    })
    .catch(() => {
        consolelog("database connection failed");
    });


// routes declarations
const app = express();
const LectureRoute = require('./LectureRoute');
const EventRoute = require('./EventRoute');
const ExamRoute = require('./ExamsRoute');
const MensaRoute = require('./MensaRoute');
app.use(cors());
app.options('*', cors());  // allows are domain origins



//  allow connection between angular and server on different domain
app.use(bodyparser.json());
app.use((req,res,next) => {    
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requisted-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, PATCH, OPTIONS, DELETE");
    next();
});




// importing the schema model into NodeJS
const UserModel = require('./Schema/UsersModel'); 
const RoomsModel = require('./Schema/RoomsModel');


    // on clicking Sign up button
    app.post("/api/userspost", (req, res, next) => {
        // instantiating a User model object with values coming from the frontend using body parser
        const post = new UserModel ({    
            username : req.body.Name,      
            email : req.body.email,             
            password : req.body.password
        });  
        
        console.log("Post invoked");
        console.log(post);
        // storing the posted user model object in the database
        post.save()  
                .then( result => { res.status(201).json({ message: "req reached api",
                    result: result})
                })
                .catch(err => { 
                    res.status(200).json({message : "connection failed"})   // status(500)
                });

    });

    app.use((req, res, next) => {console.log('refreshed');
        next();
    });


    // Extra functionality for fetching User JSON object from mongoDB not used in our app
    app.use("/api/userspost", (req,res,next) => {
        UserModel.find().then(documents => {console.log(documents);    //imported schema model
            res.status(200).json(documents);  // it sends json object
        });    
    });
    // Extra functionality for deleting users not used in our app
    app.delete("/api/userspost/:id", (req,res,next) => {   // :id dynamic property you can choose any name 
        UserModel.deleteOne({_id: req.param.id}).then(result => {
            console.log(result);
            res.status(200).json({ message: " user deleted with id " + req.param.id});
        });

    });




    // credentials authorization on clicking login button
    app.post("/api/login", (req, res, next) => {
        // finds one user that matches the submitted user email in the HTML form, if a user is not found it returns a message "user not authenticated"
        UserModel.findOne({ email: req.body.email}).then( user => {
            console.log(user);
            console.log("authorization invoked");
            if(!user) {   
                return res.status(200).json( { message: "user not authenticated"}); 
            }
            // if a user was found, it checks if the password and user name submitted in the HTML form matches the password/Username of the found User Json object
            // if there is a username/password match it return a token with a message " user authenticated"
            //if there is no username/password match it return a message only " user not authenticated"
            else if ( user.password == req.body.password && user.username == req.body.Name) {
                console.log(req.body.Name);
                console.log(user.password);
                console.log(req.body.password);
                const token = jwt.sign({email: user.email, id: user._id}, "secret_key", {expiresIn: "1h"}); 
                console.log(token);
                return res.status(200).json({message: "user authenticated", authtoken: token});
            }
            else 
            return res.status(200).json({message: "user not authenticated"}); 
        })
                .catch(err => {
                    console.log(err);
                    return res.status(401).json( { message: "user not authenticated"});
                });
    
    });
// finding a  RoomsModel Json object in which Model's "room" property matches the room selected from a list of rooms in the submission form
    app.post("/api/rooms", (req, res, next) => {
        RoomsModel.findOne({room: req.body.room}).then(documents => {console.log(documents);    // RoomsModel is the imported schema model
            res.status(200).json(documents);  // it sends json object
        }); 
    });

// fetching a random RoomsModel to simulate QR code reading
    app.use("/api/rooms", (req, res, next) => {
        RoomsModel.aggregate([{$sample: {size: 1}}]).then(documents => {console.log(documents);   
            res.status(200).json(documents);  // it sends json object back to frontend
        });   
    });

// route handlers
app.use("/", cors(), LectureRoute);
app.use("/", cors(), EventRoute);
app.use("/", cors(), ExamRoute);
app.use("/", cors(), MensaRoute);

module.exports = app;


