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

app.get('/intrest',function(req,res){
    const p = parseFloat(req.query.principal)
    const r = parseFloat(req.query.rate)
    const t = parseFloat(req.query.time);

    const si = (p*r*t)/100;
    const amount = p+si;

    res.json({
        SI:si.toFixed(),
        Amount :amount.toFixed(2)
    });
})

app.listen(port)

