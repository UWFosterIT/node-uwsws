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

var Program = function (_Service) {
  _inherits(Program, _Service);

  function Program(config) {
    _classCallCheck(this, Program);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Program).call(this, config));
  }

  _createClass(Program, [{
    key: 'all',
    value: function all(opt) {
      var params = {
        first_effective_quarter: opt.quarter || '',
        first_effective_year: opt.year || '',
        major_abbr: opt.major || '',
        pathway: opt.pathway || 0
      };

      var query = _queryString2.default.stringify(params);

      return this._get('program.json?' + query).then(function (result) {
        result.data = result.data.Programs;
        return result;
      });
    }
  }, {
    key: 'get',
    value: function get(opt) {
      opt.pathway = opt.pathway || 0;
      var query = opt.major + ',' + opt.pathway + ',' + opt.year + ',' + opt.quarter;

      return this._get('program/' + query + '.json');
    }
  }, {
    key: 'search',
    value: function search(opt) {
      var params = {
        first_effective_quarter: opt.quarter || '',
        first_effective_year: opt.year || '',
        major_abbr: opt.major || '',
        pathway: opt.pathway || 0,
        quarter: opt.quarter || '',
        year: opt.year || ''
      };

      var query = _queryString2.default.stringify(params);

      return this._get('program.json?' + query).then(function (result) {
        result.data = result.data.Programs;
        return result;
      });
    }
  }]);

  return Program;
}(_service2.default);

exports.default = Program;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2dyYW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTTs7O0FBQ0osV0FESSxPQUNKLENBQVksTUFBWixFQUFvQjswQkFEaEIsU0FDZ0I7O2tFQURoQixvQkFFSSxTQURZO0dBQXBCOztlQURJOzt3QkFLQSxLQUFLO0FBQ1AsVUFBSSxTQUFTO0FBQ1gsaUNBQXlCLElBQUksT0FBSixJQUFlLEVBQWY7QUFDekIsOEJBQXlCLElBQUksSUFBSixJQUFZLEVBQVo7QUFDekIsb0JBQXlCLElBQUksS0FBSixJQUFhLEVBQWI7QUFDekIsaUJBQXlCLElBQUksT0FBSixJQUFlLENBQWY7T0FKdkIsQ0FERzs7QUFRUCxVQUFJLFFBQVEsc0JBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBUixDQVJHOztBQVVQLGFBQU8sS0FBSyxJQUFMLG1CQUEwQixLQUExQixFQUNKLElBREksQ0FDQyxVQUFDLE1BQUQsRUFBWTtBQUNoQixlQUFPLElBQVAsR0FBYyxPQUFPLElBQVAsQ0FBWSxRQUFaLENBREU7QUFFaEIsZUFBTyxNQUFQLENBRmdCO09BQVosQ0FEUixDQVZPOzs7O3dCQWlCTCxLQUFLO0FBQ1AsVUFBSSxPQUFKLEdBQWMsSUFBSSxPQUFKLElBQWUsQ0FBZixDQURQO0FBRVAsVUFBSSxRQUFXLElBQUksS0FBSixTQUFhLElBQUksT0FBSixTQUFlLElBQUksSUFBSixTQUFZLElBQUksT0FBSixDQUZoRDs7QUFJUCxhQUFPLEtBQUssSUFBTCxjQUFxQixlQUFyQixDQUFQLENBSk87Ozs7MkJBT0YsS0FBSztBQUNWLFVBQUksU0FBUztBQUNYLGlDQUF5QixJQUFJLE9BQUosSUFBZSxFQUFmO0FBQ3pCLDhCQUF5QixJQUFJLElBQUosSUFBWSxFQUFaO0FBQ3pCLG9CQUF5QixJQUFJLEtBQUosSUFBYSxFQUFiO0FBQ3pCLGlCQUF5QixJQUFJLE9BQUosSUFBZSxDQUFmO0FBQ3pCLGlCQUF5QixJQUFJLE9BQUosSUFBZSxFQUFmO0FBQ3pCLGNBQXlCLElBQUksSUFBSixJQUFZLEVBQVo7T0FOdkIsQ0FETTs7QUFVVixVQUFJLFFBQVEsc0JBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBUixDQVZNOztBQVlWLGFBQU8sS0FBSyxJQUFMLG1CQUEwQixLQUExQixFQUNKLElBREksQ0FDQyxVQUFDLE1BQUQsRUFBWTtBQUNoQixlQUFPLElBQVAsR0FBYyxPQUFPLElBQVAsQ0FBWSxRQUFaLENBREU7QUFFaEIsZUFBTyxNQUFQLENBRmdCO09BQVosQ0FEUixDQVpVOzs7O1NBN0JSOzs7a0JBaURTIiwiZmlsZSI6InByb2dyYW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgUHJvZ3JhbSBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgYWxsKG9wdCkge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBmaXJzdF9lZmZlY3RpdmVfcXVhcnRlcjogb3B0LnF1YXJ0ZXIgfHwgJycsXG4gICAgICBmaXJzdF9lZmZlY3RpdmVfeWVhcjogICAgb3B0LnllYXIgfHwgJycsXG4gICAgICBtYWpvcl9hYmJyOiAgICAgICAgICAgICAgb3B0Lm1ham9yIHx8ICcnLFxuICAgICAgcGF0aHdheTogICAgICAgICAgICAgICAgIG9wdC5wYXRod2F5IHx8IDBcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBwcm9ncmFtLmpzb24/JHtxdWVyeX1gKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXN1bHQuZGF0YSA9IHJlc3VsdC5kYXRhLlByb2dyYW1zO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSk7XG4gIH1cblxuICBnZXQob3B0KSB7XG4gICAgb3B0LnBhdGh3YXkgPSBvcHQucGF0aHdheSB8fCAwO1xuICAgIGxldCBxdWVyeSA9IGAke29wdC5tYWpvcn0sJHtvcHQucGF0aHdheX0sJHtvcHQueWVhcn0sJHtvcHQucXVhcnRlcn1gO1xuXG4gICAgcmV0dXJuIHRoaXMuX2dldChgcHJvZ3JhbS8ke3F1ZXJ5fS5qc29uYCk7XG4gIH1cblxuICBzZWFyY2gob3B0KSB7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIGZpcnN0X2VmZmVjdGl2ZV9xdWFydGVyOiBvcHQucXVhcnRlciB8fCAnJyxcbiAgICAgIGZpcnN0X2VmZmVjdGl2ZV95ZWFyOiAgICBvcHQueWVhciB8fCAnJyxcbiAgICAgIG1ham9yX2FiYnI6ICAgICAgICAgICAgICBvcHQubWFqb3IgfHwgJycsXG4gICAgICBwYXRod2F5OiAgICAgICAgICAgICAgICAgb3B0LnBhdGh3YXkgfHwgMCxcbiAgICAgIHF1YXJ0ZXI6ICAgICAgICAgICAgICAgICBvcHQucXVhcnRlciB8fCAnJyxcbiAgICAgIHllYXI6ICAgICAgICAgICAgICAgICAgICBvcHQueWVhciB8fCAnJ1xuICAgIH07XG5cbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkocGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLl9nZXQoYHByb2dyYW0uanNvbj8ke3F1ZXJ5fWApXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc3VsdC5kYXRhID0gcmVzdWx0LmRhdGEuUHJvZ3JhbXM7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmFtO1xuIl19