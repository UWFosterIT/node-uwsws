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
    return (0, _possibleConstructorReturn3.default)(this, (Person.__proto__ || (0, _getPrototypeOf2.default)(Person)).call(this, config));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3BlcnNvbi5qcyJdLCJuYW1lcyI6WyJQZXJzb24iLCJjb25maWciLCJyZWdpZCIsIl9nZXQiLCJvcHQiLCJwYXJhbXMiLCJlbXBsb3llZV9pZCIsImVtcGxveWVlaWQiLCJuZXRfaWQiLCJuZXRpZCIsInJlZ19pZCIsInN0dWRlbnRfbnVtYmVyIiwic3R1ZGVudGlkIiwic3R1ZGVudF9zeXN0ZW1fa2V5Iiwic3lza2V5IiwicXVlcnkiLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRU1BLE07OztBQUNKLGtCQUFZQyxNQUFaLEVBQW9CO0FBQUE7QUFBQSxpSUFDWkEsTUFEWTtBQUVuQjs7Ozt3QkFFR0MsSyxFQUFPO0FBQ1QsYUFBTyxLQUFLQyxJQUFMLGFBQW9CRCxLQUFwQixXQUFQO0FBQ0Q7OzsyQkFFTUUsRyxFQUFLO0FBQ1YsVUFBSUMsU0FBUztBQUNYQyxxQkFBb0JGLElBQUlHLFVBQUosSUFBa0IsRUFEM0I7QUFFWEMsZ0JBQW9CSixJQUFJSyxLQUFKLElBQWEsRUFGdEI7QUFHWEMsZ0JBQW9CTixJQUFJRixLQUFKLElBQWEsRUFIdEI7QUFJWFMsd0JBQW9CUCxJQUFJUSxTQUFKLElBQWlCLEVBSjFCO0FBS1hDLDRCQUFvQlQsSUFBSVUsTUFBSixJQUFjO0FBTHZCLE9BQWI7O0FBUUEsVUFBSUMsUUFBUSxzQkFBR0MsU0FBSCxDQUFhWCxNQUFiLENBQVo7O0FBRUEsYUFBTyxLQUFLRixJQUFMLGtCQUF5QlksS0FBekIsQ0FBUDtBQUNEOzs7OztrQkFHWWYsTSIsImZpbGUiOiJwZXJzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgUGVyc29uIGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBnZXQocmVnaWQpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBwZXJzb24vJHtyZWdpZH0uanNvbmApO1xuICB9XG5cbiAgc2VhcmNoKG9wdCkge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBlbXBsb3llZV9pZDogICAgICAgIG9wdC5lbXBsb3llZWlkIHx8ICcnLFxuICAgICAgbmV0X2lkOiAgICAgICAgICAgICBvcHQubmV0aWQgfHwgJycsXG4gICAgICByZWdfaWQ6ICAgICAgICAgICAgIG9wdC5yZWdpZCB8fCAnJyxcbiAgICAgIHN0dWRlbnRfbnVtYmVyOiAgICAgb3B0LnN0dWRlbnRpZCB8fCAnJyxcbiAgICAgIHN0dWRlbnRfc3lzdGVtX2tleTogb3B0LnN5c2tleSB8fCAnJ1xuICAgIH07XG5cbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkocGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLl9nZXQoYHBlcnNvbi5qc29uPyR7cXVlcnl9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVyc29uO1xuIl19