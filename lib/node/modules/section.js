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

var Section = function (_Service) {
  (0, _inherits3.default)(Section, _Service);

  function Section(config) {
    (0, _classCallCheck3.default)(this, Section);
    return (0, _possibleConstructorReturn3.default)(this, (Section.__proto__ || (0, _getPrototypeOf2.default)(Section)).call(this, config));
  }

  (0, _createClass3.default)(Section, [{
    key: 'get',
    value: function get(opt) {
      var course = opt.course + '/' + opt.section;
      var query = opt.year + ',' + opt.quarter + ',' + opt.curriculum + ',' + course;
      return this._get('course/' + query + '.json');
    }
  }, {
    key: 'search',
    value: function search(opt) {
      var params = {
        changed_since_date: opt.changeDate || '',
        course_number: opt.course || '',
        curriculum_abbreviation: opt.curriculum || '',
        delete_flag: opt.deleteFlag || '',
        facility_code: opt.facilityCode || '',
        future_terms: opt.future || 0,
        include_secondaries: opt.include || '',
        page_size: opt.size || '',
        page_start: opt.start || '',
        quarter: opt.quarter || '',
        reg_id: opt.regid || '',
        room_number: opt.roomNumber || '',
        search_by: opt.searchBy || '',
        sln: opt.sln || '',
        transcriptable_course: opt.transcriptable || '',
        year: opt.year || ''
      };

      var query = _queryString2.default.stringify(params);

      return this._get('section.json?' + query);
    }
  }]);
  return Section;
}(_service2.default);

