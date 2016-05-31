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

var Person = function (_Service) {
  (0, _inherits3.default)(Person, _Service);

  function Person(config) {
    (0, _classCallCheck3.default)(this, Person);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Person).call(this, config));
  }

  (0, _createClass3.default)(Person, [{
    key: 'get',
    value: function get(regid) {
      return this._get('person/' + regid + '.json');
    }
  }, {
    key: 'search',
    value: function search(opt) {
      var params = {
        employee_id: opt.employeeid || '',
        net_id: opt.netid || '',
        reg_id: opt.regid || '',
        student_number: opt.studentid || '',
        student_system_key: opt.syskey || ''
      };

      var query = _queryString2.default.stringify(params);

      return this._get('person.json?' + query);
    }
  }]);
  return Person;
}(_service2.default);

exports.default = Person;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3BlcnNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztJQUVNLE07OztBQUNKLGtCQUFZLE1BQVosRUFBb0I7QUFBQTtBQUFBLDJHQUNaLE1BRFk7QUFFbkI7Ozs7d0JBRUcsSyxFQUFPO0FBQ1QsYUFBTyxLQUFLLElBQUwsYUFBb0IsS0FBcEIsV0FBUDtBQUNEOzs7MkJBRU0sRyxFQUFLO0FBQ1YsVUFBSSxTQUFTO0FBQ1gscUJBQW9CLElBQUksVUFBSixJQUFrQixFQUQzQjtBQUVYLGdCQUFvQixJQUFJLEtBQUosSUFBYSxFQUZ0QjtBQUdYLGdCQUFvQixJQUFJLEtBQUosSUFBYSxFQUh0QjtBQUlYLHdCQUFvQixJQUFJLFNBQUosSUFBaUIsRUFKMUI7QUFLWCw0QkFBb0IsSUFBSSxNQUFKLElBQWM7QUFMdkIsT0FBYjs7QUFRQSxVQUFJLFFBQVEsc0JBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBWjs7QUFFQSxhQUFPLEtBQUssSUFBTCxrQkFBeUIsS0FBekIsQ0FBUDtBQUNEOzs7OztrQkFHWSxNIiwiZmlsZSI6InBlcnNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyAgICAgIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBQZXJzb24gZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIGdldChyZWdpZCkge1xuICAgIHJldHVybiB0aGlzLl9nZXQoYHBlcnNvbi8ke3JlZ2lkfS5qc29uYCk7XG4gIH1cblxuICBzZWFyY2gob3B0KSB7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIGVtcGxveWVlX2lkOiAgICAgICAgb3B0LmVtcGxveWVlaWQgfHwgJycsXG4gICAgICBuZXRfaWQ6ICAgICAgICAgICAgIG9wdC5uZXRpZCB8fCAnJyxcbiAgICAgIHJlZ19pZDogICAgICAgICAgICAgb3B0LnJlZ2lkIHx8ICcnLFxuICAgICAgc3R1ZGVudF9udW1iZXI6ICAgICBvcHQuc3R1ZGVudGlkIHx8ICcnLFxuICAgICAgc3R1ZGVudF9zeXN0ZW1fa2V5OiBvcHQuc3lza2V5IHx8ICcnXG4gICAgfTtcblxuICAgIGxldCBxdWVyeSA9IHFzLnN0cmluZ2lmeShwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2dldChgcGVyc29uLmpzb24/JHtxdWVyeX1gKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZXJzb247XG4iXX0=