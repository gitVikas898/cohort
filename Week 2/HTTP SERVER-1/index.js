//Basic Http Server in Express JS 
const express = require('express');
const app = express();
const port = 3000;
function sum(n){
    let sum = 0;
    for(let i=1;i<n;i++){
        sum = sum+i
    }
    return sum;
}

function twoSum(a,b){
    return a+b;
}

app.get('/',(req,res)=>{
    res.send("Hello Express")
});

app.get('/twosum',(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const result = twoSum(a,b);
    res.send(`Sum of ${a} and ${b} is ${result.toString()}`);
})
app.get('/sum',(req,res)=>{
    const n = req.query.n;
    const result = sum(n);
    res.send(`Sum of first ${n} numbers is ${result.toString()}`);
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});