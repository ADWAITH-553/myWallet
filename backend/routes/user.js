const express=require('express')
const zod=require('zod');
const {User} = require('../db');
const jwt=require("jsonwebtoken")
const JWT_SECRET = require('../config');
const router=express.Router();
const {authMiddleware}=require("../middlwware")
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
    const userId=dbuser._id

    await Account.create({userId,balance: 1+Math.random()*1000})
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
//updated schema
const updateBody=zod.object({
    passwoed:zod.string().optional,
    firstName:zod.string().optional(),
    lastName:zod.string().optional()
})

router.put("/",authMiddleware,async(req,res)=>{
    const {success}=updateBody.safeParse(req.body)
    if(!success){
        res.status(411).json({
            message:"Error while updation"
        })
    }
    await User.updateOne({_id:req.userId},req.body);
    res.json({
        message:"updates successfully"
    })
})

router.get("/search",async(req,res)=>{
    const filter=req.query.filter || "";
    const users=await User.find({
        $or:[{
            firstName:{
                "$regex":filter
            },
            lastName:{
                "$regex":filter
            }
        }]
    })
    res.json({
        user:users.map(user=>({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id
        }))

    })
})
module.exports = router
