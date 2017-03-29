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

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _service = require('./service');

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var College = function (_Service) {
  (0, _inherits3.default)(College, _Service);

  function College(config) {
    (0, _classCallCheck3.default)(this, College);
    return (0, _possibleConstructorReturn3.default)(this, (College.__proto__ || (0, _getPrototypeOf2.default)(College)).call(this, config));
  }

  (0, _createClass3.default)(College, [{
    key: 'search',
    value: function search(opt) {

      var params = {
        campus_short_name: opt.name || '',
        future_terms: opt.future || 0,
        quarter: opt.quarter || '',
        year: opt.year || ''
      };

      var query = _queryString2.default.stringify(params);

      return this._get('college.json?' + query).then(function (result) {
        result.data = result.data.Colleges;
        return result;
      });
    }
  }]);
  return College;
}(_service2.default);

exports.default = College;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvbGxlZ2UuanMiXSwibmFtZXMiOlsiQ29sbGVnZSIsImNvbmZpZyIsIm9wdCIsInBhcmFtcyIsImNhbXB1c19zaG9ydF9uYW1lIiwibmFtZSIsImZ1dHVyZV90ZXJtcyIsImZ1dHVyZSIsInF1YXJ0ZXIiLCJ5ZWFyIiwicXVlcnkiLCJzdHJpbmdpZnkiLCJfZ2V0IiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJDb2xsZWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFFTUEsTzs7O0FBQ0osbUJBQVlDLE1BQVosRUFBb0I7QUFBQTtBQUFBLG1JQUNaQSxNQURZO0FBRW5COzs7OzJCQUVNQyxHLEVBQUs7O0FBRVYsVUFBSUMsU0FBUztBQUNYQywyQkFBbUJGLElBQUlHLElBQUosSUFBWSxFQURwQjtBQUVYQyxzQkFBbUJKLElBQUlLLE1BQUosSUFBYyxDQUZ0QjtBQUdYQyxpQkFBbUJOLElBQUlNLE9BQUosSUFBZSxFQUh2QjtBQUlYQyxjQUFtQlAsSUFBSU8sSUFBSixJQUFZO0FBSnBCLE9BQWI7O0FBT0EsVUFBSUMsUUFBUSxzQkFBR0MsU0FBSCxDQUFhUixNQUFiLENBQVo7O0FBRUEsYUFBTyxLQUFLUyxJQUFMLG1CQUEwQkYsS0FBMUIsRUFDSkcsSUFESSxDQUNDLFVBQUNDLE1BQUQsRUFBWTtBQUNoQkEsZUFBT0MsSUFBUCxHQUFjRCxPQUFPQyxJQUFQLENBQVlDLFFBQTFCO0FBQ0EsZUFBT0YsTUFBUDtBQUNELE9BSkksQ0FBUDtBQUtEOzs7OztrQkFHWWQsTyIsImZpbGUiOiJjb2xsZWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzICAgICAgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIENvbGxlZ2UgZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIHNlYXJjaChvcHQpIHtcblxuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBjYW1wdXNfc2hvcnRfbmFtZTogb3B0Lm5hbWUgfHwgJycsXG4gICAgICBmdXR1cmVfdGVybXM6ICAgICAgb3B0LmZ1dHVyZSB8fCAwLFxuICAgICAgcXVhcnRlcjogICAgICAgICAgIG9wdC5xdWFydGVyIHx8ICcnLFxuICAgICAgeWVhcjogICAgICAgICAgICAgIG9wdC55ZWFyIHx8ICcnXG4gICAgfTtcblxuICAgIGxldCBxdWVyeSA9IHFzLnN0cmluZ2lmeShwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2dldChgY29sbGVnZS5qc29uPyR7cXVlcnl9YClcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgcmVzdWx0LmRhdGEgPSByZXN1bHQuZGF0YS5Db2xsZWdlcztcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxlZ2U7XG4iXX0=