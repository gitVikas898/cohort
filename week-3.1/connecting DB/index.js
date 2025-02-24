//Baisc Setup
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
const jwt = require('jsonwebtoken')
const jwtSecret = "nvikas@2025"

//DB connection
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://vikaskumarsingh1198:7mde5eI23UQObpTQ@cluster0.vr9ym.mongodb.net/userappnew"
);

//DB Schema
const User = mongoose.model("Users", {
  username: String,
  email: String,
  password: String,
});

//Signup Logic
app.post("/signup", async function (req, res) {

  const { username, email, password } = req.body;

  const verify = await User.findOne({ email: email });
  if (verify) {
    return res.status(400).json({ message: "User already exists!" });
  }
  const user = new User({
    username: username,
    email: email,
    password: password,
  });
  await user.save();
  res.json({
    message:"user created successfully"
  })
});
app.post('/signin',async function(req,res){
    const {username , password} = req.body;

    const user = await User.findOne({username:username});

    if(!user){
        return res.status(404).json({message:"User does not exists"});
    }

   if(user.password !== password){
        return res.status(401).json({message:"Invalid Password"})
   }

    const token = jwt.sign({username},jwtSecret);

    return res.json({
        token
    })

})


app.get('/user',async function(req,res){
    const token = req.headers.authorization;
    try{
        const decode = jwt.verify(token,jwtSecret);
        const user = await User.findOne({username:decode.username});
        if(!user){
            return res.status(404).json({ message: "User not found" });
        }

        res.json({
            username:user.username,
            email:user.email
        })
    }catch(error){
       return res.status(403).json({message:"Invalid Token"})
    }
})

app.listen(port)