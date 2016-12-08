'use strict';
var todos = require('../helpers/db');

module.exports = {
    FindTodoById: FindTodoById
}

function FindTodoById(req, res) {
    var id = req.swagger.params.id.value;
    var requestedTodo = todos.find(todo => todo.todo_id === id);

    res.header('Content-Type', 'application/json');

    var response = requestedTodo;
    if (!response) {
        response = { error: 'Error: Todo doesn\'t exist' };
        console.log(response.error);
        res.statusCode = 404;
    }

    res.end(JSON.stringify(response));
}
