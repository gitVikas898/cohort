const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

const JWT_SECRET = "vikas_server"

app.use(bodyParser.json());
app.use("/admin",adminRouter);
app.use("/users",userRouter);

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

module.exports = JWT_SECRET