'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _rc = require('./utils/rc');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _promise2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _promise2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // 管理cli配置文件 xzxldl config set registry vuejs-templates更新使用的模板


var config = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(action, key, value) {
        var result, obj;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.t0 = action;
                        _context.next = _context.t0 === 'get' ? 3 : _context.t0 === 'set' ? 15 : _context.t0 === 'remove' ? 17 : 19;
                        break;

                    case 3:
                        if (!key) {
                            _context.next = 10;
                            break;
                        }

                        _context.next = 6;
                        return (0, _rc.get)(key);

                    case 6:
                        result = _context.sent;

                        console.log(result);
                        _context.next = 14;
                        break;

                    case 10:
                        _context.next = 12;
                        return (0, _rc.getAll)();

                    case 12:
                        obj = _context.sent;

                        (0, _keys2.default)(obj).forEach(function (key) {
                            console.log(key + '=' + obj[key]);
                        });

                    case 14:
                        return _context.abrupt('break', 20);

                    case 15:
                        (0, _rc.set)(key, value);
                        return _context.abrupt('break', 20);

                    case 17:
                        (0, _rc.remove)(key);
                        return _context.abrupt('break', 20);

                    case 19:
                        return _context.abrupt('break', 20);

                    case 20:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function config(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();
module.exports = config;