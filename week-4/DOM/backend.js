const express = require('express');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors()); 
const port = 3000;

app.get('/sum',function(req,res){
    const a = req.query.a;
    const b = req.query.b;

    const sum = parseInt(a)+parseInt(b);

    res.send(sum.toString())
});

app.listen(port)

