'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.remove = exports.set = exports.getAll = exports.get = undefined;

var _defineProperty2 = require('babel-runtime/core-js/object/define-property');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _constants = require('./constants');

var _ini = require('ini');

var _util = require('util');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { (0, _defineProperty3.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _promise2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _promise2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // 配置文件， 对.xzxldlrc文件的增删改查
// 将异步函数转化为Promise对象


// fs函数Promise化
var exits = (0, _util.promisify)(_fs2.default.exists);
var readFile = (0, _util.promisify)(_fs2.default.readFile);
var writeFile = (0, _util.promisify)(_fs2.default.writeFile);

// RC为配置文件
// DEFAULTS为默认配置
var get = exports.get = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(key) {
        var exit, opts;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return exits(_constants.RC);

                    case 2:
                        exit = _context.sent;
                        // 同步处理异步函数
                        opts = void 0;

                        if (!exit) {
                            _context.next = 10;
                            break;
                        }

                        _context.next = 7;
                        return readFile(_constants.RC, 'utf-8');

                    case 7:
                        opts = _context.sent;

                        opts = (0, _ini.decode)(opts);
                        return _context.abrupt('return', opts[key]);

                    case 10:
                        return _context.abrupt('return', {});

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function get(_x) {
        return _ref.apply(this, arguments);
    };
}();

var getAll = exports.getAll = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var exit, opts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return exits(_constants.RC);

                    case 2:
                        exit = _context2.sent;
                        opts = void 0;

                        if (!exit) {
                            _context2.next = 10;
                            break;
                        }

                        _context2.next = 7;
                        return readFile(_constants.RC, 'utf8');

                    case 7:
                        opts = _context2.sent;

                        opts = (0, _ini.decode)(opts);
                        return _context2.abrupt('return', opts);

                    case 10:
                        return _context2.abrupt('return', _constants.DEFAULTS);

                    case 11:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function getAll() {
        return _ref2.apply(this, arguments);
    };
}();

var set = exports.set = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(key, value) {
        var exit, opts;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return exits(_constants.RC);

                    case 2:
                        exit = _context3.sent;
                        opts = void 0;

                        if (!exit) {
                            _context3.next = 17;
                            break;
                        }

                        _context3.next = 7;
                        return readFile(_constants.RC, 'utf-8');

                    case 7:
                        opts = _context3.sent;

                        opts = (0, _ini.decode)(opts);

                        if (key) {
                            _context3.next = 12;
                            break;
                        }

                        console.log(_chalk2.default.red(_chalk2.default.bold('Error:')), _chalk2.default.red('key is required'));
                        return _context3.abrupt('return');

                    case 12:
                        if (value) {
                            _context3.next = 15;
                            break;
                        }

                        console.log(_chalk2.default.red(_chalk2.default.bold('Error:')), _chalk2.default.red('value is require'));
                        return _context3.abrupt('return');

                    case 15:
                        _context3.next = 18;
                        break;

                    case 17:
                        opts = (0, _assign2.default)(_constants.DEFAULTS, _defineProperty({}, key, value));

                    case 18:
                        _context3.next = 20;
                        return writeFile(_constants.RC, (0, _ini.encode)(opts), 'utf-8');

                    case 20:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function set(_x2, _x3) {
        return _ref3.apply(this, arguments);
    };
}();

var remove = exports.remove = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(key) {
        var exit, opts;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return exits(_constants.RC);

                    case 2:
                        exit = _context4.sent;
                        opts = void 0;

                        if (!exit) {
                            _context4.next = 12;
                            break;
                        }

                        _context4.next = 7;
                        return readFile(_constants.RC, 'utf-8');

                    case 7:
                        opts = _context4.sent;

                        opts = (0, _ini.decode)(opts);
                        delete opts[key];
                        _context4.next = 12;
                        return writeFile(_constants.RC, (0, _ini.encode)(opts), 'utf-8');

                    case 12:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    }));

    return function remove(_x4) {
        return _ref4.apply(this, arguments);
    };
}();