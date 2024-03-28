const express=require('express')
const zod=require('zod');
const User = require('../db');
const jwt=require("jsonwebtoken")
const JWT_SECRET = require('../config');
const router=express.Router();
const signUpSchema=zod.object({
    username:zod.string(),
    password:zod.string(),
    firstName:zod.string(),
    lastName:zod.string()
})
router.post("/signup",async (req,res)=>{
    const body=req.body
    console.log("hii")
    const {success}=signUpSchema.safeParse(req.body);
    if(!success){
        return res.json({message:"email alredy exists/invalid inputs"})
    }
    const user=User.findOne({username:body.username})
    if(user._id){
        return res.json({message:"email alredy exists/invalid inputs"})
    }
    const dbuser=await User.create(body);
    const token=jwt.sign({userId:dbuser._id},JWT_SECRET)
    res.json({
        message:"user created successfully",
        token:token
    })
})

module.exports = router
