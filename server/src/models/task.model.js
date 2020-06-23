var database = require('../config/database');

var Task = database.Model.extend({
    tableName: 'task'
});

module.exports = Task;