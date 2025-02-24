//Middlewares
const express = require('express');
const app = express();
const port = 3000;
const zod = require('zod');
 // Middleware
app.use(express.json())

const kidneySchema = zod.array(zod.number());
const mainSchema = zod.object(
    {
        username : zod.string(),
        password : zod.string(),
        kidneyId: zod.preprocess((val) => Number(val), zod.number().int().min(1).max(2))
    }
)

const inputSchema = zod.object({
    username:zod.string(),
    password:zod.string().max(8),
    email: zod.string().email(),
});

app.get('/health-checkup',(req,res)=>{

    const validation = mainSchema.safeParse({
        username:req.headers.username,
        password:req.headers.password,
        kidneyId:req.query.kidneyId
    })

    if(!validation.success){
        res.status(400).json({message:"Invalid inputs provided"})
        return
    }
    const{username,password} = validation.data;

    if(username !== 'vikas' || password !== 'admin'){
        res.status(400).json({message:"Invalid Credentials"});
        return
    }

    res.status(200).json({message:"Your Kidneys are fine"});
})

app.post('/health-checkup',function(res,req){
    const kidneys = req.body;
    const validation = kidneySchema.safeParse(kidneys);
    if(!validation.success){
        res.status(400).json({message:"Invalid Kidneys Id" ,error:validation.error.format()});
        return
    }
    res.json({ success: true, data: kidneys });


})

app.post('/login',function(req,res){
    const input = req.body;
    const validation = inputSchema.safeParse(input);

    if(!validation.success){
        return res.status(400).json({message:"Invalid Input Provided"});
    }

    const {username , password , email} = validation.data;

    if(username !== 'vikas' || password !== 'admin' || email !== 'vikas@gmail.com'){
        return res.status(400).json({message:"Invalid Credentials"})
    }

    res.json({success:true,data:input})
})
//Global Catch
app.use(function(err,req,res,next){
    res.json({
        message:"Sorry our sever isn't responding to your request"
    });
})

app.listen(port,()=>{
    console.log(`Server Listening on :${port}`);
})