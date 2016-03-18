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

var Course = function (_Service) {
  _inherits(Course, _Service);

  function Course(config) {
    _classCallCheck(this, Course);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Course).call(this, config));
  }

  _createClass(Course, [{
    key: 'get',
    value: function get(opt, cb) {
      var query = opt.year + ',' + opt.quarter + ',' + opt.curriculum + ',' + opt.course;
      this._get('course/' + query + '.json', cb);
      return;
    }
  }, {
    key: 'search',
    value: function search(opt, cb) {
      var params = {
        changed_since_date: opt.changeDate || '',
        course_number: opt.course || '',
        course_title_contains: opt.contains || '',
        course_title_starts: opt.startsWith || '',
        curriculum_abbreviation: opt.curriculum || '',
        exlude_coures_without_sections: opt.exclude || '',
        future_terms: opt.future || 0,
        page_size: opt.size || '',
        page_start: opt.start || '',
        transcriptable_course: opt.transcriptable || '',
        quarter: opt.quarter || '',
        year: opt.year || ''
      };

      var query = _queryString2.default.stringify(params);

      this._get('course.json?' + query, cb);
      return;
    }
  }]);

  return Course;
}(_service2.default);

exports.default = Course;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvdXJzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNOzs7QUFDSixXQURJLE1BQ0osQ0FBWSxNQUFaLEVBQW9COzBCQURoQixRQUNnQjs7a0VBRGhCLG1CQUVJLFNBRFk7R0FBcEI7O2VBREk7O3dCQUtBLEtBQUssSUFBSTtBQUNYLFVBQUksUUFBVyxJQUFJLElBQUosU0FBWSxJQUFJLE9BQUosU0FBZSxJQUFJLFVBQUosU0FBa0IsSUFBSSxNQUFKLENBRGpEO0FBRVgsV0FBSyxJQUFMLGFBQW9CLGVBQXBCLEVBQWtDLEVBQWxDLEVBRlc7QUFHWCxhQUhXOzs7OzJCQU1OLEtBQUssSUFBSTtBQUNkLFVBQUksU0FBUztBQUNYLDRCQUFnQyxJQUFJLFVBQUosSUFBc0IsRUFBdEI7QUFDaEMsdUJBQWdDLElBQUksTUFBSixJQUFzQixFQUF0QjtBQUNoQywrQkFBZ0MsSUFBSSxRQUFKLElBQXNCLEVBQXRCO0FBQ2hDLDZCQUFnQyxJQUFJLFVBQUosSUFBc0IsRUFBdEI7QUFDaEMsaUNBQWdDLElBQUksVUFBSixJQUFzQixFQUF0QjtBQUNoQyx3Q0FBZ0MsSUFBSSxPQUFKLElBQXNCLEVBQXRCO0FBQ2hDLHNCQUFnQyxJQUFJLE1BQUosSUFBc0IsQ0FBdEI7QUFDaEMsbUJBQWdDLElBQUksSUFBSixJQUFzQixFQUF0QjtBQUNoQyxvQkFBZ0MsSUFBSSxLQUFKLElBQXNCLEVBQXRCO0FBQ2hDLCtCQUFnQyxJQUFJLGNBQUosSUFBc0IsRUFBdEI7QUFDaEMsaUJBQWdDLElBQUksT0FBSixJQUFzQixFQUF0QjtBQUNoQyxjQUFnQyxJQUFJLElBQUosSUFBc0IsRUFBdEI7T0FaOUIsQ0FEVTs7QUFnQmQsVUFBSSxRQUFRLHNCQUFHLFNBQUgsQ0FBYSxNQUFiLENBQVIsQ0FoQlU7O0FBa0JkLFdBQUssSUFBTCxrQkFBeUIsS0FBekIsRUFBa0MsRUFBbEMsRUFsQmM7QUFtQmQsYUFuQmM7Ozs7U0FYWjs7O2tCQWtDUyIsImZpbGUiOiJjb3Vyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgQ291cnNlIGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBnZXQob3B0LCBjYikge1xuICAgIGxldCBxdWVyeSA9IGAke29wdC55ZWFyfSwke29wdC5xdWFydGVyfSwke29wdC5jdXJyaWN1bHVtfSwke29wdC5jb3Vyc2V9YDtcbiAgICB0aGlzLl9nZXQoYGNvdXJzZS8ke3F1ZXJ5fS5qc29uYCwgY2IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHNlYXJjaChvcHQsIGNiKSB7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIGNoYW5nZWRfc2luY2VfZGF0ZTogICAgICAgICAgICAgb3B0LmNoYW5nZURhdGUgICAgIHx8ICcnLFxuICAgICAgY291cnNlX251bWJlcjogICAgICAgICAgICAgICAgICBvcHQuY291cnNlICAgICAgICAgfHwgJycsXG4gICAgICBjb3Vyc2VfdGl0bGVfY29udGFpbnM6ICAgICAgICAgIG9wdC5jb250YWlucyAgICAgICB8fCAnJyxcbiAgICAgIGNvdXJzZV90aXRsZV9zdGFydHM6ICAgICAgICAgICAgb3B0LnN0YXJ0c1dpdGggICAgIHx8ICcnLFxuICAgICAgY3VycmljdWx1bV9hYmJyZXZpYXRpb246ICAgICAgICBvcHQuY3VycmljdWx1bSAgICAgfHwgJycsXG4gICAgICBleGx1ZGVfY291cmVzX3dpdGhvdXRfc2VjdGlvbnM6IG9wdC5leGNsdWRlICAgICAgICB8fCAnJyxcbiAgICAgIGZ1dHVyZV90ZXJtczogICAgICAgICAgICAgICAgICAgb3B0LmZ1dHVyZSAgICAgICAgIHx8IDAsXG4gICAgICBwYWdlX3NpemU6ICAgICAgICAgICAgICAgICAgICAgIG9wdC5zaXplICAgICAgICAgICB8fCAnJyxcbiAgICAgIHBhZ2Vfc3RhcnQ6ICAgICAgICAgICAgICAgICAgICAgb3B0LnN0YXJ0ICAgICAgICAgIHx8ICcnLFxuICAgICAgdHJhbnNjcmlwdGFibGVfY291cnNlOiAgICAgICAgICBvcHQudHJhbnNjcmlwdGFibGUgfHwgJycsXG4gICAgICBxdWFydGVyOiAgICAgICAgICAgICAgICAgICAgICAgIG9wdC5xdWFydGVyICAgICAgICB8fCAnJyxcbiAgICAgIHllYXI6ICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0LnllYXIgICAgICAgICAgIHx8ICcnXG4gICAgfTtcblxuICAgIGxldCBxdWVyeSA9IHFzLnN0cmluZ2lmeShwYXJhbXMpO1xuXG4gICAgdGhpcy5fZ2V0KGBjb3Vyc2UuanNvbj8ke3F1ZXJ5fWAsIGNiKTtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291cnNlO1xuIl19