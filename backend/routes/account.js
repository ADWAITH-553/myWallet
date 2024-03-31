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







module.exports=router;