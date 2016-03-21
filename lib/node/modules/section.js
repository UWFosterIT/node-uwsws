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
      return this._get('course/' + query + '.json').then(function (result) {
        result.section = result.data;
        delete result.data;
        return result;
      });
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

      return this._get('section.json?' + query).then(function (result) {
        result.section = result.data;
        delete result.data;
        return result;
      });
    }
  }]);

  return Section;
}(_service2.default);

exports.default = Section;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3NlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTTs7O0FBQ0osV0FESSxPQUNKLENBQVksTUFBWixFQUFvQjswQkFEaEIsU0FDZ0I7O2tFQURoQixvQkFFSSxTQURZO0dBQXBCOztlQURJOzt3QkFLQSxLQUFLO0FBQ1AsVUFBSSxTQUFZLElBQUksTUFBSixTQUFjLElBQUksT0FBSixDQUR2QjtBQUVQLFVBQUksUUFBVyxJQUFJLElBQUosU0FBWSxJQUFJLE9BQUosU0FBZSxJQUFJLFVBQUosU0FBa0IsTUFBeEQsQ0FGRztBQUdQLGFBQU8sS0FBSyxJQUFMLGFBQW9CLGVBQXBCLEVBQ0osSUFESSxDQUNDLFVBQUMsTUFBRCxFQUFZO0FBQ2hCLGVBQU8sT0FBUCxHQUFpQixPQUFPLElBQVAsQ0FERDtBQUVoQixlQUFPLE9BQU8sSUFBUCxDQUZTO0FBR2hCLGVBQU8sTUFBUCxDQUhnQjtPQUFaLENBRFIsQ0FITzs7OzsyQkFXRixLQUFLO0FBQ1YsVUFBSSxTQUFTO0FBQ1gsNEJBQXlCLElBQUksVUFBSixJQUFrQixFQUFsQjtBQUN6Qix1QkFBeUIsSUFBSSxNQUFKLElBQWMsRUFBZDtBQUN6QixpQ0FBeUIsSUFBSSxVQUFKLElBQWtCLEVBQWxCO0FBQ3pCLHFCQUF5QixJQUFJLFVBQUosSUFBa0IsRUFBbEI7QUFDekIsc0JBQXlCLElBQUksTUFBSixJQUFjLENBQWQ7QUFDekIsNkJBQXlCLElBQUksT0FBSixJQUFlLEVBQWY7QUFDekIsbUJBQXlCLElBQUksSUFBSixJQUFZLEVBQVo7QUFDekIsb0JBQXlCLElBQUksS0FBSixJQUFhLEVBQWI7QUFDekIsaUJBQXlCLElBQUksT0FBSixJQUFlLEVBQWY7QUFDekIsZ0JBQXlCLElBQUksS0FBSixJQUFhLEVBQWI7QUFDekIsbUJBQXlCLElBQUksUUFBSixJQUFnQixFQUFoQjtBQUN6QiwrQkFBeUIsSUFBSSxjQUFKLElBQXNCLEVBQXRCO0FBQ3pCLGNBQXlCLElBQUksSUFBSixJQUFZLEVBQVo7T0FidkIsQ0FETTs7QUFpQlYsVUFBSSxRQUFRLHNCQUFHLFNBQUgsQ0FBYSxNQUFiLENBQVIsQ0FqQk07O0FBbUJWLGFBQU8sS0FBSyxJQUFMLG1CQUEwQixLQUExQixFQUNKLElBREksQ0FDQyxVQUFDLE1BQUQsRUFBWTtBQUNoQixlQUFPLE9BQVAsR0FBaUIsT0FBTyxJQUFQLENBREQ7QUFFaEIsZUFBTyxPQUFPLElBQVAsQ0FGUztBQUdoQixlQUFPLE1BQVAsQ0FIZ0I7T0FBWixDQURSLENBbkJVOzs7O1NBaEJSOzs7a0JBNENTIiwiZmlsZSI6InNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgU2VjdGlvbiBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgZ2V0KG9wdCkge1xuICAgIGxldCBjb3Vyc2UgPSBgJHtvcHQuY291cnNlfS8ke29wdC5zZWN0aW9ufWA7XG4gICAgbGV0IHF1ZXJ5ID0gYCR7b3B0LnllYXJ9LCR7b3B0LnF1YXJ0ZXJ9LCR7b3B0LmN1cnJpY3VsdW19LCR7Y291cnNlfWA7XG4gICAgcmV0dXJuIHRoaXMuX2dldChgY291cnNlLyR7cXVlcnl9Lmpzb25gKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXN1bHQuc2VjdGlvbiA9IHJlc3VsdC5kYXRhO1xuICAgICAgICBkZWxldGUgcmVzdWx0LmRhdGE7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaChvcHQpIHtcbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgY2hhbmdlZF9zaW5jZV9kYXRlOiAgICAgIG9wdC5jaGFuZ2VEYXRlIHx8ICcnLFxuICAgICAgY291cnNlX251bWJlcjogICAgICAgICAgIG9wdC5jb3Vyc2UgfHwgJycsXG4gICAgICBjdXJyaWN1bHVtX2FiYnJldmlhdGlvbjogb3B0LmN1cnJpY3VsdW0gfHwgJycsXG4gICAgICBkZWxldGVfZmxhZzogICAgICAgICAgICAgb3B0LmRlbGV0ZUZsYWcgfHwgJycsXG4gICAgICBmdXR1cmVfdGVybXM6ICAgICAgICAgICAgb3B0LmZ1dHVyZSB8fCAwLFxuICAgICAgaW5jbHVkZV9zZWNvbmRhcmllczogICAgIG9wdC5pbmNsdWRlIHx8ICcnLFxuICAgICAgcGFnZV9zaXplOiAgICAgICAgICAgICAgIG9wdC5zaXplIHx8ICcnLFxuICAgICAgcGFnZV9zdGFydDogICAgICAgICAgICAgIG9wdC5zdGFydCB8fCAnJyxcbiAgICAgIHF1YXJ0ZXI6ICAgICAgICAgICAgICAgICBvcHQucXVhcnRlciB8fCAnJyxcbiAgICAgIHJlZ19pZDogICAgICAgICAgICAgICAgICBvcHQucmVnaWQgfHwgJycsXG4gICAgICBzZWFyY2hfYnk6ICAgICAgICAgICAgICAgb3B0LnNlYXJjaEJ5IHx8ICcnLFxuICAgICAgdHJhbnNjcmlwdGFibGVfY291cnNlOiAgIG9wdC50cmFuc2NyaXB0YWJsZSB8fCAnJyxcbiAgICAgIHllYXI6ICAgICAgICAgICAgICAgICAgICBvcHQueWVhciB8fCAnJ1xuICAgIH07XG5cbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkocGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLl9nZXQoYHNlY3Rpb24uanNvbj8ke3F1ZXJ5fWApXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc3VsdC5zZWN0aW9uID0gcmVzdWx0LmRhdGE7XG4gICAgICAgIGRlbGV0ZSByZXN1bHQuZGF0YTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iXX0=