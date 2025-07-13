const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

//cookie concepts
app.get("/getCookies",(req,res)=>{
    res.cookie("mycookie","hello");
     res.cookie("manu","namaste");
    res.send("Cookie is implement");
});

app.get("/",(req,res)=>{
    console.dir(req.cookies);
    res.send("send your some cookies!");

});



app.listen(3000,()=>{
    console.log("App is listing on port");
})