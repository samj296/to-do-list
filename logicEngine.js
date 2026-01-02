const todo = [];
let id = 1;


function pushingToDo(item){
    const toDoObject = {
    id: id++,
    toDo: item,
    status:"pending"
}
    

    todo.push(toDoObject);
    return toDoObject
}

module.exports = {pushingToDo, todo}