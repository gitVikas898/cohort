const { User } = require("../db/db");
const zod = require('zod')

const inputSchema = zod.object({
    username:zod.string(),
    password:zod.string()
})

async function userMiddleware(req,res,next){
   
    const validation = inputSchema.safeParse({
        username:req.headers.username,
        password:req.headers.password
    });
    if(!validation.success){
        return res.status(400).json({message:"Invalid Input Credentials"})
    }
    const {username ,password} = validation.data;
    const findUser = await User.findOne({username,password});

    if(findUser){
        next();
    }else{
       return res.status(404).json({message:"User doesnt exist"})
    }
}

module.exports = userMiddleware;