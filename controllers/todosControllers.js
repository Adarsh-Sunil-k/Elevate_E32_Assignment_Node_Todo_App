let todos = [];
const getTodos =  (req, res)=> {
        // console.log(req.params);
        res.status(200).json(todos);
    }

const createTodo = (req, res)=>{
    // console.log(req.body);
    const newTodo = {
        id:todos.length +1,
        task:req.body.task,
        completed: req.body.completed || false
    };
    const task = req.body.task
    if(!task){
        res.status(401);
        throw new Error("please fill task feald");
    }else{
        console.log(newTodo);
        todos.push(newTodo);
        res.status(201).json(newTodo);
        console.log(todos);
    }
}

const updateTodo = (req,res)=>{
    console.log(req.params.id);
    const todo = todos.find(t=> t.id === parseInt(req.params.id));
    if(!todo) return res.status(404).json({message:'Todo Not Found'});

    todo.task = req.body.task || todo.task ;
    todo.completed = req.body.completed !== undefined? req.body.completed : todo.completed ;
    res.status(200).json(todo);
    console.log(todo);
}

const deleteTodo = (req, res) => {
    const todo = todos.filter(t => t.id !== parseInt(req.params.id));
    todos = todo
    res.status(200).json({ message: 'Todo deleted' });
};

const getTodo = (req,res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if(!todo)return(
        res.status(404).json({message:"Todo Not Found"})
    )
    res.status(200).json(todo)
}

    module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    getTodo
}
 