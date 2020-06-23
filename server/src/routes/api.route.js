var express = require('express');
var router = express.Router();

var moduleUtil = require('../utils/module.util');
var dependencyUtil = require('../utils/dependency.util');

/*
 * Init Module util that reads the controller's directory.
 */
moduleUtil.init();
dependencyUtil.init();

/*
 * Injection services and create the routes 
 */
Object.keys(moduleUtil.controllers).forEach(controllerFileName => {
    if (controllerFileName.indexOf('api.controller') != -1) {
        return;
    }

    var Controller = moduleUtil.controllers[controllerFileName];
    var Service = dependencyUtil.getService(controllerFileName);

    if (Service != null) {
        var controllerObj = new Controller(new Service());

        var baseRoute = '/' + controllerFileName.split('.')[0];

        router.get(baseRoute + '/:id', controllerObj.get);
        router.get(baseRoute, controllerObj.list);
        router.post(baseRoute, controllerObj.create);
        router.put(baseRoute + '/:id', controllerObj.update);
        router.delete(baseRoute + '/:id', controllerObj.remove);
    }
});

module.exports = router;