const express = require("express");
const { Admin, Course } = require("../db/db");
const router = express.Router();
const adminMiddleware = require("../middlewares/admin")
const zod = require('zod');

const inputSchema = zod.object({
    username:zod.string(),
    password:zod.string()
});

const courseSchema = zod.object({
    title:zod.string(),
    description:zod.string(),
    imageLink :zod.string(),
    price:zod.number()
})

router.post('/signup',async function(req,res){
    const inputValidation = inputSchema.safeParse({
        username:req.body.username,
        password:req.body.password
    })

    if(!inputValidation.success){
        return res.status(400).json({
            message:"Invalid input credentials provided"
        })
    }

    const findExistingUser = await Admin.findOne({
        username:inputValidation.data
    })

    if(findExistingUser){
        return res.status(400).json(
            {
                message:"User already exists try loging in"
            }
        )
    }

    //check if user with this username exists ? if not create entry in database
    await Admin.create({
        username:req.body.username,
        password:req.body.password
    });

    res.status(201).json(
        {
            message:"Admin Created Successfully"
        });
});

router.post('/courses',adminMiddleware,async (req,res)=>{

    const{title,description,imageLink,price} = req.body;
    
    const inputValidation = courseSchema.safeParse({
        title,
        description,
        imageLink,
        price
    })

    if(!inputValidation.success){
        return res.status(400).json(
            {
                message:"Invalid input provided"
            }
        )
    }

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