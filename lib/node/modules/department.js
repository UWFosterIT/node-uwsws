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
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Department).call(this, config));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2RlcGFydG1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFFTSxVOzs7QUFDSixzQkFBWSxNQUFaLEVBQW9CO0FBQUE7QUFBQSwrR0FDWixNQURZO0FBRW5COzs7OzJCQUVNLEcsRUFBSztBQUNWLFVBQUksUUFBUSxzQkFBRyxTQUFILENBQWE7QUFDdkIsOEJBQXNCLElBQUksS0FBSixJQUFhLEVBRFo7QUFFdkIsc0JBQXNCLElBQUksTUFBSixJQUFjLENBRmI7QUFHdkIsaUJBQXNCLElBQUksT0FBSixJQUFlLEVBSGQ7QUFJdkIsaUJBQXNCLElBQUksSUFBSixJQUFZLEVBSlg7QUFLdkIsY0FBc0IsSUFBSSxJQUFKLElBQVk7QUFMWCxPQUFiLENBQVo7O0FBUUEsYUFBTyxLQUFLLElBQUwsc0JBQTZCLEtBQTdCLEVBQ0osSUFESSxDQUNDLFVBQUMsTUFBRCxFQUFZO0FBQ2hCLGVBQU8sSUFBUCxHQUFjLE9BQU8sSUFBUCxDQUFZLFdBQTFCO0FBQ0EsZUFBTyxNQUFQO0FBQ0QsT0FKSSxDQUFQO0FBS0Q7Ozs7O2tCQUdZLFUiLCJmaWxlIjoiZGVwYXJ0bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyAgICAgIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBEZXBhcnRtZW50IGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBzZWFyY2gob3B0KSB7XG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHtcbiAgICAgIGNvbGxlZ2VfYWJicmV2aWF0aW9uOiBvcHQuYWJyZXYgfHwgJycsXG4gICAgICBmdXR1cmVfdGVybXM6ICAgICAgICAgb3B0LmZ1dHVyZSB8fCAwLFxuICAgICAgcXVhcnRlcjogICAgICAgICAgICAgIG9wdC5xdWFydGVyIHx8ICcnLFxuICAgICAgc29ydF9ieTogICAgICAgICAgICAgIG9wdC5zb3J0IHx8ICcnLFxuICAgICAgeWVhcjogICAgICAgICAgICAgICAgIG9wdC55ZWFyIHx8ICcnXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBkZXBhcnRtZW50Lmpzb24/JHtxdWVyeX1gKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXN1bHQuZGF0YSA9IHJlc3VsdC5kYXRhLkRlcGFydG1lbnRzO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVwYXJ0bWVudDtcbiJdfQ==