exports.default = Section;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3NlY3Rpb24uanMiXSwibmFtZXMiOlsiU2VjdGlvbiIsImNvbmZpZyIsIm9wdCIsImNvdXJzZSIsInNlY3Rpb24iLCJxdWVyeSIsInllYXIiLCJxdWFydGVyIiwiY3VycmljdWx1bSIsIl9nZXQiLCJwYXJhbXMiLCJjaGFuZ2VkX3NpbmNlX2RhdGUiLCJjaGFuZ2VEYXRlIiwiY291cnNlX251bWJlciIsImN1cnJpY3VsdW1fYWJicmV2aWF0aW9uIiwiZGVsZXRlX2ZsYWciLCJkZWxldGVGbGFnIiwiZmFjaWxpdHlfY29kZSIsImZhY2lsaXR5Q29kZSIsImZ1dHVyZV90ZXJtcyIsImZ1dHVyZSIsImluY2x1ZGVfc2Vjb25kYXJpZXMiLCJpbmNsdWRlIiwicGFnZV9zaXplIiwic2l6ZSIsInBhZ2Vfc3RhcnQiLCJzdGFydCIsInJlZ19pZCIsInJlZ2lkIiwicm9vbV9udW1iZXIiLCJyb29tTnVtYmVyIiwic2VhcmNoX2J5Iiwic2VhcmNoQnkiLCJzbG4iLCJ0cmFuc2NyaXB0YWJsZV9jb3Vyc2UiLCJ0cmFuc2NyaXB0YWJsZSIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFFTUEsTzs7O0FBQ0osbUJBQVlDLE1BQVosRUFBb0I7QUFBQTtBQUFBLG1JQUNaQSxNQURZO0FBRW5COzs7O3dCQUVHQyxHLEVBQUs7QUFDUCxVQUFJQyxTQUFZRCxJQUFJQyxNQUFoQixTQUEwQkQsSUFBSUUsT0FBbEM7QUFDQSxVQUFJQyxRQUFXSCxJQUFJSSxJQUFmLFNBQXVCSixJQUFJSyxPQUEzQixTQUFzQ0wsSUFBSU0sVUFBMUMsU0FBd0RMLE1BQTVEO0FBQ0EsYUFBTyxLQUFLTSxJQUFMLGFBQW9CSixLQUFwQixXQUFQO0FBQ0Q7OzsyQkFFTUgsRyxFQUFLO0FBQ1YsVUFBSVEsU0FBUztBQUNYQyw0QkFBeUJULElBQUlVLFVBQUosSUFBa0IsRUFEaEM7QUFFWEMsdUJBQXlCWCxJQUFJQyxNQUFKLElBQWMsRUFGNUI7QUFHWFcsaUNBQXlCWixJQUFJTSxVQUFKLElBQWtCLEVBSGhDO0FBSVhPLHFCQUF5QmIsSUFBSWMsVUFBSixJQUFrQixFQUpoQztBQUtYQyx1QkFBeUJmLElBQUlnQixZQUFKLElBQW9CLEVBTGxDO0FBTVhDLHNCQUF5QmpCLElBQUlrQixNQUFKLElBQWMsQ0FONUI7QUFPWEMsNkJBQXlCbkIsSUFBSW9CLE9BQUosSUFBZSxFQVA3QjtBQVFYQyxtQkFBeUJyQixJQUFJc0IsSUFBSixJQUFZLEVBUjFCO0FBU1hDLG9CQUF5QnZCLElBQUl3QixLQUFKLElBQWEsRUFUM0I7QUFVWG5CLGlCQUF5QkwsSUFBSUssT0FBSixJQUFlLEVBVjdCO0FBV1hvQixnQkFBeUJ6QixJQUFJMEIsS0FBSixJQUFhLEVBWDNCO0FBWVhDLHFCQUF5QjNCLElBQUk0QixVQUFKLElBQWtCLEVBWmhDO0FBYVhDLG1CQUF5QjdCLElBQUk4QixRQUFKLElBQWdCLEVBYjlCO0FBY1hDLGFBQXlCL0IsSUFBSStCLEdBQUosSUFBVyxFQWR6QjtBQWVYQywrQkFBeUJoQyxJQUFJaUMsY0FBSixJQUFzQixFQWZwQztBQWdCWDdCLGNBQXlCSixJQUFJSSxJQUFKLElBQVk7QUFoQjFCLE9BQWI7O0FBbUJBLFVBQUlELFFBQVEsc0JBQUcrQixTQUFILENBQWExQixNQUFiLENBQVo7O0FBRUEsYUFBTyxLQUFLRCxJQUFMLG1CQUEwQkosS0FBMUIsQ0FBUDtBQUNEOzs7OztrQkFHWUwsTyIsImZpbGUiOiJzZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzICAgICAgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIFNlY3Rpb24gZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIGdldChvcHQpIHtcbiAgICBsZXQgY291cnNlID0gYCR7b3B0LmNvdXJzZX0vJHtvcHQuc2VjdGlvbn1gO1xuICAgIGxldCBxdWVyeSA9IGAke29wdC55ZWFyfSwke29wdC5xdWFydGVyfSwke29wdC5jdXJyaWN1bHVtfSwke2NvdXJzZX1gO1xuICAgIHJldHVybiB0aGlzLl9nZXQoYGNvdXJzZS8ke3F1ZXJ5fS5qc29uYCk7XG4gIH1cblxuICBzZWFyY2gob3B0KSB7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIGNoYW5nZWRfc2luY2VfZGF0ZTogICAgICBvcHQuY2hhbmdlRGF0ZSB8fCAnJyxcbiAgICAgIGNvdXJzZV9udW1iZXI6ICAgICAgICAgICBvcHQuY291cnNlIHx8ICcnLFxuICAgICAgY3VycmljdWx1bV9hYmJyZXZpYXRpb246IG9wdC5jdXJyaWN1bHVtIHx8ICcnLFxuICAgICAgZGVsZXRlX2ZsYWc6ICAgICAgICAgICAgIG9wdC5kZWxldGVGbGFnIHx8ICcnLFxuICAgICAgZmFjaWxpdHlfY29kZTogICAgICAgICAgIG9wdC5mYWNpbGl0eUNvZGUgfHwgJycsXG4gICAgICBmdXR1cmVfdGVybXM6ICAgICAgICAgICAgb3B0LmZ1dHVyZSB8fCAwLFxuICAgICAgaW5jbHVkZV9zZWNvbmRhcmllczogICAgIG9wdC5pbmNsdWRlIHx8ICcnLFxuICAgICAgcGFnZV9zaXplOiAgICAgICAgICAgICAgIG9wdC5zaXplIHx8ICcnLFxuICAgICAgcGFnZV9zdGFydDogICAgICAgICAgICAgIG9wdC5zdGFydCB8fCAnJyxcbiAgICAgIHF1YXJ0ZXI6ICAgICAgICAgICAgICAgICBvcHQucXVhcnRlciB8fCAnJyxcbiAgICAgIHJlZ19pZDogICAgICAgICAgICAgICAgICBvcHQucmVnaWQgfHwgJycsXG4gICAgICByb29tX251bWJlcjogICAgICAgICAgICAgb3B0LnJvb21OdW1iZXIgfHwgJycsXG4gICAgICBzZWFyY2hfYnk6ICAgICAgICAgICAgICAgb3B0LnNlYXJjaEJ5IHx8ICcnLFxuICAgICAgc2xuOiAgICAgICAgICAgICAgICAgICAgIG9wdC5zbG4gfHwgJycsXG4gICAgICB0cmFuc2NyaXB0YWJsZV9jb3Vyc2U6ICAgb3B0LnRyYW5zY3JpcHRhYmxlIHx8ICcnLFxuICAgICAgeWVhcjogICAgICAgICAgICAgICAgICAgIG9wdC55ZWFyIHx8ICcnXG4gICAgfTtcblxuICAgIGxldCBxdWVyeSA9IHFzLnN0cmluZ2lmeShwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2dldChgc2VjdGlvbi5qc29uPyR7cXVlcnl9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiJdfQ==