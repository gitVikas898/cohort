const { User } = require("../db/db");


async function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    const validate = await User.findOne({username,password});

    if(validate){
        next();
    }else{
       return res.status(404).json({message:"User doesnt exist"})
    }

}

module.exports = userMiddleware;