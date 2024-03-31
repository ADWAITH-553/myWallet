const {JWT_SECRET}=require("./config")
const jwt = require("jsonwebtoken")

const authMiddleware=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    console.log(!authHeader.startsWith('Bearer'))
    if( !authHeader.startsWith('Bearer'))
    {
        console.log('hii')
        return res.status(403).json({});
    }

    const token=authHeader.split(' ')[1];
    console.log(token)

    try{
        const decoded=jwt.verify(token,JWT_SECRET)
        req.userId=decoded.userId;
        console.log("hii")
        next();
    }
    catch(err){
        console.log(err)
    }
};

module.exports={authMiddleware};