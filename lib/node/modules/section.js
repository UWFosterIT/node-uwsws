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
    value: function get(opt, cb) {
      var course = opt.course + '/' + opt.section;
      var query = opt.year + ',' + opt.quarter + ',' + opt.curriculum + ',' + course;
      this._get('course/' + query + '.json', cb);
      return;
    }
  }, {
    key: 'search',
    value: function search(opt, cb) {
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

      this._get('section.json?' + query, cb);
      return;
    }
  }]);

  return Section;
}(_service2.default);

exports.default = Section;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3NlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTTs7O0FBQ0osV0FESSxPQUNKLENBQVksTUFBWixFQUFvQjswQkFEaEIsU0FDZ0I7O2tFQURoQixvQkFFSSxTQURZO0dBQXBCOztlQURJOzt3QkFLQSxLQUFLLElBQUk7QUFDWCxVQUFJLFNBQVksSUFBSSxNQUFKLFNBQWMsSUFBSSxPQUFKLENBRG5CO0FBRVgsVUFBSSxRQUFZLElBQUksSUFBSixTQUFZLElBQUksT0FBSixTQUFlLElBQUksVUFBSixTQUFrQixNQUF6RCxDQUZPO0FBR1gsV0FBSyxJQUFMLGFBQW9CLGVBQXBCLEVBQWtDLEVBQWxDLEVBSFc7QUFJWCxhQUpXOzs7OzJCQU9OLEtBQUssSUFBSTtBQUNkLFVBQUksU0FBUztBQUNYLDRCQUF5QixJQUFJLFVBQUosSUFBc0IsRUFBdEI7QUFDekIsdUJBQXlCLElBQUksTUFBSixJQUFzQixFQUF0QjtBQUN6QixpQ0FBeUIsSUFBSSxVQUFKLElBQXNCLEVBQXRCO0FBQ3pCLHFCQUF5QixJQUFJLFVBQUosSUFBc0IsRUFBdEI7QUFDekIsc0JBQXlCLElBQUksTUFBSixJQUFzQixDQUF0QjtBQUN6Qiw2QkFBeUIsSUFBSSxPQUFKLElBQXNCLEVBQXRCO0FBQ3pCLG1CQUF5QixJQUFJLElBQUosSUFBc0IsRUFBdEI7QUFDekIsb0JBQXlCLElBQUksS0FBSixJQUFzQixFQUF0QjtBQUN6QixpQkFBeUIsSUFBSSxPQUFKLElBQXNCLEVBQXRCO0FBQ3pCLGdCQUF5QixJQUFJLEtBQUosSUFBc0IsRUFBdEI7QUFDekIsbUJBQXlCLElBQUksUUFBSixJQUFzQixFQUF0QjtBQUN6QiwrQkFBeUIsSUFBSSxjQUFKLElBQXNCLEVBQXRCO0FBQ3pCLGNBQXlCLElBQUksSUFBSixJQUFzQixFQUF0QjtPQWJ2QixDQURVOztBQWlCZCxVQUFJLFFBQVEsc0JBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBUixDQWpCVTs7QUFtQmQsV0FBSyxJQUFMLG1CQUEwQixLQUExQixFQUFtQyxFQUFuQyxFQW5CYztBQW9CZCxhQXBCYzs7OztTQVpaOzs7a0JBb0NTIiwiZmlsZSI6InNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgU2VjdGlvbiBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgZ2V0KG9wdCwgY2IpIHtcbiAgICBsZXQgY291cnNlID0gYCR7b3B0LmNvdXJzZX0vJHtvcHQuc2VjdGlvbn1gO1xuICAgIGxldCBxdWVyeSAgPSBgJHtvcHQueWVhcn0sJHtvcHQucXVhcnRlcn0sJHtvcHQuY3VycmljdWx1bX0sJHtjb3Vyc2V9YDtcbiAgICB0aGlzLl9nZXQoYGNvdXJzZS8ke3F1ZXJ5fS5qc29uYCwgY2IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHNlYXJjaChvcHQsIGNiKSB7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIGNoYW5nZWRfc2luY2VfZGF0ZTogICAgICBvcHQuY2hhbmdlRGF0ZSAgICAgfHwgJycsXG4gICAgICBjb3Vyc2VfbnVtYmVyOiAgICAgICAgICAgb3B0LmNvdXJzZSAgICAgICAgIHx8ICcnLFxuICAgICAgY3VycmljdWx1bV9hYmJyZXZpYXRpb246IG9wdC5jdXJyaWN1bHVtICAgICB8fCAnJyxcbiAgICAgIGRlbGV0ZV9mbGFnOiAgICAgICAgICAgICBvcHQuZGVsZXRlRmxhZyAgICAgfHwgJycsXG4gICAgICBmdXR1cmVfdGVybXM6ICAgICAgICAgICAgb3B0LmZ1dHVyZSAgICAgICAgIHx8IDAsXG4gICAgICBpbmNsdWRlX3NlY29uZGFyaWVzOiAgICAgb3B0LmluY2x1ZGUgICAgICAgIHx8ICcnLFxuICAgICAgcGFnZV9zaXplOiAgICAgICAgICAgICAgIG9wdC5zaXplICAgICAgICAgICB8fCAnJyxcbiAgICAgIHBhZ2Vfc3RhcnQ6ICAgICAgICAgICAgICBvcHQuc3RhcnQgICAgICAgICAgfHwgJycsXG4gICAgICBxdWFydGVyOiAgICAgICAgICAgICAgICAgb3B0LnF1YXJ0ZXIgICAgICAgIHx8ICcnLFxuICAgICAgcmVnX2lkOiAgICAgICAgICAgICAgICAgIG9wdC5yZWdpZCAgICAgICAgICB8fCAnJyxcbiAgICAgIHNlYXJjaF9ieTogICAgICAgICAgICAgICBvcHQuc2VhcmNoQnkgICAgICAgfHwgJycsXG4gICAgICB0cmFuc2NyaXB0YWJsZV9jb3Vyc2U6ICAgb3B0LnRyYW5zY3JpcHRhYmxlIHx8ICcnLFxuICAgICAgeWVhcjogICAgICAgICAgICAgICAgICAgIG9wdC55ZWFyICAgICAgICAgICB8fCAnJ1xuICAgIH07XG5cbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkocGFyYW1zKTtcblxuICAgIHRoaXMuX2dldChgc2VjdGlvbi5qc29uPyR7cXVlcnl9YCwgY2IpO1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIl19