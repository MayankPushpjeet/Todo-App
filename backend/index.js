const express = require('express');
const {createTodo, updateTodo} = require("./types");
const { todo } = require('./db');
const app = express();

app.use(express.json());

app.post("/todo", async function(req,res){
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if(!parsedPayLoad.success){
            res.status(411).json({message : "you sent the wrong inputs"});
            return;
    }
    await todo.create({
        title : req.body.title,
        description : req.body.description,
        completed : false,
    })
    res.json({message : "Done"});
})

app.get("/todos", async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos,
    });

})

app.put("/completed", async function(req,res){
    const updatePayLoad = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({message : "You Sent The Wrong Inputs"});
        return;
    }
    await todo.findOneAndUpdate({ _id: req.body.id }, { $set: { completed: true } });
    res.json({message : "Todo marked as completed"});
})

app.listen(4000);
"OHH YEAH"