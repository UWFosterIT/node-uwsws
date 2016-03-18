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
    value: function get(regid, cb) {
      this._get('person/' + regid + '.json', cb);
      return;
    }
  }, {
    key: 'search',
    value: function search(opt, cb) {
      var params = {
        employee_id: opt.employeeid || '',
        net_id: opt.netid || '',
        reg_id: opt.regid || '',
        student_number: opt.studentid || '',
        student_system_key: opt.syskey || ''
      };

      var query = _queryString2.default.stringify(params);

      this._get('person.json?' + query, cb);
      return;
    }
  }]);

  return Person;
}(_service2.default);

exports.default = Person;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3BlcnNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNOzs7QUFDSixXQURJLE1BQ0osQ0FBWSxNQUFaLEVBQW9COzBCQURoQixRQUNnQjs7a0VBRGhCLG1CQUVJLFNBRFk7R0FBcEI7O2VBREk7O3dCQUtBLE9BQU8sSUFBSTtBQUNiLFdBQUssSUFBTCxhQUFvQixlQUFwQixFQUFrQyxFQUFsQyxFQURhO0FBRWIsYUFGYTs7OzsyQkFLUixLQUFLLElBQUk7QUFDZCxVQUFJLFNBQVM7QUFDWCxxQkFBb0IsSUFBSSxVQUFKLElBQWtCLEVBQWxCO0FBQ3BCLGdCQUFvQixJQUFJLEtBQUosSUFBa0IsRUFBbEI7QUFDcEIsZ0JBQW9CLElBQUksS0FBSixJQUFrQixFQUFsQjtBQUNwQix3QkFBb0IsSUFBSSxTQUFKLElBQWtCLEVBQWxCO0FBQ3BCLDRCQUFvQixJQUFJLE1BQUosSUFBa0IsRUFBbEI7T0FMbEIsQ0FEVTs7QUFTZCxVQUFJLFFBQVEsc0JBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBUixDQVRVOztBQVdkLFdBQUssSUFBTCxrQkFBeUIsS0FBekIsRUFBa0MsRUFBbEMsRUFYYztBQVlkLGFBWmM7Ozs7U0FWWjs7O2tCQTBCUyIsImZpbGUiOiJwZXJzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgUGVyc29uIGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBnZXQocmVnaWQsIGNiKSB7XG4gICAgdGhpcy5fZ2V0KGBwZXJzb24vJHtyZWdpZH0uanNvbmAsIGNiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBzZWFyY2gob3B0LCBjYikge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBlbXBsb3llZV9pZDogICAgICAgIG9wdC5lbXBsb3llZWlkIHx8ICcnLFxuICAgICAgbmV0X2lkOiAgICAgICAgICAgICBvcHQubmV0aWQgICAgICB8fCAnJyxcbiAgICAgIHJlZ19pZDogICAgICAgICAgICAgb3B0LnJlZ2lkICAgICAgfHwgJycsXG4gICAgICBzdHVkZW50X251bWJlcjogICAgIG9wdC5zdHVkZW50aWQgIHx8ICcnLFxuICAgICAgc3R1ZGVudF9zeXN0ZW1fa2V5OiBvcHQuc3lza2V5ICAgICB8fCAnJ1xuICAgIH07XG5cbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkocGFyYW1zKTtcblxuICAgIHRoaXMuX2dldChgcGVyc29uLmpzb24/JHtxdWVyeX1gLCBjYik7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlcnNvbjtcbiJdfQ==