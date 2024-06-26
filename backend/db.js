const mongoose = require('mongoose');


mongoose.connect("")

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

const User=mongoose.model("User",userSchema);
const Account=mongoose.model('Account',accountSchema);

module.exports= {User,Account}
