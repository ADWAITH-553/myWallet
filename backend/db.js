const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://adwaith553:dbrgtyuisdfgyh@cluster0.ulzcgsa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:3
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:String,
})

const accountSchema=mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
})

const user=mongoose.model("user",userSchema);
const Account=mongoose.model('Account',accountSchema);

module.exports= user
