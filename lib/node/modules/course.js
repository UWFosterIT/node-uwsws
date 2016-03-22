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

      return this._get('course/' + query + '.json');
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
        exclude_courses_without_sections: opt.exclude || '',
        future_terms: opt.future || 0,
        page_size: opt.size || '',
        page_start: opt.start || '',
        transcriptable_course: opt.transcriptable || '',
        quarter: opt.quarter || '',
        year: opt.year || ''
      };

      var query = _queryString2.default.stringify(params);

      return this._get('course.json?' + query);
    }
  }]);

  return Course;
}(_service2.default);

exports.default = Course;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvdXJzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNOzs7QUFDSixXQURJLE1BQ0osQ0FBWSxNQUFaLEVBQW9COzBCQURoQixRQUNnQjs7a0VBRGhCLG1CQUVJLFNBRFk7R0FBcEI7O2VBREk7O3dCQUtBLEtBQUs7QUFDUCxVQUFJLFFBQVcsSUFBSSxJQUFKLFNBQVksSUFBSSxPQUFKLFNBQWUsSUFBSSxVQUFKLFNBQWtCLElBQUksTUFBSixDQURyRDs7QUFHUCxhQUFPLEtBQUssSUFBTCxhQUFvQixlQUFwQixDQUFQLENBSE87Ozs7MkJBTUYsS0FBSztBQUNWLFVBQUksU0FBUztBQUNYLDRCQUFrQyxJQUFJLFVBQUosSUFBa0IsRUFBbEI7QUFDbEMsdUJBQWtDLElBQUksTUFBSixJQUFjLEVBQWQ7QUFDbEMsK0JBQWtDLElBQUksUUFBSixJQUFnQixFQUFoQjtBQUNsQyw2QkFBa0MsSUFBSSxVQUFKLElBQWtCLEVBQWxCO0FBQ2xDLGlDQUFrQyxJQUFJLFVBQUosSUFBa0IsRUFBbEI7QUFDbEMsMENBQWtDLElBQUksT0FBSixJQUFlLEVBQWY7QUFDbEMsc0JBQWtDLElBQUksTUFBSixJQUFjLENBQWQ7QUFDbEMsbUJBQWtDLElBQUksSUFBSixJQUFZLEVBQVo7QUFDbEMsb0JBQWtDLElBQUksS0FBSixJQUFhLEVBQWI7QUFDbEMsK0JBQWtDLElBQUksY0FBSixJQUFzQixFQUF0QjtBQUNsQyxpQkFBa0MsSUFBSSxPQUFKLElBQWUsRUFBZjtBQUNsQyxjQUFrQyxJQUFJLElBQUosSUFBWSxFQUFaO09BWmhDLENBRE07O0FBZ0JWLFVBQUksUUFBUSxzQkFBRyxTQUFILENBQWEsTUFBYixDQUFSLENBaEJNOztBQWtCVixhQUFPLEtBQUssSUFBTCxrQkFBeUIsS0FBekIsQ0FBUCxDQWxCVTs7OztTQVhSOzs7a0JBaUNTIiwiZmlsZSI6ImNvdXJzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyAgICAgIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBDb3Vyc2UgZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIGdldChvcHQpIHtcbiAgICBsZXQgcXVlcnkgPSBgJHtvcHQueWVhcn0sJHtvcHQucXVhcnRlcn0sJHtvcHQuY3VycmljdWx1bX0sJHtvcHQuY291cnNlfWA7XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBjb3Vyc2UvJHtxdWVyeX0uanNvbmApO1xuICB9XG5cbiAgc2VhcmNoKG9wdCkge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBjaGFuZ2VkX3NpbmNlX2RhdGU6ICAgICAgICAgICAgICAgb3B0LmNoYW5nZURhdGUgfHwgJycsXG4gICAgICBjb3Vyc2VfbnVtYmVyOiAgICAgICAgICAgICAgICAgICAgb3B0LmNvdXJzZSB8fCAnJyxcbiAgICAgIGNvdXJzZV90aXRsZV9jb250YWluczogICAgICAgICAgICBvcHQuY29udGFpbnMgfHwgJycsXG4gICAgICBjb3Vyc2VfdGl0bGVfc3RhcnRzOiAgICAgICAgICAgICAgb3B0LnN0YXJ0c1dpdGggfHwgJycsXG4gICAgICBjdXJyaWN1bHVtX2FiYnJldmlhdGlvbjogICAgICAgICAgb3B0LmN1cnJpY3VsdW0gfHwgJycsXG4gICAgICBleGNsdWRlX2NvdXJzZXNfd2l0aG91dF9zZWN0aW9uczogb3B0LmV4Y2x1ZGUgfHwgJycsXG4gICAgICBmdXR1cmVfdGVybXM6ICAgICAgICAgICAgICAgICAgICAgb3B0LmZ1dHVyZSB8fCAwLFxuICAgICAgcGFnZV9zaXplOiAgICAgICAgICAgICAgICAgICAgICAgIG9wdC5zaXplIHx8ICcnLFxuICAgICAgcGFnZV9zdGFydDogICAgICAgICAgICAgICAgICAgICAgIG9wdC5zdGFydCB8fCAnJyxcbiAgICAgIHRyYW5zY3JpcHRhYmxlX2NvdXJzZTogICAgICAgICAgICBvcHQudHJhbnNjcmlwdGFibGUgfHwgJycsXG4gICAgICBxdWFydGVyOiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0LnF1YXJ0ZXIgfHwgJycsXG4gICAgICB5ZWFyOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0LnllYXIgfHwgJydcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBjb3Vyc2UuanNvbj8ke3F1ZXJ5fWApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdXJzZTtcbiJdfQ==