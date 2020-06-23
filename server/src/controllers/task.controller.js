var ApiController = require('./api.controller');

class TaskController extends ApiController {
    constructor(service) {
        super(service);
    }
}

module.exports = TaskController;