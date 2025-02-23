const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;


app.get('/files',(req,res)=>{
    fs.readdir(path.join(__dirname,'./files/'),(err,files)=>{
        if(err){
            return res.status(500).json({message:"Failed to Load Files"})
        }
        res.json(files);
    })
});

app.get('/files/:name',(req,res)=>{
   const found = req.params.name;
   if(!found){
    res.status(404).json({message:"file not found"});
    return;
   }
   fs.readFile(path.join(__dirname,`./files/${found}.txt`),'utf8',(err,data)=>{
        if(err){
            res.status(404).json({message:"File Not Found"})
            return;
        }
        res.status(200).json({message:data});
   })
})
app.listen(port,()=>{
    console.log(`Server is listening to port ${port}`);
})
