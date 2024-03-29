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
const signinBody = zod.object({
    username : zod.string(),
    password : zod.string()
})
router.post("/signin",async (req,res)=>{
    const {success} = signinBody.safeParse(req.body)
    console.log(req.body)
    console.log(success)
    if(!success){
        return res.status(411).json({
            message:"error"
        })
    }

        const user=await User.findOne({username:req.body.username,password:req.body.password})
        if(user){
            const token=jwt.sign({userId:user._id},JWT_SECRET)
            res.status(200).json({token:token})
            return
        }
        res,status(411).json({message:"error while login"})
})

module.exports = router
