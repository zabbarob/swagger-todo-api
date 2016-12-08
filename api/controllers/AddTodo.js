'use strict';
var todos = require('../helpers/db');

module.exports = {
    AddTodo: AddTodo
}

function AddTodo(req, res) {
    var newTodo = req.swagger.params.todo.value;

    if (todos.find(todo => todo.todo_id === newTodo.todo_id)) {
        var error = 'Error: Todo already exists';
        console.log(error);
        res.statusCode = 409;
        res.end(JSON.stringify(error));
    }

    newTodo.datecreated = new Date(); // set creation time stamp
    todos.push(newTodo);

    console.log(`Todo ${newTodo.todo_id} has been added`);
    res.header('Content-Type', 'application/json');
    res.end();
}
