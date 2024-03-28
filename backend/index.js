const express = require("express");
const bodyParser = require('body-parser');
const router = require("./routes/index");
const app=express();
const cors = require('cors');
app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
app.use('/api/v1',router)
app.listen(3050,()=>{
    console.log("listening");
})