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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3NlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxPO1lBQUEsTzs7QUFDSixXQURJLE9BQ0osQ0FBWSxNQUFaLEVBQW9CO0FBQUEsMEJBRGhCLE9BQ2dCOztBQUFBLGtFQURoQixPQUNnQixhQUNaLE1BRFk7QUFFbkI7O2VBSEcsTzs7d0JBS0EsRyxFQUFLO0FBQ1AsVUFBSSxTQUFZLElBQUksTUFBaEIsU0FBMEIsSUFBSSxPQUFsQztBQUNBLFVBQUksUUFBVyxJQUFJLElBQWYsU0FBdUIsSUFBSSxPQUEzQixTQUFzQyxJQUFJLFVBQTFDLFNBQXdELE1BQTVEO0FBQ0EsYUFBTyxLQUFLLElBQUwsYUFBb0IsS0FBcEIsV0FBUDtBQUNEOzs7MkJBRU0sRyxFQUFLO0FBQ1YsVUFBSSxTQUFTO0FBQ1gsNEJBQXlCLElBQUksVUFBSixJQUFrQixFQURoQztBQUVYLHVCQUF5QixJQUFJLE1BQUosSUFBYyxFQUY1QjtBQUdYLGlDQUF5QixJQUFJLFVBQUosSUFBa0IsRUFIaEM7QUFJWCxxQkFBeUIsSUFBSSxVQUFKLElBQWtCLEVBSmhDO0FBS1gsc0JBQXlCLElBQUksTUFBSixJQUFjLENBTDVCO0FBTVgsNkJBQXlCLElBQUksT0FBSixJQUFlLEVBTjdCO0FBT1gsbUJBQXlCLElBQUksSUFBSixJQUFZLEVBUDFCO0FBUVgsb0JBQXlCLElBQUksS0FBSixJQUFhLEVBUjNCO0FBU1gsaUJBQXlCLElBQUksT0FBSixJQUFlLEVBVDdCO0FBVVgsZ0JBQXlCLElBQUksS0FBSixJQUFhLEVBVjNCO0FBV1gsbUJBQXlCLElBQUksUUFBSixJQUFnQixFQVg5QjtBQVlYLCtCQUF5QixJQUFJLGNBQUosSUFBc0IsRUFacEM7QUFhWCxjQUF5QixJQUFJLElBQUosSUFBWTtBQWIxQixPQUFiOztBQWdCQSxVQUFJLFFBQVEsc0JBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBWjs7QUFFQSxhQUFPLEtBQUssSUFBTCxtQkFBMEIsS0FBMUIsQ0FBUDtBQUNEOzs7U0EvQkcsTzs7O2tCQWtDUyxPIiwiZmlsZSI6InNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgU2VjdGlvbiBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgZ2V0KG9wdCkge1xuICAgIGxldCBjb3Vyc2UgPSBgJHtvcHQuY291cnNlfS8ke29wdC5zZWN0aW9ufWA7XG4gICAgbGV0IHF1ZXJ5ID0gYCR7b3B0LnllYXJ9LCR7b3B0LnF1YXJ0ZXJ9LCR7b3B0LmN1cnJpY3VsdW19LCR7Y291cnNlfWA7XG4gICAgcmV0dXJuIHRoaXMuX2dldChgY291cnNlLyR7cXVlcnl9Lmpzb25gKTtcbiAgfVxuXG4gIHNlYXJjaChvcHQpIHtcbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgY2hhbmdlZF9zaW5jZV9kYXRlOiAgICAgIG9wdC5jaGFuZ2VEYXRlIHx8ICcnLFxuICAgICAgY291cnNlX251bWJlcjogICAgICAgICAgIG9wdC5jb3Vyc2UgfHwgJycsXG4gICAgICBjdXJyaWN1bHVtX2FiYnJldmlhdGlvbjogb3B0LmN1cnJpY3VsdW0gfHwgJycsXG4gICAgICBkZWxldGVfZmxhZzogICAgICAgICAgICAgb3B0LmRlbGV0ZUZsYWcgfHwgJycsXG4gICAgICBmdXR1cmVfdGVybXM6ICAgICAgICAgICAgb3B0LmZ1dHVyZSB8fCAwLFxuICAgICAgaW5jbHVkZV9zZWNvbmRhcmllczogICAgIG9wdC5pbmNsdWRlIHx8ICcnLFxuICAgICAgcGFnZV9zaXplOiAgICAgICAgICAgICAgIG9wdC5zaXplIHx8ICcnLFxuICAgICAgcGFnZV9zdGFydDogICAgICAgICAgICAgIG9wdC5zdGFydCB8fCAnJyxcbiAgICAgIHF1YXJ0ZXI6ICAgICAgICAgICAgICAgICBvcHQucXVhcnRlciB8fCAnJyxcbiAgICAgIHJlZ19pZDogICAgICAgICAgICAgICAgICBvcHQucmVnaWQgfHwgJycsXG4gICAgICBzZWFyY2hfYnk6ICAgICAgICAgICAgICAgb3B0LnNlYXJjaEJ5IHx8ICcnLFxuICAgICAgdHJhbnNjcmlwdGFibGVfY291cnNlOiAgIG9wdC50cmFuc2NyaXB0YWJsZSB8fCAnJyxcbiAgICAgIHllYXI6ICAgICAgICAgICAgICAgICAgICBvcHQueWVhciB8fCAnJ1xuICAgIH07XG5cbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkocGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLl9nZXQoYHNlY3Rpb24uanNvbj8ke3F1ZXJ5fWApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iXX0=