//Basic Http Server in Express JS 
const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("Hello Express")
})
app.get('/about',(req,res)=>{
    res.send("about page");
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})