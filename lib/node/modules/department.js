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

var Department = function (_Service) {
  (0, _inherits3.default)(Department, _Service);

  function Department(config) {
    (0, _classCallCheck3.default)(this, Department);
    return (0, _possibleConstructorReturn3.default)(this, (Department.__proto__ || (0, _getPrototypeOf2.default)(Department)).call(this, config));
  }

  (0, _createClass3.default)(Department, [{
    key: 'search',
    value: function search(opt) {
      var query = _queryString2.default.stringify({
        college_abbreviation: opt.abrev || '',
        future_terms: opt.future || 0,
        quarter: opt.quarter || '',
        sort_by: opt.sort || '',
        year: opt.year || ''
      });

      return this._get('department.json?' + query).then(function (result) {
        result.data = result.data.Departments;
        return result;
      });
    }
  }]);
  return Department;
}(_service2.default);

exports.default = Department;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2RlcGFydG1lbnQuanMiXSwibmFtZXMiOlsiRGVwYXJ0bWVudCIsImNvbmZpZyIsIm9wdCIsInF1ZXJ5Iiwic3RyaW5naWZ5IiwiY29sbGVnZV9hYmJyZXZpYXRpb24iLCJhYnJldiIsImZ1dHVyZV90ZXJtcyIsImZ1dHVyZSIsInF1YXJ0ZXIiLCJzb3J0X2J5Iiwic29ydCIsInllYXIiLCJfZ2V0IiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJEZXBhcnRtZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFFTUEsVTs7O0FBQ0osc0JBQVlDLE1BQVosRUFBb0I7QUFBQTtBQUFBLHlJQUNaQSxNQURZO0FBRW5COzs7OzJCQUVNQyxHLEVBQUs7QUFDVixVQUFJQyxRQUFRLHNCQUFHQyxTQUFILENBQWE7QUFDdkJDLDhCQUFzQkgsSUFBSUksS0FBSixJQUFhLEVBRFo7QUFFdkJDLHNCQUFzQkwsSUFBSU0sTUFBSixJQUFjLENBRmI7QUFHdkJDLGlCQUFzQlAsSUFBSU8sT0FBSixJQUFlLEVBSGQ7QUFJdkJDLGlCQUFzQlIsSUFBSVMsSUFBSixJQUFZLEVBSlg7QUFLdkJDLGNBQXNCVixJQUFJVSxJQUFKLElBQVk7QUFMWCxPQUFiLENBQVo7O0FBUUEsYUFBTyxLQUFLQyxJQUFMLHNCQUE2QlYsS0FBN0IsRUFDSlcsSUFESSxDQUNDLFVBQUNDLE1BQUQsRUFBWTtBQUNoQkEsZUFBT0MsSUFBUCxHQUFjRCxPQUFPQyxJQUFQLENBQVlDLFdBQTFCO0FBQ0EsZUFBT0YsTUFBUDtBQUNELE9BSkksQ0FBUDtBQUtEOzs7OztrQkFHWWYsVSIsImZpbGUiOiJkZXBhcnRtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzICAgICAgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIERlcGFydG1lbnQgZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIHNlYXJjaChvcHQpIHtcbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkoe1xuICAgICAgY29sbGVnZV9hYmJyZXZpYXRpb246IG9wdC5hYnJldiB8fCAnJyxcbiAgICAgIGZ1dHVyZV90ZXJtczogICAgICAgICBvcHQuZnV0dXJlIHx8IDAsXG4gICAgICBxdWFydGVyOiAgICAgICAgICAgICAgb3B0LnF1YXJ0ZXIgfHwgJycsXG4gICAgICBzb3J0X2J5OiAgICAgICAgICAgICAgb3B0LnNvcnQgfHwgJycsXG4gICAgICB5ZWFyOiAgICAgICAgICAgICAgICAgb3B0LnllYXIgfHwgJydcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLl9nZXQoYGRlcGFydG1lbnQuanNvbj8ke3F1ZXJ5fWApXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc3VsdC5kYXRhID0gcmVzdWx0LmRhdGEuRGVwYXJ0bWVudHM7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXBhcnRtZW50O1xuIl19