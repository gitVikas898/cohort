const express = require("express");
const { User } = require("../db/db");
const router = express.Router();
router.post('/signup',async function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    //check if user with this username exists ? if not create entry in database
    await User.create({
        username,
        password
    });

    res.status(201).json(
        {
            message:"User Created Successfully"
        });
});

module.exports = router;