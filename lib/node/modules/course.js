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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvdXJzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHTTs7O0FBQ0osV0FESSxNQUNKLENBQVksTUFBWixFQUFvQjswQkFEaEIsUUFDZ0I7O2tFQURoQixtQkFFSSxTQURZO0dBQXBCOztlQURJOzt3QkFLQSxLQUFLLElBQUk7QUFDWCxVQUFJLFFBQVcsSUFBSSxJQUFKLFNBQVksSUFBSSxPQUFKLFNBQWUsSUFBSSxVQUFKLFNBQWtCLElBQUksTUFBSixDQURqRDtBQUVYLFdBQUssSUFBTCxhQUFvQixlQUFwQixFQUFrQyxFQUFsQyxFQUZXO0FBR1gsYUFIVzs7OzsyQkFNTixLQUFLLElBQUk7QUFDZCxVQUFJLFNBQVM7QUFDWCw0QkFBZ0MsSUFBSSxVQUFKLElBQXNCLEVBQXRCO0FBQ2hDLHVCQUFnQyxJQUFJLE1BQUosSUFBc0IsRUFBdEI7QUFDaEMsK0JBQWdDLElBQUksUUFBSixJQUFzQixFQUF0QjtBQUNoQyw2QkFBZ0MsSUFBSSxVQUFKLElBQXNCLEVBQXRCO0FBQ2hDLGlDQUFnQyxJQUFJLFVBQUosSUFBc0IsRUFBdEI7QUFDaEMsd0NBQWdDLElBQUksT0FBSixJQUFzQixFQUF0QjtBQUNoQyxzQkFBZ0MsSUFBSSxNQUFKLElBQXNCLENBQXRCO0FBQ2hDLG1CQUFnQyxJQUFJLElBQUosSUFBc0IsRUFBdEI7QUFDaEMsb0JBQWdDLElBQUksS0FBSixJQUFzQixFQUF0QjtBQUNoQywrQkFBZ0MsSUFBSSxjQUFKLElBQXNCLEVBQXRCO0FBQ2hDLGlCQUFnQyxJQUFJLE9BQUosSUFBc0IsRUFBdEI7QUFDaEMsY0FBZ0MsSUFBSSxJQUFKLElBQXNCLEVBQXRCO09BWjlCLENBRFU7O0FBZ0JkLFVBQUksUUFBUSxzQkFBRyxTQUFILENBQWEsTUFBYixDQUFSLENBaEJVOztBQWtCZCxXQUFLLElBQUwsa0JBQXlCLEtBQXpCLEVBQWtDLEVBQWxDLEVBbEJjO0FBbUJkLGFBbkJjOzs7O1NBWFo7OztrQkFrQ1MiLCJmaWxlIjoiY291cnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzICAgICAgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIENvdXJzZSBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgZ2V0KG9wdCwgY2IpIHtcbiAgICBsZXQgcXVlcnkgPSBgJHtvcHQueWVhcn0sJHtvcHQucXVhcnRlcn0sJHtvcHQuY3VycmljdWx1bX0sJHtvcHQuY291cnNlfWA7XG4gICAgdGhpcy5fZ2V0KGBjb3Vyc2UvJHtxdWVyeX0uanNvbmAsIGNiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBzZWFyY2gob3B0LCBjYikge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBjaGFuZ2VkX3NpbmNlX2RhdGU6ICAgICAgICAgICAgIG9wdC5jaGFuZ2VEYXRlICAgICB8fCAnJyxcbiAgICAgIGNvdXJzZV9udW1iZXI6ICAgICAgICAgICAgICAgICAgb3B0LmNvdXJzZSAgICAgICAgIHx8ICcnLFxuICAgICAgY291cnNlX3RpdGxlX2NvbnRhaW5zOiAgICAgICAgICBvcHQuY29udGFpbnMgICAgICAgfHwgJycsXG4gICAgICBjb3Vyc2VfdGl0bGVfc3RhcnRzOiAgICAgICAgICAgIG9wdC5zdGFydHNXaXRoICAgICB8fCAnJyxcbiAgICAgIGN1cnJpY3VsdW1fYWJicmV2aWF0aW9uOiAgICAgICAgb3B0LmN1cnJpY3VsdW0gICAgIHx8ICcnLFxuICAgICAgZXhsdWRlX2NvdXJlc193aXRob3V0X3NlY3Rpb25zOiBvcHQuZXhjbHVkZSAgICAgICAgfHwgJycsXG4gICAgICBmdXR1cmVfdGVybXM6ICAgICAgICAgICAgICAgICAgIG9wdC5mdXR1cmUgICAgICAgICB8fCAwLFxuICAgICAgcGFnZV9zaXplOiAgICAgICAgICAgICAgICAgICAgICBvcHQuc2l6ZSAgICAgICAgICAgfHwgJycsXG4gICAgICBwYWdlX3N0YXJ0OiAgICAgICAgICAgICAgICAgICAgIG9wdC5zdGFydCAgICAgICAgICB8fCAnJyxcbiAgICAgIHRyYW5zY3JpcHRhYmxlX2NvdXJzZTogICAgICAgICAgb3B0LnRyYW5zY3JpcHRhYmxlIHx8ICcnLFxuICAgICAgcXVhcnRlcjogICAgICAgICAgICAgICAgICAgICAgICBvcHQucXVhcnRlciAgICAgICAgfHwgJycsXG4gICAgICB5ZWFyOiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdC55ZWFyICAgICAgICAgICB8fCAnJ1xuICAgIH07XG5cbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkocGFyYW1zKTtcblxuICAgIHRoaXMuX2dldChgY291cnNlLmpzb24/JHtxdWVyeX1gLCBjYik7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdXJzZTtcbiJdfQ==