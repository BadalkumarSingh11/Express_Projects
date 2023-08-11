const express = require( 'express' )
const router = express.Router();

const {createTodo} = require('../controller/createTodo');
const {getTodo,getTodoByid} = require('../controller/getTodo');
const {updateTodo} = require('../controller/updateTodo');
const {deleteTodo} = require('../controller/deleteTodo');

router.post('/createTodo',createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodoByid);
router.put("/updateTodos/:id",updateTodo);
router.delete("/deleteTodos/:id",deleteTodo);

module.exports = router;