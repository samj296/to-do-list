const express = require("express");
const {pushingToDo, todo} = require("./logicEngine");

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
    res.json(todo)
});