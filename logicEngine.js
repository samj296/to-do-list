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

function deleteNote(id){
    /* here I will try the expanded form then I will try the shorthand inorder
    to get a good grasp about the concept */
    
    /*
    let itemIndex = -1;
    for(let i = 0; i < todo.length; i++){
        let t = todo[i];
        if (t.id === id){
            itemIndex = i;
            break;
        }
        
    }
        */

    //short hand for the above version


    const itemIndex = todo.findIndex(t => t.id === id);
    // here findIndex will assign -1 if the id is not in the todo list
    if(itemIndex === -1){
        throw new Error(`Todo with id ${id} not found`);
    }

    return todo.splice(itemIndex,1);
    
}

module.exports = {pushingToDo, todo, deleteNote}