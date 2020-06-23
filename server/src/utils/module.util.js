var fs = require('fs');
const path = require('path');

class ModuleUtil {
    static init() {
        ModuleUtil.controllers = {};

        fs.readdirSync('src/controllers/').forEach(fileName => {
            ModuleUtil.controllers[path.parse(fileName).name] = require('../controllers/' + fileName);
        });
    }

    static getController(fileName) {
        return ModuleUtil.controllers[fileName];
    }
}

module.exports = ModuleUtil;