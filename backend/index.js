const express = require("express");
const bodyParser = require('body-parser');
const router = require("./routes");
const app=express();

app.use("api/v1",router)
app.listen(8005,()=>{
    console.log("listening");
})