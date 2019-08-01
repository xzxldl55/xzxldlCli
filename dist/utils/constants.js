'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEFAULTS = exports.RC = exports.VERSION = undefined;

var _package = require('../../package.json');

// 当前版本号
var VERSION = exports.VERSION = _package.version;

// 用户根目录
// 定义常量
var HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];

// 配置文件目录
var RC = exports.RC = HOME + '/.xzxldlrc';
// RC 配置下载模板的地方，给 github 的 api 使用
// https://api.github.com/users/xzxldl55/repos
// https://api.github.com/${type}/${registry}/repos
// 模板下载地址可配置
var DEFAULTS = exports.DEFAULTS = {
    registry: 'xzxldl',
    type: 'users'
};