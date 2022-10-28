const jwt = require("jsonwebtoken");
// signature validation of the recieved Token using the secret key 
module.exports =(req,res,next) => {

    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify( token, "secret_key");
        next();
    }
    catch(error)  {
        res.status(401).json({ message: "not authorized route"})
    }

};