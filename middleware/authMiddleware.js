const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddlware=async(req, res ,next)=>{
    try {
        // get token from header
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({message: "Not authorized , no token"});
        }
        // extract/ gain token
        const token = authHeader.split(" ")[1];
        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        //get user from token
        req.user = await User.findById(decoded.id).select("-password");

        if(!req.user){
            return res.status(401).json({message: "User not found"});
        }
        //Here the next means moves to next step
        next();
    } catch (error) {
        res.status(401).json({message: "Token Failed"});
    } 
};

module.exports = authMiddlware;
