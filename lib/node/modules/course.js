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
        course_number: opt.course || '',
        course_title_contains: opt.contains || '',
        course_title_starts: opt.startsWith || '',
        curriculum_abbreviation: opt.curriculum || '',
        exlude_coures_without_sections: opt.exclude || '',
        future_terms: opt.future || 0,
        page_size: opt.size || '',
        page_start: opt.start || '',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvdXJzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHTTs7O0FBQ0osV0FESSxNQUNKLENBQVksTUFBWixFQUFvQjswQkFEaEIsUUFDZ0I7O2tFQURoQixtQkFFSSxTQURZO0dBQXBCOztlQURJOzt3QkFLQSxLQUFLLElBQUk7QUFDWCxVQUFJLFFBQVcsSUFBSSxJQUFKLFNBQVksSUFBSSxPQUFKLFNBQWUsSUFBSSxVQUFKLFNBQWtCLElBQUksTUFBSixDQURqRDtBQUVYLFdBQUssSUFBTCxhQUFvQixlQUFwQixFQUFrQyxFQUFsQyxFQUZXO0FBR1gsYUFIVzs7OzsyQkFNTixLQUFLLElBQUk7QUFDZCxVQUFJLFNBQVM7QUFDWCx1QkFBZ0MsSUFBSSxNQUFKLElBQWtCLEVBQWxCO0FBQ2hDLCtCQUFnQyxJQUFJLFFBQUosSUFBa0IsRUFBbEI7QUFDaEMsNkJBQWdDLElBQUksVUFBSixJQUFrQixFQUFsQjtBQUNoQyxpQ0FBZ0MsSUFBSSxVQUFKLElBQWtCLEVBQWxCO0FBQ2hDLHdDQUFnQyxJQUFJLE9BQUosSUFBa0IsRUFBbEI7QUFDaEMsc0JBQWdDLElBQUksTUFBSixJQUFrQixDQUFsQjtBQUNoQyxtQkFBZ0MsSUFBSSxJQUFKLElBQWtCLEVBQWxCO0FBQ2hDLG9CQUFnQyxJQUFJLEtBQUosSUFBa0IsRUFBbEI7QUFDaEMsaUJBQWdDLElBQUksT0FBSixJQUFrQixFQUFsQjtBQUNoQyxjQUFnQyxJQUFJLElBQUosSUFBa0IsRUFBbEI7T0FWOUIsQ0FEVTs7QUFjZCxVQUFJLFFBQVEsc0JBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBUixDQWRVOztBQWdCZCxXQUFLLElBQUwsa0JBQXlCLEtBQXpCLEVBQWtDLEVBQWxDLEVBaEJjO0FBaUJkLGFBakJjOzs7O1NBWFo7OztrQkFnQ1MiLCJmaWxlIjoiY291cnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzICAgICAgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIENvdXJzZSBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgZ2V0KG9wdCwgY2IpIHtcbiAgICBsZXQgcXVlcnkgPSBgJHtvcHQueWVhcn0sJHtvcHQucXVhcnRlcn0sJHtvcHQuY3VycmljdWx1bX0sJHtvcHQuY291cnNlfWA7XG4gICAgdGhpcy5fZ2V0KGBjb3Vyc2UvJHtxdWVyeX0uanNvbmAsIGNiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBzZWFyY2gob3B0LCBjYikge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBjb3Vyc2VfbnVtYmVyOiAgICAgICAgICAgICAgICAgIG9wdC5jb3Vyc2UgICAgIHx8ICcnLFxuICAgICAgY291cnNlX3RpdGxlX2NvbnRhaW5zOiAgICAgICAgICBvcHQuY29udGFpbnMgICB8fCAnJyxcbiAgICAgIGNvdXJzZV90aXRsZV9zdGFydHM6ICAgICAgICAgICAgb3B0LnN0YXJ0c1dpdGggfHwgJycsXG4gICAgICBjdXJyaWN1bHVtX2FiYnJldmlhdGlvbjogICAgICAgIG9wdC5jdXJyaWN1bHVtIHx8ICcnLFxuICAgICAgZXhsdWRlX2NvdXJlc193aXRob3V0X3NlY3Rpb25zOiBvcHQuZXhjbHVkZSAgICB8fCAnJyxcbiAgICAgIGZ1dHVyZV90ZXJtczogICAgICAgICAgICAgICAgICAgb3B0LmZ1dHVyZSAgICAgfHwgMCxcbiAgICAgIHBhZ2Vfc2l6ZTogICAgICAgICAgICAgICAgICAgICAgb3B0LnNpemUgICAgICAgfHwgJycsXG4gICAgICBwYWdlX3N0YXJ0OiAgICAgICAgICAgICAgICAgICAgIG9wdC5zdGFydCAgICAgIHx8ICcnLFxuICAgICAgcXVhcnRlcjogICAgICAgICAgICAgICAgICAgICAgICBvcHQucXVhcnRlciAgICB8fCAnJyxcbiAgICAgIHllYXI6ICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0LnllYXIgICAgICAgfHwgJydcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICB0aGlzLl9nZXQoYGNvdXJzZS5qc29uPyR7cXVlcnl9YCwgY2IpO1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2U7XG4iXX0=