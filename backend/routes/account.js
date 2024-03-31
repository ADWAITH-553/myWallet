const express=require('express')

const {authMiddleware}=require('../middlwware')
const {Account}=require('../db')
const mongoose=require('mongoose')
const router=express.Router()

router.get("/balance",authMiddleware,async(req,res)=>{
    console.log(req.userId)
    const account=await Account.findOne({
        userId:req.userId
    })

    res.json({
        balance:account.balance
    })
})

router.post("/transfer",authMiddleware,async(req,res)=>{
    const session=await mongoose.startSession()
    session.startTransaction()
    const {amount,to}=req.body

    //from user and attaching the query userid to a session using session(session)
    const account=await Account.findOne({userId:req.userId}).session(session)
    if(!account|| account.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({
            message:"insufficient balance"
        })
    }
    //to get reciever account
    const toaccount =await Account.findOne({userId:to}).session(session)
    if(!toaccount){
        await session.abortTransaction();
        return res.status(400).json({
            message:"invalid acc"
        })
    }

    //transfer $inc the parameter given here balance
    await Account.updateOne({userId:req.userId},{$inc:{balance:-amount}}).session(session)
    await Account.updateOne({userId:to},{$inc:{balance:amount}}).session(session)
    await session.commitTransaction();
    res.json({
        message:"transfer succesful"
    })
})




module.exports=router;