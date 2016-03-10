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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3NlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR007OztBQUNKLFdBREksT0FDSixDQUFZLE1BQVosRUFBb0I7MEJBRGhCLFNBQ2dCOztrRUFEaEIsb0JBRUksU0FEWTtHQUFwQjs7ZUFESTs7d0JBS0EsS0FBSyxJQUFJO0FBQ1gsVUFBSSxTQUFZLElBQUksTUFBSixTQUFjLElBQUksT0FBSixDQURuQjtBQUVYLFVBQUksUUFBWSxJQUFJLElBQUosU0FBWSxJQUFJLE9BQUosU0FBZSxJQUFJLFVBQUosU0FBa0IsTUFBekQsQ0FGTztBQUdYLFdBQUssSUFBTCxhQUFvQixlQUFwQixFQUFrQyxFQUFsQyxFQUhXO0FBSVgsYUFKVzs7OzsyQkFPTixLQUFLLElBQUk7QUFDZCxVQUFJLFNBQVM7QUFDWCw0QkFBeUIsSUFBSSxVQUFKLElBQXNCLEVBQXRCO0FBQ3pCLHVCQUF5QixJQUFJLE1BQUosSUFBc0IsRUFBdEI7QUFDekIsaUNBQXlCLElBQUksVUFBSixJQUFzQixFQUF0QjtBQUN6QixxQkFBeUIsSUFBSSxVQUFKLElBQXNCLEVBQXRCO0FBQ3pCLHNCQUF5QixJQUFJLE1BQUosSUFBc0IsQ0FBdEI7QUFDekIsNkJBQXlCLElBQUksT0FBSixJQUFzQixFQUF0QjtBQUN6QixtQkFBeUIsSUFBSSxJQUFKLElBQXNCLEVBQXRCO0FBQ3pCLG9CQUF5QixJQUFJLEtBQUosSUFBc0IsRUFBdEI7QUFDekIsaUJBQXlCLElBQUksT0FBSixJQUFzQixFQUF0QjtBQUN6QixnQkFBeUIsSUFBSSxLQUFKLElBQXNCLEVBQXRCO0FBQ3pCLG1CQUF5QixJQUFJLFFBQUosSUFBc0IsRUFBdEI7QUFDekIsK0JBQXlCLElBQUksY0FBSixJQUFzQixFQUF0QjtBQUN6QixjQUF5QixJQUFJLElBQUosSUFBc0IsRUFBdEI7T0FidkIsQ0FEVTs7QUFpQmQsVUFBSSxRQUFRLHNCQUFHLFNBQUgsQ0FBYSxNQUFiLENBQVIsQ0FqQlU7O0FBbUJkLFdBQUssSUFBTCxtQkFBMEIsS0FBMUIsRUFBbUMsRUFBbkMsRUFuQmM7QUFvQmQsYUFwQmM7Ozs7U0FaWjs7O2tCQW9DUyIsImZpbGUiOiJzZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzICAgICAgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIFNlY3Rpb24gZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIGdldChvcHQsIGNiKSB7XG4gICAgbGV0IGNvdXJzZSA9IGAke29wdC5jb3Vyc2V9LyR7b3B0LnNlY3Rpb259YDtcbiAgICBsZXQgcXVlcnkgID0gYCR7b3B0LnllYXJ9LCR7b3B0LnF1YXJ0ZXJ9LCR7b3B0LmN1cnJpY3VsdW19LCR7Y291cnNlfWA7XG4gICAgdGhpcy5fZ2V0KGBjb3Vyc2UvJHtxdWVyeX0uanNvbmAsIGNiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBzZWFyY2gob3B0LCBjYikge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBjaGFuZ2VkX3NpbmNlX2RhdGU6ICAgICAgb3B0LmNoYW5nZURhdGUgICAgIHx8ICcnLFxuICAgICAgY291cnNlX251bWJlcjogICAgICAgICAgIG9wdC5jb3Vyc2UgICAgICAgICB8fCAnJyxcbiAgICAgIGN1cnJpY3VsdW1fYWJicmV2aWF0aW9uOiBvcHQuY3VycmljdWx1bSAgICAgfHwgJycsXG4gICAgICBkZWxldGVfZmxhZzogICAgICAgICAgICAgb3B0LmRlbGV0ZUZsYWcgICAgIHx8ICcnLFxuICAgICAgZnV0dXJlX3Rlcm1zOiAgICAgICAgICAgIG9wdC5mdXR1cmUgICAgICAgICB8fCAwLFxuICAgICAgaW5jbHVkZV9zZWNvbmRhcmllczogICAgIG9wdC5pbmNsdWRlICAgICAgICB8fCAnJyxcbiAgICAgIHBhZ2Vfc2l6ZTogICAgICAgICAgICAgICBvcHQuc2l6ZSAgICAgICAgICAgfHwgJycsXG4gICAgICBwYWdlX3N0YXJ0OiAgICAgICAgICAgICAgb3B0LnN0YXJ0ICAgICAgICAgIHx8ICcnLFxuICAgICAgcXVhcnRlcjogICAgICAgICAgICAgICAgIG9wdC5xdWFydGVyICAgICAgICB8fCAnJyxcbiAgICAgIHJlZ19pZDogICAgICAgICAgICAgICAgICBvcHQucmVnaWQgICAgICAgICAgfHwgJycsXG4gICAgICBzZWFyY2hfYnk6ICAgICAgICAgICAgICAgb3B0LnNlYXJjaEJ5ICAgICAgIHx8ICcnLFxuICAgICAgdHJhbnNjcmlwdGFibGVfY291cnNlOiAgIG9wdC50cmFuc2NyaXB0YWJsZSB8fCAnJyxcbiAgICAgIHllYXI6ICAgICAgICAgICAgICAgICAgICBvcHQueWVhciAgICAgICAgICAgfHwgJydcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICB0aGlzLl9nZXQoYHNlY3Rpb24uanNvbj8ke3F1ZXJ5fWAsIGNiKTtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiJdfQ==