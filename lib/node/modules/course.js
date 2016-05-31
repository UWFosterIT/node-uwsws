'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _service = require('./service');

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Course = function (_Service) {
  (0, _inherits3.default)(Course, _Service);

  function Course(config) {
    (0, _classCallCheck3.default)(this, Course);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Course).call(this, config));
  }

  (0, _createClass3.default)(Course, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvdXJzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztJQUVNLE07OztBQUNKLGtCQUFZLE1BQVosRUFBb0I7QUFBQTtBQUFBLDJHQUNaLE1BRFk7QUFFbkI7Ozs7d0JBRUcsRyxFQUFLO0FBQ1AsVUFBSSxRQUFXLElBQUksSUFBZixTQUF1QixJQUFJLE9BQTNCLFNBQXNDLElBQUksVUFBMUMsU0FBd0QsSUFBSSxNQUFoRTs7QUFFQSxhQUFPLEtBQUssSUFBTCxhQUFvQixLQUFwQixXQUFQO0FBQ0Q7OzsyQkFFTSxHLEVBQUs7QUFDVixVQUFJLFNBQVM7QUFDWCw0QkFBa0MsSUFBSSxVQUFKLElBQWtCLEVBRHpDO0FBRVgsdUJBQWtDLElBQUksTUFBSixJQUFjLEVBRnJDO0FBR1gsK0JBQWtDLElBQUksUUFBSixJQUFnQixFQUh2QztBQUlYLDZCQUFrQyxJQUFJLFVBQUosSUFBa0IsRUFKekM7QUFLWCxpQ0FBa0MsSUFBSSxVQUFKLElBQWtCLEVBTHpDO0FBTVgsMENBQWtDLElBQUksT0FBSixJQUFlLEVBTnRDO0FBT1gsc0JBQWtDLElBQUksTUFBSixJQUFjLENBUHJDO0FBUVgsbUJBQWtDLElBQUksSUFBSixJQUFZLEVBUm5DO0FBU1gsb0JBQWtDLElBQUksS0FBSixJQUFhLEVBVHBDO0FBVVgsK0JBQWtDLElBQUksY0FBSixJQUFzQixFQVY3QztBQVdYLGlCQUFrQyxJQUFJLE9BQUosSUFBZSxFQVh0QztBQVlYLGNBQWtDLElBQUksSUFBSixJQUFZO0FBWm5DLE9BQWI7O0FBZUEsVUFBSSxRQUFRLHNCQUFHLFNBQUgsQ0FBYSxNQUFiLENBQVo7O0FBRUEsYUFBTyxLQUFLLElBQUwsa0JBQXlCLEtBQXpCLENBQVA7QUFDRDs7Ozs7a0JBR1ksTSIsImZpbGUiOiJjb3Vyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgQ291cnNlIGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBnZXQob3B0KSB7XG4gICAgbGV0IHF1ZXJ5ID0gYCR7b3B0LnllYXJ9LCR7b3B0LnF1YXJ0ZXJ9LCR7b3B0LmN1cnJpY3VsdW19LCR7b3B0LmNvdXJzZX1gO1xuXG4gICAgcmV0dXJuIHRoaXMuX2dldChgY291cnNlLyR7cXVlcnl9Lmpzb25gKTtcbiAgfVxuXG4gIHNlYXJjaChvcHQpIHtcbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgY2hhbmdlZF9zaW5jZV9kYXRlOiAgICAgICAgICAgICAgIG9wdC5jaGFuZ2VEYXRlIHx8ICcnLFxuICAgICAgY291cnNlX251bWJlcjogICAgICAgICAgICAgICAgICAgIG9wdC5jb3Vyc2UgfHwgJycsXG4gICAgICBjb3Vyc2VfdGl0bGVfY29udGFpbnM6ICAgICAgICAgICAgb3B0LmNvbnRhaW5zIHx8ICcnLFxuICAgICAgY291cnNlX3RpdGxlX3N0YXJ0czogICAgICAgICAgICAgIG9wdC5zdGFydHNXaXRoIHx8ICcnLFxuICAgICAgY3VycmljdWx1bV9hYmJyZXZpYXRpb246ICAgICAgICAgIG9wdC5jdXJyaWN1bHVtIHx8ICcnLFxuICAgICAgZXhjbHVkZV9jb3Vyc2VzX3dpdGhvdXRfc2VjdGlvbnM6IG9wdC5leGNsdWRlIHx8ICcnLFxuICAgICAgZnV0dXJlX3Rlcm1zOiAgICAgICAgICAgICAgICAgICAgIG9wdC5mdXR1cmUgfHwgMCxcbiAgICAgIHBhZ2Vfc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICBvcHQuc2l6ZSB8fCAnJyxcbiAgICAgIHBhZ2Vfc3RhcnQ6ICAgICAgICAgICAgICAgICAgICAgICBvcHQuc3RhcnQgfHwgJycsXG4gICAgICB0cmFuc2NyaXB0YWJsZV9jb3Vyc2U6ICAgICAgICAgICAgb3B0LnRyYW5zY3JpcHRhYmxlIHx8ICcnLFxuICAgICAgcXVhcnRlcjogICAgICAgICAgICAgICAgICAgICAgICAgIG9wdC5xdWFydGVyIHx8ICcnLFxuICAgICAgeWVhcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdC55ZWFyIHx8ICcnXG4gICAgfTtcblxuICAgIGxldCBxdWVyeSA9IHFzLnN0cmluZ2lmeShwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2dldChgY291cnNlLmpzb24/JHtxdWVyeX1gKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2U7XG4iXX0=