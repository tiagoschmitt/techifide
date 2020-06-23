class DependencyUtil {
    static init() {
        //Custom map should be done here
    }

    static getService(controllerFileName) {
        try {
            var prefix = controllerFileName.split('.')[0];
            return require('../services/' + prefix + '.' + 'service');
        } catch (e) {
            return null;
        }
    }
}

module.exports = DependencyUtil;