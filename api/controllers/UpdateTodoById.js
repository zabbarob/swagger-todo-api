'use strict';
var todos = require('../helpers/db');

module.exports = {
    UpdateTodoById: UpdateTodoById
}

function UpdateTodoById(req, res) {
    var id = req.swagger.params.id.value;
    var updated_todo = req.swagger.params.updated_todo.value;
    var index = todos.findIndex(todo => todo.todo_id === id);

    res.header('Content-Type', 'application/json');

    var response;
    if (index >= 0) {
        todos[index] = updated_todo;
        response = {};
        res.end();
    } else {
        response = { error: 'Error: Todo doesn\'t exist', index, id, todos };
        res.statusCode = 404;
        res.end(JSON.stringify(response));
    }
}
