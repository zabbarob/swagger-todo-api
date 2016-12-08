'use strict';
var todos = require('../helpers/db');

module.exports = {
    GetAllTodos: GetAllTodos
}

function GetAllTodos(req, res) {
    res.header('Content-Type', 'application/json');
    res.end(JSON.stringify(todos));
}
