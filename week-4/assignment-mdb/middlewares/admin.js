const { Admin } = require("../db/db");
const zod = require('zod');
const JWT_SECRET = require("../server");
const jwt = require("jsonwebtoken");

const inputSchema = zod.object({
    username : zod.string(),
    password: zod.string(),
})

async function adminMiddleware(req,res,next){
   

    const token = req.headers.authorization
    const words = token.split(" ");
    const jwtToken = words[1];

    const decodedValue = jwt.verify(jwtToken,JWT_SECRET);

    const validation = inputSchema.safeParse({
        username:req.headers.username,
        password : req.headers.password
    });

    if(!validation.success){
        return res.status(400).json(
            {
                message:"Invalid input credentials"
            }
        )
    }

    const { username, password } = validation.data;

    const findAdmin = await Admin.findOne(
        {
            username,
            password
        }
    );

    if(findAdmin.username === decodedValue.username){
        next();
    }else{
       return res.status(404).json({message:"Admin doesnt exist"})
    }

}

module.exports = adminMiddleware