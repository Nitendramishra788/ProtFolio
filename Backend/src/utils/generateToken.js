const JWt = require("jsonwebtoken");

const generateToken = (id)=>{
    return JWt.sign(
        {id},
        process.env.JWT_SECRET,
        {
            expiresIn:"7d",
        }
    );
};


module.exports = generateToken;