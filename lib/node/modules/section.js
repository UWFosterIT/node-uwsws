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

var Section = function (_Service) {
  _inherits(Section, _Service);

  function Section(config) {
    _classCallCheck(this, Section);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Section).call(this, config));
  }

  _createClass(Section, [{
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
        future_terms: opt.future || 0,
        include_secondaries: opt.include || '',
        page_size: opt.size || '',
        page_start: opt.start || '',
        quarter: opt.quarter || '',
        reg_id: opt.regid || '',
        search_by: opt.searchBy || '',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3NlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTTs7O0FBQ0osV0FESSxPQUNKLENBQVksTUFBWixFQUFvQjswQkFEaEIsU0FDZ0I7O2tFQURoQixvQkFFSSxTQURZO0dBQXBCOztlQURJOzt3QkFLQSxLQUFLO0FBQ1AsVUFBSSxTQUFZLElBQUksTUFBSixTQUFjLElBQUksT0FBSixDQUR2QjtBQUVQLFVBQUksUUFBVyxJQUFJLElBQUosU0FBWSxJQUFJLE9BQUosU0FBZSxJQUFJLFVBQUosU0FBa0IsTUFBeEQsQ0FGRztBQUdQLGFBQU8sS0FBSyxJQUFMLGFBQW9CLGVBQXBCLENBQVAsQ0FITzs7OzsyQkFNRixLQUFLO0FBQ1YsVUFBSSxTQUFTO0FBQ1gsNEJBQXlCLElBQUksVUFBSixJQUFrQixFQUFsQjtBQUN6Qix1QkFBeUIsSUFBSSxNQUFKLElBQWMsRUFBZDtBQUN6QixpQ0FBeUIsSUFBSSxVQUFKLElBQWtCLEVBQWxCO0FBQ3pCLHFCQUF5QixJQUFJLFVBQUosSUFBa0IsRUFBbEI7QUFDekIsc0JBQXlCLElBQUksTUFBSixJQUFjLENBQWQ7QUFDekIsNkJBQXlCLElBQUksT0FBSixJQUFlLEVBQWY7QUFDekIsbUJBQXlCLElBQUksSUFBSixJQUFZLEVBQVo7QUFDekIsb0JBQXlCLElBQUksS0FBSixJQUFhLEVBQWI7QUFDekIsaUJBQXlCLElBQUksT0FBSixJQUFlLEVBQWY7QUFDekIsZ0JBQXlCLElBQUksS0FBSixJQUFhLEVBQWI7QUFDekIsbUJBQXlCLElBQUksUUFBSixJQUFnQixFQUFoQjtBQUN6QiwrQkFBeUIsSUFBSSxjQUFKLElBQXNCLEVBQXRCO0FBQ3pCLGNBQXlCLElBQUksSUFBSixJQUFZLEVBQVo7T0FidkIsQ0FETTs7QUFpQlYsVUFBSSxRQUFRLHNCQUFHLFNBQUgsQ0FBYSxNQUFiLENBQVIsQ0FqQk07O0FBbUJWLGFBQU8sS0FBSyxJQUFMLG1CQUEwQixLQUExQixDQUFQLENBbkJVOzs7O1NBWFI7OztrQkFrQ1MiLCJmaWxlIjoic2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyAgICAgIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBTZWN0aW9uIGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBnZXQob3B0KSB7XG4gICAgbGV0IGNvdXJzZSA9IGAke29wdC5jb3Vyc2V9LyR7b3B0LnNlY3Rpb259YDtcbiAgICBsZXQgcXVlcnkgPSBgJHtvcHQueWVhcn0sJHtvcHQucXVhcnRlcn0sJHtvcHQuY3VycmljdWx1bX0sJHtjb3Vyc2V9YDtcbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBjb3Vyc2UvJHtxdWVyeX0uanNvbmApO1xuICB9XG5cbiAgc2VhcmNoKG9wdCkge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBjaGFuZ2VkX3NpbmNlX2RhdGU6ICAgICAgb3B0LmNoYW5nZURhdGUgfHwgJycsXG4gICAgICBjb3Vyc2VfbnVtYmVyOiAgICAgICAgICAgb3B0LmNvdXJzZSB8fCAnJyxcbiAgICAgIGN1cnJpY3VsdW1fYWJicmV2aWF0aW9uOiBvcHQuY3VycmljdWx1bSB8fCAnJyxcbiAgICAgIGRlbGV0ZV9mbGFnOiAgICAgICAgICAgICBvcHQuZGVsZXRlRmxhZyB8fCAnJyxcbiAgICAgIGZ1dHVyZV90ZXJtczogICAgICAgICAgICBvcHQuZnV0dXJlIHx8IDAsXG4gICAgICBpbmNsdWRlX3NlY29uZGFyaWVzOiAgICAgb3B0LmluY2x1ZGUgfHwgJycsXG4gICAgICBwYWdlX3NpemU6ICAgICAgICAgICAgICAgb3B0LnNpemUgfHwgJycsXG4gICAgICBwYWdlX3N0YXJ0OiAgICAgICAgICAgICAgb3B0LnN0YXJ0IHx8ICcnLFxuICAgICAgcXVhcnRlcjogICAgICAgICAgICAgICAgIG9wdC5xdWFydGVyIHx8ICcnLFxuICAgICAgcmVnX2lkOiAgICAgICAgICAgICAgICAgIG9wdC5yZWdpZCB8fCAnJyxcbiAgICAgIHNlYXJjaF9ieTogICAgICAgICAgICAgICBvcHQuc2VhcmNoQnkgfHwgJycsXG4gICAgICB0cmFuc2NyaXB0YWJsZV9jb3Vyc2U6ICAgb3B0LnRyYW5zY3JpcHRhYmxlIHx8ICcnLFxuICAgICAgeWVhcjogICAgICAgICAgICAgICAgICAgIG9wdC55ZWFyIHx8ICcnXG4gICAgfTtcblxuICAgIGxldCBxdWVyeSA9IHFzLnN0cmluZ2lmeShwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2dldChgc2VjdGlvbi5qc29uPyR7cXVlcnl9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiJdfQ==