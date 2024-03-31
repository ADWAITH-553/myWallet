const express=require('express')

const {authMiddleware}=require('../middlwware')
const {Account}=require('../db')
const mongoose=require('mongoose')
const router=express.Router()

router.get("/balance",authMiddleware,async(req,res)=>{
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
    const {amount,touser}=req.body
})





module.exports=router;