const express = require("express");
const { Admin, Course } = require("../db/db");
const router = express.Router();
const adminMiddleware = require("../middlewares/admin")

router.post('/signup',async function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    //check if user with this username exists ? if not create entry in database
    await Admin.create({
        username,
        password
    });

    res.status(201).json(
        {
            message:"Admin Created Successfully"
        });
});

router.post('/courses',adminMiddleware,async (req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    //do some input validation using zod


  const newCourse =   await Course.create({
        title,
        description,
        imageLink,
        price
    })
    console.log(newCourse);
    res.status(201).json(
        {
            message:"Course created Successfully",
            courseId:newCourse._id
        });

    
})
router.get('/courses',adminMiddleware,async(req,res)=>{
  const courses =  await Course.find({})
  res.status(200).json({
    courses
  });
})

module.exports = router;