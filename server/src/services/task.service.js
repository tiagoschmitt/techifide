var AbstractService = require('./abstract.service');
var Task = require('../models/task.model');

class TaskService extends AbstractService {
    async get(id) {
        var user =  await new Task()
        .where('id', id)
        .fetch();

        return user;
    }

    async list() {
        return await new Task()
            .fetchAll();
    }
    
    async create(data) {
        var task = new Task({
            title: data.title,
            description: data.description,
            status : data.status || 0
        });

        return await task.save();
    }
    
    async update(id, data) {
        var task = new Task({id: id });
        return task.save(data, {patch: true});
    }

    async remove(id) {
        var task = new Task({id: id });
        return task.destroy();
    }
}

module.exports = TaskService;