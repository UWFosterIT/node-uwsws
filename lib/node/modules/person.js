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
      return this._get('person/' + regid + '.json').then(function (result) {
        result.person = result.data;
        delete result.data;
        return result;
      });
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

      return this._get('person.json?' + query).then(function (result) {
        result.person = result.data;
        delete result.data;
        return result;
      });
    }
  }]);

  return Person;
}(_service2.default);

exports.default = Person;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3BlcnNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNOzs7QUFDSixXQURJLE1BQ0osQ0FBWSxNQUFaLEVBQW9COzBCQURoQixRQUNnQjs7a0VBRGhCLG1CQUVJLFNBRFk7R0FBcEI7O2VBREk7O3dCQUtBLE9BQU87QUFDVCxhQUFPLEtBQUssSUFBTCxhQUFvQixlQUFwQixFQUNKLElBREksQ0FDQyxVQUFDLE1BQUQsRUFBWTtBQUNoQixlQUFPLE1BQVAsR0FBZ0IsT0FBTyxJQUFQLENBREE7QUFFaEIsZUFBTyxPQUFPLElBQVAsQ0FGUztBQUdoQixlQUFPLE1BQVAsQ0FIZ0I7T0FBWixDQURSLENBRFM7Ozs7MkJBU0osS0FBSztBQUNWLFVBQUksU0FBUztBQUNYLHFCQUFvQixJQUFJLFVBQUosSUFBa0IsRUFBbEI7QUFDcEIsZ0JBQW9CLElBQUksS0FBSixJQUFhLEVBQWI7QUFDcEIsZ0JBQW9CLElBQUksS0FBSixJQUFhLEVBQWI7QUFDcEIsd0JBQW9CLElBQUksU0FBSixJQUFpQixFQUFqQjtBQUNwQiw0QkFBb0IsSUFBSSxNQUFKLElBQWMsRUFBZDtPQUxsQixDQURNOztBQVNWLFVBQUksUUFBUSxzQkFBRyxTQUFILENBQWEsTUFBYixDQUFSLENBVE07O0FBV1YsYUFBTyxLQUFLLElBQUwsa0JBQXlCLEtBQXpCLEVBQ0osSUFESSxDQUNDLFVBQUMsTUFBRCxFQUFZO0FBQ2hCLGVBQU8sTUFBUCxHQUFnQixPQUFPLElBQVAsQ0FEQTtBQUVoQixlQUFPLE9BQU8sSUFBUCxDQUZTO0FBR2hCLGVBQU8sTUFBUCxDQUhnQjtPQUFaLENBRFIsQ0FYVTs7OztTQWRSOzs7a0JBa0NTIiwiZmlsZSI6InBlcnNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyAgICAgIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBQZXJzb24gZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIGdldChyZWdpZCkge1xuICAgIHJldHVybiB0aGlzLl9nZXQoYHBlcnNvbi8ke3JlZ2lkfS5qc29uYClcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgcmVzdWx0LnBlcnNvbiA9IHJlc3VsdC5kYXRhO1xuICAgICAgICBkZWxldGUgcmVzdWx0LmRhdGE7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaChvcHQpIHtcbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgZW1wbG95ZWVfaWQ6ICAgICAgICBvcHQuZW1wbG95ZWVpZCB8fCAnJyxcbiAgICAgIG5ldF9pZDogICAgICAgICAgICAgb3B0Lm5ldGlkIHx8ICcnLFxuICAgICAgcmVnX2lkOiAgICAgICAgICAgICBvcHQucmVnaWQgfHwgJycsXG4gICAgICBzdHVkZW50X251bWJlcjogICAgIG9wdC5zdHVkZW50aWQgfHwgJycsXG4gICAgICBzdHVkZW50X3N5c3RlbV9rZXk6IG9wdC5zeXNrZXkgfHwgJydcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBwZXJzb24uanNvbj8ke3F1ZXJ5fWApXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc3VsdC5wZXJzb24gPSByZXN1bHQuZGF0YTtcbiAgICAgICAgZGVsZXRlIHJlc3VsdC5kYXRhO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVyc29uO1xuIl19