var path = require('path');
class StringUtil {
    static fileToPascalCase(file) {
        var arr = path.basename(file, '.js').split('.');

        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
        }

        return arr.join('');
    }
}

module.exports = StringUtil;