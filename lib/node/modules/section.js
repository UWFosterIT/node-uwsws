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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3NlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR007OztBQUNKLFdBREksT0FDSixDQUFZLE1BQVosRUFBb0I7MEJBRGhCLFNBQ2dCOztrRUFEaEIsb0JBRUksU0FEWTtHQUFwQjs7ZUFESTs7d0JBS0EsS0FBSyxJQUFJO0FBQ1gsVUFBSSxTQUFZLElBQUksTUFBSixTQUFjLElBQUksT0FBSixDQURuQjtBQUVYLFVBQUksUUFBWSxJQUFJLElBQUosU0FBWSxJQUFJLE9BQUosU0FBZSxJQUFJLFVBQUosU0FBa0IsTUFBekQsQ0FGTztBQUdYLFdBQUssSUFBTCxhQUFvQixlQUFwQixFQUFrQyxFQUFsQyxFQUhXO0FBSVgsYUFKVzs7OzsyQkFPTixLQUFLLElBQUk7QUFDZCxVQUFJLFNBQVM7QUFDWCx1QkFBeUIsSUFBSSxNQUFKLElBQWtCLEVBQWxCO0FBQ3pCLGlDQUF5QixJQUFJLFVBQUosSUFBa0IsRUFBbEI7QUFDekIscUJBQXlCLElBQUksVUFBSixJQUFrQixFQUFsQjtBQUN6QixzQkFBeUIsSUFBSSxNQUFKLElBQWtCLENBQWxCO0FBQ3pCLDZCQUF5QixJQUFJLE9BQUosSUFBa0IsRUFBbEI7QUFDekIsbUJBQXlCLElBQUksSUFBSixJQUFrQixFQUFsQjtBQUN6QixvQkFBeUIsSUFBSSxLQUFKLElBQWtCLEVBQWxCO0FBQ3pCLGlCQUF5QixJQUFJLE9BQUosSUFBa0IsRUFBbEI7QUFDekIsZ0JBQXlCLElBQUksS0FBSixJQUFrQixFQUFsQjtBQUN6QixtQkFBeUIsSUFBSSxRQUFKLElBQWtCLEVBQWxCO0FBQ3pCLGNBQXlCLElBQUksSUFBSixJQUFrQixFQUFsQjtPQVh2QixDQURVOztBQWVkLFVBQUksUUFBUSxzQkFBRyxTQUFILENBQWEsTUFBYixDQUFSLENBZlU7O0FBaUJkLFdBQUssSUFBTCxtQkFBMEIsS0FBMUIsRUFBbUMsRUFBbkMsRUFqQmM7QUFrQmQsYUFsQmM7Ozs7U0FaWjs7O2tCQWtDUyIsImZpbGUiOiJzZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzICAgICAgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIFNlY3Rpb24gZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIGdldChvcHQsIGNiKSB7XG4gICAgbGV0IGNvdXJzZSA9IGAke29wdC5jb3Vyc2V9LyR7b3B0LnNlY3Rpb259YDtcbiAgICBsZXQgcXVlcnkgID0gYCR7b3B0LnllYXJ9LCR7b3B0LnF1YXJ0ZXJ9LCR7b3B0LmN1cnJpY3VsdW19LCR7Y291cnNlfWA7XG4gICAgdGhpcy5fZ2V0KGBjb3Vyc2UvJHtxdWVyeX0uanNvbmAsIGNiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBzZWFyY2gob3B0LCBjYikge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBjb3Vyc2VfbnVtYmVyOiAgICAgICAgICAgb3B0LmNvdXJzZSAgICAgfHwgJycsXG4gICAgICBjdXJyaWN1bHVtX2FiYnJldmlhdGlvbjogb3B0LmN1cnJpY3VsdW0gfHwgJycsXG4gICAgICBkZWxldGVfZmxhZzogICAgICAgICAgICAgb3B0LmRlbGV0ZUZsYWcgfHwgJycsXG4gICAgICBmdXR1cmVfdGVybXM6ICAgICAgICAgICAgb3B0LmZ1dHVyZSAgICAgfHwgMCxcbiAgICAgIGluY2x1ZGVfc2Vjb25kYXJpZXM6ICAgICBvcHQuaW5jbHVkZSAgICB8fCAnJyxcbiAgICAgIHBhZ2Vfc2l6ZTogICAgICAgICAgICAgICBvcHQuc2l6ZSAgICAgICB8fCAnJyxcbiAgICAgIHBhZ2Vfc3RhcnQ6ICAgICAgICAgICAgICBvcHQuc3RhcnQgICAgICB8fCAnJyxcbiAgICAgIHF1YXJ0ZXI6ICAgICAgICAgICAgICAgICBvcHQucXVhcnRlciAgICB8fCAnJyxcbiAgICAgIHJlZ19pZDogICAgICAgICAgICAgICAgICBvcHQucmVnaWQgICAgICB8fCAnJyxcbiAgICAgIHNlYXJjaF9ieTogICAgICAgICAgICAgICBvcHQuc2VhcmNoQnkgICB8fCAnJyxcbiAgICAgIHllYXI6ICAgICAgICAgICAgICAgICAgICBvcHQueWVhciAgICAgICB8fCAnJ1xuICAgIH07XG5cbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkocGFyYW1zKTtcblxuICAgIHRoaXMuX2dldChgc2VjdGlvbi5qc29uPyR7cXVlcnl9YCwgY2IpO1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIl19