const express = require('express');
const router = express.Router()

const {getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    getTodo
} = require("../controllers/todosControllers");
 


router.get('/',getTodos);

router.post('/',createTodo);

router.put('/:id',updateTodo);

router.delete('/:id',deleteTodo)

router.get("/:id",getTodo)

module.exports = router;
   
