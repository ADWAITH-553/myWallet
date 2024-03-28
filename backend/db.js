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

const user=mongoose.model("user",userSchema);

module.exports={
    user
}