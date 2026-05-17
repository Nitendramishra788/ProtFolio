const JWT = require("jsonwebtoken");
const Admin = require("../models/Admin");
const asyncHandler = require("../middlewares/asyncHandler");


const authMiddleware = asyncHandler( async(req , res , next)=>{
    let token;

    // check token is exist or not

    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ){

        // get token from header

        token = req.headers.authorization.split(" ")[1];

        // verify token

        const decoded = JWT.verify(token , process.env.JWT_SECRET);

        // find admin from token id

        req.admin = await Admin.findById(decoded.id).select("-password");

        // continue to next middleware or route handler

        next();

    }else{
        res.status(401).json({
            success : false,
            message : "Not authorized to access this route"
        });
    };
});


module.exports = authMiddleware;