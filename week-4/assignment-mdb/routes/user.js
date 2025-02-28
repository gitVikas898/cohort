const express = require("express");
const { User, Course } = require("../db/db");
const userMiddleware = require("../middlewares/user");
const router = express.Router();
const zod = require('zod')

const inputSchema = zod.object({
    username:zod.string(),
    password:zod.string(),
})

router.post('/signup',async function(req,res){
    const {username,password} = req.body;

    const inputValidation = inputSchema.safeParse({
        username,
        password
    })

    if(!inputValidation.success){
        return res.status(400).json({
            message:"Invalid inputs "
        })
    }

    const findUser = await User.findOne({
        username
    })

    if(findUser){
        return res.status(400).json({
            message:"User already exists , Try Logging in"
        })
    }

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

router.get("/courses",async(req,res)=>{
    // this endpoint has no middleware because it wants to show all the courses

    const response = await Course.find({});
    res.json({
        Courses:response,
    });
})

router.post('/courses/:courseId',userMiddleware,async(req,res)=>{
        const courseId = req.params.courseId;
        const username = req.headers.username;

        try{
                await User.updateOne({
                username:username
            },{
                "$push":{
                    purchasedCourses:courseId
                }
            })
         }catch(error){
                console.log("Error",error)
         }
        
        res.json({message:"Course Purchased Successfully"})

})

router.get('/purchasedCourses',userMiddleware,async(req,res)=>{
    const user = await User.findOne({
        username:req.headers.username
    })
    const courses = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })

    res.json({
       courses: courses
    })
})


module.exports = router;