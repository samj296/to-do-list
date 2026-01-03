const express = require("express");
const {pushingToDo, todo, deleteNote} = require("./logicEngine");

const app = express();
app.use(express.json());

const PORT = 3000;

app.listen(PORT,() =>{
    console.log(`server is running on http://localhost:${PORT}`);
});


app.post("/todo",(req, res) => {
    const {todo: item} = req.body;
    const newTodo = pushingToDo(item)
    res.json(newTodo);
});

app.get("/todo",(req, res) =>{
    res.json(todo);
});

app.post("/todo/delete/:id",(req, res) =>{
    try{
        const id = Number(req.params.id);
        res.json(deleteNote(id));
    } catch (err){
        res.status(404).json({ error: err.message})
    }
    
});