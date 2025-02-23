//Middlewares
const express = require('express');
const app = express();
const port = 3000;

app.get('/health-checkup',function(req,res){
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username !== "vikas" || password !== 'admin'){
        res.status(400).json({message:"Somethings up with your input"})
        return;
    }

    if(kidneyId<=0 || kidneyId >2){
        res.status(400).json({message:"Somethings up with your input"})
        return
    }

    res.json({message:"Your Kidneys is Fine"})

})

app.listen(port,()=>{
    console.log(`Server Listening on :${port}`);
})