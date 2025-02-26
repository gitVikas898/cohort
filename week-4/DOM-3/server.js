const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

let todos = [ { 
   
    tittle: "Goto The Gym",
    desc: "Leg Day",
    isCompleted:false
  },
  {
    
    tittle: "Read a Book",
    desc: "Read about Chess openings",
    isCompleted:false
  },]

app.get("/todos", function (req, res) {
  res.status(200).json({todos:todos})
});
app.post('/todos',function(req,res){
    const {tittle ,desc,isCompleted} = req.body;
    const newTodo = {tittle,desc,isCompleted};

    todos.push(newTodo);
    return res.status(200).json({
        message:"Todo added succesfully",
        todo:newTodo
    });
})
app.put("/todos/:id",function(req,res){
    const id = parseInt(req.params.id);
    todos[id].isCompleted = true;

    res.json({
        message:"Updated Successfully"
    })
})
app.delete('/todos/:id',function(req,res){
    const id = parseInt(req.params.id);
    todos = todos.filter((_,index)=>index !== id);
    res.json({
        message:"Todo Deleted"
    })
})
app.listen(port);
