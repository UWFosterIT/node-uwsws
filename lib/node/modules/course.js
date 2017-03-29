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
    return (0, _possibleConstructorReturn3.default)(this, (Course.__proto__ || (0, _getPrototypeOf2.default)(Course)).call(this, config));
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
        quarter: opt.quarter || '',
        transcriptable_course: opt.transcriptable || '',
        year: opt.year || ''
      };

      var query = _queryString2.default.stringify(params);

      return this._get('course.json?' + query);
    }
  }]);
  return Course;
}(_service2.default);

exports.default = Course;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvdXJzZS5qcyJdLCJuYW1lcyI6WyJDb3Vyc2UiLCJjb25maWciLCJvcHQiLCJxdWVyeSIsInllYXIiLCJxdWFydGVyIiwiY3VycmljdWx1bSIsImNvdXJzZSIsIl9nZXQiLCJwYXJhbXMiLCJjaGFuZ2VkX3NpbmNlX2RhdGUiLCJjaGFuZ2VEYXRlIiwiY291cnNlX251bWJlciIsImNvdXJzZV90aXRsZV9jb250YWlucyIsImNvbnRhaW5zIiwiY291cnNlX3RpdGxlX3N0YXJ0cyIsInN0YXJ0c1dpdGgiLCJjdXJyaWN1bHVtX2FiYnJldmlhdGlvbiIsImV4Y2x1ZGVfY291cnNlc193aXRob3V0X3NlY3Rpb25zIiwiZXhjbHVkZSIsImZ1dHVyZV90ZXJtcyIsImZ1dHVyZSIsInBhZ2Vfc2l6ZSIsInNpemUiLCJwYWdlX3N0YXJ0Iiwic3RhcnQiLCJ0cmFuc2NyaXB0YWJsZV9jb3Vyc2UiLCJ0cmFuc2NyaXB0YWJsZSIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFFTUEsTTs7O0FBQ0osa0JBQVlDLE1BQVosRUFBb0I7QUFBQTtBQUFBLGlJQUNaQSxNQURZO0FBRW5COzs7O3dCQUVHQyxHLEVBQUs7QUFDUCxVQUFJQyxRQUFXRCxJQUFJRSxJQUFmLFNBQXVCRixJQUFJRyxPQUEzQixTQUFzQ0gsSUFBSUksVUFBMUMsU0FBd0RKLElBQUlLLE1BQWhFOztBQUVBLGFBQU8sS0FBS0MsSUFBTCxhQUFvQkwsS0FBcEIsV0FBUDtBQUNEOzs7MkJBRU1ELEcsRUFBSztBQUNWLFVBQUlPLFNBQVM7QUFDWEMsNEJBQWtDUixJQUFJUyxVQUFKLElBQWtCLEVBRHpDO0FBRVhDLHVCQUFrQ1YsSUFBSUssTUFBSixJQUFjLEVBRnJDO0FBR1hNLCtCQUFrQ1gsSUFBSVksUUFBSixJQUFnQixFQUh2QztBQUlYQyw2QkFBa0NiLElBQUljLFVBQUosSUFBa0IsRUFKekM7QUFLWEMsaUNBQWtDZixJQUFJSSxVQUFKLElBQWtCLEVBTHpDO0FBTVhZLDBDQUFrQ2hCLElBQUlpQixPQUFKLElBQWUsRUFOdEM7QUFPWEMsc0JBQWtDbEIsSUFBSW1CLE1BQUosSUFBYyxDQVByQztBQVFYQyxtQkFBa0NwQixJQUFJcUIsSUFBSixJQUFZLEVBUm5DO0FBU1hDLG9CQUFrQ3RCLElBQUl1QixLQUFKLElBQWEsRUFUcEM7QUFVWHBCLGlCQUFrQ0gsSUFBSUcsT0FBSixJQUFlLEVBVnRDO0FBV1hxQiwrQkFBa0N4QixJQUFJeUIsY0FBSixJQUFzQixFQVg3QztBQVlYdkIsY0FBa0NGLElBQUlFLElBQUosSUFBWTtBQVpuQyxPQUFiOztBQWVBLFVBQUlELFFBQVEsc0JBQUd5QixTQUFILENBQWFuQixNQUFiLENBQVo7O0FBRUEsYUFBTyxLQUFLRCxJQUFMLGtCQUF5QkwsS0FBekIsQ0FBUDtBQUNEOzs7OztrQkFHWUgsTSIsImZpbGUiOiJjb3Vyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgQ291cnNlIGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBnZXQob3B0KSB7XG4gICAgbGV0IHF1ZXJ5ID0gYCR7b3B0LnllYXJ9LCR7b3B0LnF1YXJ0ZXJ9LCR7b3B0LmN1cnJpY3VsdW19LCR7b3B0LmNvdXJzZX1gO1xuXG4gICAgcmV0dXJuIHRoaXMuX2dldChgY291cnNlLyR7cXVlcnl9Lmpzb25gKTtcbiAgfVxuXG4gIHNlYXJjaChvcHQpIHtcbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgY2hhbmdlZF9zaW5jZV9kYXRlOiAgICAgICAgICAgICAgIG9wdC5jaGFuZ2VEYXRlIHx8ICcnLFxuICAgICAgY291cnNlX251bWJlcjogICAgICAgICAgICAgICAgICAgIG9wdC5jb3Vyc2UgfHwgJycsXG4gICAgICBjb3Vyc2VfdGl0bGVfY29udGFpbnM6ICAgICAgICAgICAgb3B0LmNvbnRhaW5zIHx8ICcnLFxuICAgICAgY291cnNlX3RpdGxlX3N0YXJ0czogICAgICAgICAgICAgIG9wdC5zdGFydHNXaXRoIHx8ICcnLFxuICAgICAgY3VycmljdWx1bV9hYmJyZXZpYXRpb246ICAgICAgICAgIG9wdC5jdXJyaWN1bHVtIHx8ICcnLFxuICAgICAgZXhjbHVkZV9jb3Vyc2VzX3dpdGhvdXRfc2VjdGlvbnM6IG9wdC5leGNsdWRlIHx8ICcnLFxuICAgICAgZnV0dXJlX3Rlcm1zOiAgICAgICAgICAgICAgICAgICAgIG9wdC5mdXR1cmUgfHwgMCxcbiAgICAgIHBhZ2Vfc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICBvcHQuc2l6ZSB8fCAnJyxcbiAgICAgIHBhZ2Vfc3RhcnQ6ICAgICAgICAgICAgICAgICAgICAgICBvcHQuc3RhcnQgfHwgJycsXG4gICAgICBxdWFydGVyOiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0LnF1YXJ0ZXIgfHwgJycsXG4gICAgICB0cmFuc2NyaXB0YWJsZV9jb3Vyc2U6ICAgICAgICAgICAgb3B0LnRyYW5zY3JpcHRhYmxlIHx8ICcnLFxuICAgICAgeWVhcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdC55ZWFyIHx8ICcnXG4gICAgfTtcblxuICAgIGxldCBxdWVyeSA9IHFzLnN0cmluZ2lmeShwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2dldChgY291cnNlLmpzb24/JHtxdWVyeX1gKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2U7XG4iXX0=