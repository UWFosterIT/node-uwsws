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
    value: function get(opt) {
      var query = opt.year + ',' + opt.quarter + ',' + opt.curriculum + ',' + opt.course;

      return this._get('course/' + query + '.json').then(function (result) {
        result.course = result.data;
        delete result.data;
        return result;
      });
    }
  }, {
    key: 'search',
    value: function search(opt) {
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

      return this._get('course.json?' + query).then(function (result) {
        result.course = result.data;
        delete result.data;
        return result;
      });
    }
  }]);

  return Course;
}(_service2.default);

exports.default = Course;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvdXJzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNOzs7QUFDSixXQURJLE1BQ0osQ0FBWSxNQUFaLEVBQW9COzBCQURoQixRQUNnQjs7a0VBRGhCLG1CQUVJLFNBRFk7R0FBcEI7O2VBREk7O3dCQUtBLEtBQUs7QUFDUCxVQUFJLFFBQVcsSUFBSSxJQUFKLFNBQVksSUFBSSxPQUFKLFNBQWUsSUFBSSxVQUFKLFNBQWtCLElBQUksTUFBSixDQURyRDs7QUFHUCxhQUFPLEtBQUssSUFBTCxhQUFvQixlQUFwQixFQUNKLElBREksQ0FDQyxVQUFDLE1BQUQsRUFBWTtBQUNoQixlQUFPLE1BQVAsR0FBZ0IsT0FBTyxJQUFQLENBREE7QUFFaEIsZUFBTyxPQUFPLElBQVAsQ0FGUztBQUdoQixlQUFPLE1BQVAsQ0FIZ0I7T0FBWixDQURSLENBSE87Ozs7MkJBV0YsS0FBSztBQUNWLFVBQUksU0FBUztBQUNYLDRCQUFnQyxJQUFJLFVBQUosSUFBa0IsRUFBbEI7QUFDaEMsdUJBQWdDLElBQUksTUFBSixJQUFjLEVBQWQ7QUFDaEMsK0JBQWdDLElBQUksUUFBSixJQUFnQixFQUFoQjtBQUNoQyw2QkFBZ0MsSUFBSSxVQUFKLElBQWtCLEVBQWxCO0FBQ2hDLGlDQUFnQyxJQUFJLFVBQUosSUFBa0IsRUFBbEI7QUFDaEMsd0NBQWdDLElBQUksT0FBSixJQUFlLEVBQWY7QUFDaEMsc0JBQWdDLElBQUksTUFBSixJQUFjLENBQWQ7QUFDaEMsbUJBQWdDLElBQUksSUFBSixJQUFZLEVBQVo7QUFDaEMsb0JBQWdDLElBQUksS0FBSixJQUFhLEVBQWI7QUFDaEMsK0JBQWdDLElBQUksY0FBSixJQUFzQixFQUF0QjtBQUNoQyxpQkFBZ0MsSUFBSSxPQUFKLElBQWUsRUFBZjtBQUNoQyxjQUFnQyxJQUFJLElBQUosSUFBWSxFQUFaO09BWjlCLENBRE07O0FBZ0JWLFVBQUksUUFBUSxzQkFBRyxTQUFILENBQWEsTUFBYixDQUFSLENBaEJNOztBQWtCVixhQUFPLEtBQUssSUFBTCxrQkFBeUIsS0FBekIsRUFDSixJQURJLENBQ0MsVUFBQyxNQUFELEVBQVk7QUFDaEIsZUFBTyxNQUFQLEdBQWdCLE9BQU8sSUFBUCxDQURBO0FBRWhCLGVBQU8sT0FBTyxJQUFQLENBRlM7QUFHaEIsZUFBTyxNQUFQLENBSGdCO09BQVosQ0FEUixDQWxCVTs7OztTQWhCUjs7O2tCQTJDUyIsImZpbGUiOiJjb3Vyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgQ291cnNlIGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBnZXQob3B0KSB7XG4gICAgbGV0IHF1ZXJ5ID0gYCR7b3B0LnllYXJ9LCR7b3B0LnF1YXJ0ZXJ9LCR7b3B0LmN1cnJpY3VsdW19LCR7b3B0LmNvdXJzZX1gO1xuXG4gICAgcmV0dXJuIHRoaXMuX2dldChgY291cnNlLyR7cXVlcnl9Lmpzb25gKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXN1bHQuY291cnNlID0gcmVzdWx0LmRhdGE7XG4gICAgICAgIGRlbGV0ZSByZXN1bHQuZGF0YTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoKG9wdCkge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBjaGFuZ2VkX3NpbmNlX2RhdGU6ICAgICAgICAgICAgIG9wdC5jaGFuZ2VEYXRlIHx8ICcnLFxuICAgICAgY291cnNlX251bWJlcjogICAgICAgICAgICAgICAgICBvcHQuY291cnNlIHx8ICcnLFxuICAgICAgY291cnNlX3RpdGxlX2NvbnRhaW5zOiAgICAgICAgICBvcHQuY29udGFpbnMgfHwgJycsXG4gICAgICBjb3Vyc2VfdGl0bGVfc3RhcnRzOiAgICAgICAgICAgIG9wdC5zdGFydHNXaXRoIHx8ICcnLFxuICAgICAgY3VycmljdWx1bV9hYmJyZXZpYXRpb246ICAgICAgICBvcHQuY3VycmljdWx1bSB8fCAnJyxcbiAgICAgIGV4bHVkZV9jb3VyZXNfd2l0aG91dF9zZWN0aW9uczogb3B0LmV4Y2x1ZGUgfHwgJycsXG4gICAgICBmdXR1cmVfdGVybXM6ICAgICAgICAgICAgICAgICAgIG9wdC5mdXR1cmUgfHwgMCxcbiAgICAgIHBhZ2Vfc2l6ZTogICAgICAgICAgICAgICAgICAgICAgb3B0LnNpemUgfHwgJycsXG4gICAgICBwYWdlX3N0YXJ0OiAgICAgICAgICAgICAgICAgICAgIG9wdC5zdGFydCB8fCAnJyxcbiAgICAgIHRyYW5zY3JpcHRhYmxlX2NvdXJzZTogICAgICAgICAgb3B0LnRyYW5zY3JpcHRhYmxlIHx8ICcnLFxuICAgICAgcXVhcnRlcjogICAgICAgICAgICAgICAgICAgICAgICBvcHQucXVhcnRlciB8fCAnJyxcbiAgICAgIHllYXI6ICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0LnllYXIgfHwgJydcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBjb3Vyc2UuanNvbj8ke3F1ZXJ5fWApXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc3VsdC5jb3Vyc2UgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgZGVsZXRlIHJlc3VsdC5kYXRhO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291cnNlO1xuIl19