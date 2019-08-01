'use strict';

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _constants = require('./utils/constants');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return (0, _from2.default)(arr); } } // 入口文件


/**
 * xzxldl commands
 *  - config
 *  - init
 */

var actionMap = {
    init: {
        description: 'generate a new project from a template',
        usages: ['xzxldl init templateName projectName']
    },
    config: {
        alias: 'cfg',
        description: 'config .xzxldlrc',
        usages: ['xzxldl config set <k> <v>', 'xzxldl config get <k>', 'xzxldl config remove <k>']
    }
    // other commands


    // 添加init/config...命令
};(0, _keys2.default)(actionMap).forEach(function (action) {
    _commander2.default.command(action) // 配置命令xzxldl xxx
    .description(actionMap[action].description) // 添加描述
    .alias(actionMap[action].alias) // 添加别名
    .action(function () {
        switch (action) {
            case 'config':
                _index2.default.apply(undefined, [action].concat(_toConsumableArray(process.argv.slice(3))));
                break;
            case 'init':
                _index2.default.apply(undefined, [action].concat(_toConsumableArray(process.argv.slice(3))));
                break;
            default:
                break;
        }
    });
});

// xzxldl help帮助说明
function help() {
    console.log('\r\nUsage:');
    (0, _keys2.default)(actionMap).forEach(function (action) {
        actionMap[action].usages.forEach(function (usage) {
            console.log('   - ' + usage);
        });
    });
    console.log('\r');
}
_commander2.default.usage('<command> [options]');

// xzxldl -h配置help命令
_commander2.default.on('-h', help);
_commander2.default.on('--help', help);
// xzxldl -V 配置version命令 其为package.json中的版本号
_commander2.default.version(_constants.VERSION, '-V --version').parse(process.argv);

// xzxldl不带参数时
if (!process.argv.slice(2).length) {
    _commander2.default.outputHelp(make_green);
}
function make_green(txt) {
    return _chalk2.default.green(txt);
}