'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _service = require('./service');

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TestScore = function (_Service) {
  (0, _inherits3.default)(TestScore, _Service);

  function TestScore(config) {
    (0, _classCallCheck3.default)(this, TestScore);
    return (0, _possibleConstructorReturn3.default)(this, (TestScore.__proto__ || (0, _getPrototypeOf2.default)(TestScore)).call(this, config));
  }

  (0, _createClass3.default)(TestScore, [{
    key: 'get',
    value: function get(opt) {
      if (opt.testType) {
        return this._get('testscore/' + opt.testType + ',' + opt.regid + '.json');
      }
      return this._get('testscore/' + opt.regid + '.json');
    }
  }]);
  return TestScore;
}(_service2.default);

exports.default = TestScore;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3Rlc3RzY29yZS5qcyJdLCJuYW1lcyI6WyJUZXN0U2NvcmUiLCJjb25maWciLCJvcHQiLCJ0ZXN0VHlwZSIsIl9nZXQiLCJyZWdpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBRU1BLFM7OztBQUNKLHFCQUFZQyxNQUFaLEVBQW9CO0FBQUE7QUFBQSx1SUFDWkEsTUFEWTtBQUVuQjs7Ozt3QkFFR0MsRyxFQUFLO0FBQ1AsVUFBSUEsSUFBSUMsUUFBUixFQUFrQjtBQUNoQixlQUFPLEtBQUtDLElBQUwsZ0JBQXVCRixJQUFJQyxRQUEzQixTQUF1Q0QsSUFBSUcsS0FBM0MsV0FBUDtBQUNEO0FBQ0QsYUFBTyxLQUFLRCxJQUFMLGdCQUF1QkYsSUFBSUcsS0FBM0IsV0FBUDtBQUNEOzs7OztrQkFHWUwsUyIsImZpbGUiOiJ0ZXN0c2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBUZXN0U2NvcmUgZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIGdldChvcHQpIHtcbiAgICBpZiAob3B0LnRlc3RUeXBlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0KGB0ZXN0c2NvcmUvJHtvcHQudGVzdFR5cGV9LCR7b3B0LnJlZ2lkfS5qc29uYCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9nZXQoYHRlc3RzY29yZS8ke29wdC5yZWdpZH0uanNvbmApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RTY29yZTtcbiJdfQ==