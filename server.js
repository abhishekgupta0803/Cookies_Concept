const express = require("express");
const app = express();

//cookie concepts
app.get("/getCookies",(req,res)=>{
    res.cookie("mycookie","hello");
     res.cookie("manu","namaste");
    res.send("Cookie is implement");
})



app.listen(3000,()=>{
    console.log("App is listing on port");
})