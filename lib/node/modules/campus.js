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

var Campus = function (_Service) {
  (0, _inherits3.default)(Campus, _Service);

  function Campus(config) {
    (0, _classCallCheck3.default)(this, Campus);
    return (0, _possibleConstructorReturn3.default)(this, (Campus.__proto__ || (0, _getPrototypeOf2.default)(Campus)).call(this, config));
  }

  (0, _createClass3.default)(Campus, [{
    key: 'all',
    value: function all() {
      return this._get('campus.json').then(function (result) {
        result.data = result.data.Campuses;
        return result;
      });
    }
  }]);
  return Campus;
}(_service2.default);

exports.default = Campus;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2NhbXB1cy5qcyJdLCJuYW1lcyI6WyJDYW1wdXMiLCJjb25maWciLCJfZ2V0IiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJDYW1wdXNlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBRU1BLE07OztBQUNKLGtCQUFZQyxNQUFaLEVBQW9CO0FBQUE7QUFBQSxpSUFDWkEsTUFEWTtBQUVuQjs7OzswQkFFSztBQUNKLGFBQU8sS0FBS0MsSUFBTCxDQUFVLGFBQVYsRUFDSkMsSUFESSxDQUNDLFVBQUNDLE1BQUQsRUFBWTtBQUNoQkEsZUFBT0MsSUFBUCxHQUFjRCxPQUFPQyxJQUFQLENBQVlDLFFBQTFCO0FBQ0EsZUFBT0YsTUFBUDtBQUNELE9BSkksQ0FBUDtBQUtEOzs7OztrQkFHWUosTSIsImZpbGUiOiJjYW1wdXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBDYW1wdXMgZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIGFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0KCdjYW1wdXMuanNvbicpXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc3VsdC5kYXRhID0gcmVzdWx0LmRhdGEuQ2FtcHVzZXM7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW1wdXM7XG4iXX0=