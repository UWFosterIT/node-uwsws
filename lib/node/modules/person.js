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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3BlcnNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNLE07WUFBQSxNOztBQUNKLFdBREksTUFDSixDQUFZLE1BQVosRUFBb0I7QUFBQSwwQkFEaEIsTUFDZ0I7O0FBQUEsa0VBRGhCLE1BQ2dCLGFBQ1osTUFEWTtBQUVuQjs7ZUFIRyxNOzt3QkFLQSxLLEVBQU87QUFDVCxhQUFPLEtBQUssSUFBTCxhQUFvQixLQUFwQixXQUFQO0FBQ0Q7OzsyQkFFTSxHLEVBQUs7QUFDVixVQUFJLFNBQVM7QUFDWCxxQkFBb0IsSUFBSSxVQUFKLElBQWtCLEVBRDNCO0FBRVgsZ0JBQW9CLElBQUksS0FBSixJQUFhLEVBRnRCO0FBR1gsZ0JBQW9CLElBQUksS0FBSixJQUFhLEVBSHRCO0FBSVgsd0JBQW9CLElBQUksU0FBSixJQUFpQixFQUoxQjtBQUtYLDRCQUFvQixJQUFJLE1BQUosSUFBYztBQUx2QixPQUFiOztBQVFBLFVBQUksUUFBUSxzQkFBRyxTQUFILENBQWEsTUFBYixDQUFaOztBQUVBLGFBQU8sS0FBSyxJQUFMLGtCQUF5QixLQUF6QixDQUFQO0FBQ0Q7OztTQXJCRyxNOzs7a0JBd0JTLE0iLCJmaWxlIjoicGVyc29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzICAgICAgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIFBlcnNvbiBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgZ2V0KHJlZ2lkKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldChgcGVyc29uLyR7cmVnaWR9Lmpzb25gKTtcbiAgfVxuXG4gIHNlYXJjaChvcHQpIHtcbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgZW1wbG95ZWVfaWQ6ICAgICAgICBvcHQuZW1wbG95ZWVpZCB8fCAnJyxcbiAgICAgIG5ldF9pZDogICAgICAgICAgICAgb3B0Lm5ldGlkIHx8ICcnLFxuICAgICAgcmVnX2lkOiAgICAgICAgICAgICBvcHQucmVnaWQgfHwgJycsXG4gICAgICBzdHVkZW50X251bWJlcjogICAgIG9wdC5zdHVkZW50aWQgfHwgJycsXG4gICAgICBzdHVkZW50X3N5c3RlbV9rZXk6IG9wdC5zeXNrZXkgfHwgJydcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBwZXJzb24uanNvbj8ke3F1ZXJ5fWApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlcnNvbjtcbiJdfQ==