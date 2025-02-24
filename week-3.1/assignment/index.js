const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const jwtPassword = 'nvikas@2025'
const port = 3000;

app.use(express.json());


const ALL_USERS = [
    {
        email:"vikassingh1865@gmail.com",
        password:"123",
        username:"Vikas"
    },
    {
        email:"rajan1865@gmail.com",
        password:"123",
        username:"Rajan"
    },
    {
        email:"komalsingh1865@gmail.com",
        password:"123",
        username:"Komal"
    },

]

function verifyUser(username,password){
    return ALL_USERS.find((user)=>user.username === username && user.password === password);
}

app.post('/signin',function(req,res){

   const {username,password} = req.body;

    if(!verifyUser(username,password)){
        return res.status(404).json({message:"User Not Found"});
    }

    let token = jwt.sign({username:username},jwtPassword);

    return res.json({
        token,
    })
});

app.get('/users',function(req,res){
    const token = req.headers.authorization;
    try{
        const decode = jwt.verify(token,jwtPassword);
        const username = decode.username;

        const data = ALL_USERS.filter((user)=>user.username !== username);
        res.status(200).json({
            users:data
        })

    }catch(error){
        return res.status(405).json({
            msg:"Invalid token"
        })
    }
});

app.listen(port);