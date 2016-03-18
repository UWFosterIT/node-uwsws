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

var Enrollment = function (_Service) {
  _inherits(Enrollment, _Service);

  function Enrollment(config) {
    _classCallCheck(this, Enrollment);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Enrollment).call(this, config));
  }

  _createClass(Enrollment, [{
    key: 'get',
    value: function get(opt, cb) {
      var verbose = opt.verbose || '';
      var query = opt.year + ',' + opt.quarter + ',' + opt.regid;

      this._get('enrollment/' + query + '.json?verbose=' + verbose, cb);
      return;
    }
  }, {
    key: 'search',
    value: function search(opt, cb) {
      var params = {
        changed_since_date: opt.changeDate || '',
        reg_id: opt.regid || '',
        transcriptable_course: opt.transcriptable || '',
        verbose: opt.verbose || ''
      };

      var query = _queryString2.default.stringify(params);

      this._get('enrollment.json?' + query, cb);
      return;
    }
  }]);

  return Enrollment;
}(_service2.default);

exports.default = Enrollment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2Vucm9sbG1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTTs7O0FBQ0osV0FESSxVQUNKLENBQVksTUFBWixFQUFvQjswQkFEaEIsWUFDZ0I7O2tFQURoQix1QkFFSSxTQURZO0dBQXBCOztlQURJOzt3QkFLQSxLQUFLLElBQUk7QUFDWCxVQUFJLFVBQVUsSUFBSSxPQUFKLElBQWUsRUFBZixDQURIO0FBRVgsVUFBSSxRQUFhLElBQUksSUFBSixTQUFZLElBQUksT0FBSixTQUFlLElBQUksS0FBSixDQUZqQzs7QUFJWCxXQUFLLElBQUwsaUJBQXdCLDJCQUFzQixPQUE5QyxFQUF5RCxFQUF6RCxFQUpXO0FBS1gsYUFMVzs7OzsyQkFRTixLQUFLLElBQUk7QUFDZCxVQUFJLFNBQVM7QUFDWCw0QkFBdUIsSUFBSSxVQUFKLElBQXNCLEVBQXRCO0FBQ3ZCLGdCQUF1QixJQUFJLEtBQUosSUFBc0IsRUFBdEI7QUFDdkIsK0JBQXVCLElBQUksY0FBSixJQUFzQixFQUF0QjtBQUN2QixpQkFBdUIsSUFBSSxPQUFKLElBQXNCLEVBQXRCO09BSnJCLENBRFU7O0FBUWQsVUFBSSxRQUFRLHNCQUFHLFNBQUgsQ0FBYSxNQUFiLENBQVIsQ0FSVTs7QUFVZCxXQUFLLElBQUwsc0JBQTZCLEtBQTdCLEVBQXNDLEVBQXRDLEVBVmM7QUFXZCxhQVhjOzs7O1NBYlo7OztrQkE0QlMiLCJmaWxlIjoiZW5yb2xsbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyAgICAgIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBFbnJvbGxtZW50IGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBnZXQob3B0LCBjYikge1xuICAgIGxldCB2ZXJib3NlID0gb3B0LnZlcmJvc2UgfHwgJyc7XG4gICAgbGV0IHF1ZXJ5ICAgPSBgJHtvcHQueWVhcn0sJHtvcHQucXVhcnRlcn0sJHtvcHQucmVnaWR9YDtcblxuICAgIHRoaXMuX2dldChgZW5yb2xsbWVudC8ke3F1ZXJ5fS5qc29uP3ZlcmJvc2U9JHt2ZXJib3NlfWAsIGNiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBzZWFyY2gob3B0LCBjYikge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBjaGFuZ2VkX3NpbmNlX2RhdGU6ICAgIG9wdC5jaGFuZ2VEYXRlICAgICB8fCAnJyxcbiAgICAgIHJlZ19pZDogICAgICAgICAgICAgICAgb3B0LnJlZ2lkICAgICAgICAgIHx8ICcnLFxuICAgICAgdHJhbnNjcmlwdGFibGVfY291cnNlOiBvcHQudHJhbnNjcmlwdGFibGUgfHwgJycsXG4gICAgICB2ZXJib3NlOiAgICAgICAgICAgICAgIG9wdC52ZXJib3NlICAgICAgICB8fCAnJ1xuICAgIH07XG5cbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkocGFyYW1zKTtcblxuICAgIHRoaXMuX2dldChgZW5yb2xsbWVudC5qc29uPyR7cXVlcnl9YCwgY2IpO1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnJvbGxtZW50O1xuIl19