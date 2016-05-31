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
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Campus).call(this, config));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2NhbXB1cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7SUFFTSxNOzs7QUFDSixrQkFBWSxNQUFaLEVBQW9CO0FBQUE7QUFBQSwyR0FDWixNQURZO0FBRW5COzs7OzBCQUVLO0FBQ0osYUFBTyxLQUFLLElBQUwsQ0FBVSxhQUFWLEVBQ0osSUFESSxDQUNDLFVBQUMsTUFBRCxFQUFZO0FBQ2hCLGVBQU8sSUFBUCxHQUFjLE9BQU8sSUFBUCxDQUFZLFFBQTFCO0FBQ0EsZUFBTyxNQUFQO0FBQ0QsT0FKSSxDQUFQO0FBS0Q7Ozs7O2tCQUdZLE0iLCJmaWxlIjoiY2FtcHVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgQ2FtcHVzIGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldCgnY2FtcHVzLmpzb24nKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXN1bHQuZGF0YSA9IHJlc3VsdC5kYXRhLkNhbXB1c2VzO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcHVzO1xuIl19