const { Admin } = require("../db/db");

async function adminMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    const validate = await Admin.findOne({username,password});

    if(validate){
        next();
    }else{
       return res.status(404).json({message:"Admin doesnt exist"})
    }

}

module.exports = adminMiddleware