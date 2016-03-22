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
    value: function get(opt) {
      var verbose = opt.verbose || '';
      var query = opt.year + ',' + opt.quarter + ',' + opt.regid;

      return this._get('enrollment/' + query + '.json?verbose=' + verbose);
    }
  }, {
    key: 'search',
    value: function search(opt) {
      var params = {
        changed_since_date: opt.changeDate || '',
        reg_id: opt.regid || '',
        transcriptable_course: opt.transcriptable || '',
        verbose: opt.verbose || ''
      };

      var query = _queryString2.default.stringify(params);

      return this._get('enrollment.json?' + query);
    }
  }]);

  return Enrollment;
}(_service2.default);

exports.default = Enrollment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2Vucm9sbG1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTTs7O0FBQ0osV0FESSxVQUNKLENBQVksTUFBWixFQUFvQjswQkFEaEIsWUFDZ0I7O2tFQURoQix1QkFFSSxTQURZO0dBQXBCOztlQURJOzt3QkFLQSxLQUFLO0FBQ1AsVUFBSSxVQUFVLElBQUksT0FBSixJQUFlLEVBQWYsQ0FEUDtBQUVQLFVBQUksUUFBVyxJQUFJLElBQUosU0FBWSxJQUFJLE9BQUosU0FBZSxJQUFJLEtBQUosQ0FGbkM7O0FBSVAsYUFBTyxLQUFLLElBQUwsaUJBQXdCLDJCQUFzQixPQUE5QyxDQUFQLENBSk87Ozs7MkJBT0YsS0FBSztBQUNWLFVBQUksU0FBUztBQUNYLDRCQUF1QixJQUFJLFVBQUosSUFBa0IsRUFBbEI7QUFDdkIsZ0JBQXVCLElBQUksS0FBSixJQUFhLEVBQWI7QUFDdkIsK0JBQXVCLElBQUksY0FBSixJQUFzQixFQUF0QjtBQUN2QixpQkFBdUIsSUFBSSxPQUFKLElBQWUsRUFBZjtPQUpyQixDQURNOztBQVFWLFVBQUksUUFBUSxzQkFBRyxTQUFILENBQWEsTUFBYixDQUFSLENBUk07O0FBVVYsYUFBTyxLQUFLLElBQUwsc0JBQTZCLEtBQTdCLENBQVAsQ0FWVTs7OztTQVpSOzs7a0JBMEJTIiwiZmlsZSI6ImVucm9sbG1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgRW5yb2xsbWVudCBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgZ2V0KG9wdCkge1xuICAgIGxldCB2ZXJib3NlID0gb3B0LnZlcmJvc2UgfHwgJyc7XG4gICAgbGV0IHF1ZXJ5ID0gYCR7b3B0LnllYXJ9LCR7b3B0LnF1YXJ0ZXJ9LCR7b3B0LnJlZ2lkfWA7XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBlbnJvbGxtZW50LyR7cXVlcnl9Lmpzb24/dmVyYm9zZT0ke3ZlcmJvc2V9YCk7XG4gIH1cblxuICBzZWFyY2gob3B0KSB7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIGNoYW5nZWRfc2luY2VfZGF0ZTogICAgb3B0LmNoYW5nZURhdGUgfHwgJycsXG4gICAgICByZWdfaWQ6ICAgICAgICAgICAgICAgIG9wdC5yZWdpZCB8fCAnJyxcbiAgICAgIHRyYW5zY3JpcHRhYmxlX2NvdXJzZTogb3B0LnRyYW5zY3JpcHRhYmxlIHx8ICcnLFxuICAgICAgdmVyYm9zZTogICAgICAgICAgICAgICBvcHQudmVyYm9zZSB8fCAnJ1xuICAgIH07XG5cbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkocGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLl9nZXQoYGVucm9sbG1lbnQuanNvbj8ke3F1ZXJ5fWApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVucm9sbG1lbnQ7XG4iXX0=