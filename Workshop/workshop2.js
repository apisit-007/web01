const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () =>{
    console.log("Server's Running....");
})

app.get('/',(req,res)=>{
    res.send("Hello Express!!");
})

app.get('/about',(req,res)=>{
    res.send("Test About");
});

app.get('/contact',(req,res)=>{
    res.send("Test Contact");
});