'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _service = require('./service');

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Person = function (_Service) {
  _inherits(Person, _Service);

  function Person(config) {
    _classCallCheck(this, Person);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Person).call(this, config));
  }

  _createClass(Person, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3BlcnNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNOzs7QUFDSixXQURJLE1BQ0osQ0FBWSxNQUFaLEVBQW9COzBCQURoQixRQUNnQjs7a0VBRGhCLG1CQUVJLFNBRFk7R0FBcEI7O2VBREk7O3dCQUtBLE9BQU87QUFDVCxhQUFPLEtBQUssSUFBTCxhQUFvQixlQUFwQixDQUFQLENBRFM7Ozs7MkJBSUosS0FBSztBQUNWLFVBQUksU0FBUztBQUNYLHFCQUFvQixJQUFJLFVBQUosSUFBa0IsRUFBbEI7QUFDcEIsZ0JBQW9CLElBQUksS0FBSixJQUFhLEVBQWI7QUFDcEIsZ0JBQW9CLElBQUksS0FBSixJQUFhLEVBQWI7QUFDcEIsd0JBQW9CLElBQUksU0FBSixJQUFpQixFQUFqQjtBQUNwQiw0QkFBb0IsSUFBSSxNQUFKLElBQWMsRUFBZDtPQUxsQixDQURNOztBQVNWLFVBQUksUUFBUSxzQkFBRyxTQUFILENBQWEsTUFBYixDQUFSLENBVE07O0FBV1YsYUFBTyxLQUFLLElBQUwsa0JBQXlCLEtBQXpCLENBQVAsQ0FYVTs7OztTQVRSOzs7a0JBd0JTIiwiZmlsZSI6InBlcnNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyAgICAgIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBQZXJzb24gZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIGdldChyZWdpZCkge1xuICAgIHJldHVybiB0aGlzLl9nZXQoYHBlcnNvbi8ke3JlZ2lkfS5qc29uYCk7XG4gIH1cblxuICBzZWFyY2gob3B0KSB7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIGVtcGxveWVlX2lkOiAgICAgICAgb3B0LmVtcGxveWVlaWQgfHwgJycsXG4gICAgICBuZXRfaWQ6ICAgICAgICAgICAgIG9wdC5uZXRpZCB8fCAnJyxcbiAgICAgIHJlZ19pZDogICAgICAgICAgICAgb3B0LnJlZ2lkIHx8ICcnLFxuICAgICAgc3R1ZGVudF9udW1iZXI6ICAgICBvcHQuc3R1ZGVudGlkIHx8ICcnLFxuICAgICAgc3R1ZGVudF9zeXN0ZW1fa2V5OiBvcHQuc3lza2V5IHx8ICcnXG4gICAgfTtcblxuICAgIGxldCBxdWVyeSA9IHFzLnN0cmluZ2lmeShwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2dldChgcGVyc29uLmpzb24/JHtxdWVyeX1gKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZXJzb247XG4iXX0=