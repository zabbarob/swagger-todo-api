'use strict';
var todos = require('../helpers/db');

module.exports = {
    DeleteTodoById: DeleteTodoById
}

function DeleteTodoById(req, res) {
    var id = req.swagger.params.id.value;
    var index = todos.findIndex(todo => todo.todo_id === id);

    res.header('Content-Type', 'application/json');

    var response;
    if (index >= 0) {
        todos.splice(index, 1);
        response = {};
    } else {
        response = { error: 'Error: Todo doesn\'t exist' };
        res.statusCode = 404;
    }
    res.end(JSON.stringify(response));
}
