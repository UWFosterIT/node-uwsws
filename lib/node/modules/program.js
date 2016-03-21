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
        result.program = result.data.Programs;
        delete result.data;
        return result;
      });
    }
  }, {
    key: 'get',
    value: function get(opt) {
      opt.pathway = opt.pathway || 0;
      var query = opt.major + ',' + opt.pathway + ',' + opt.year + ',' + opt.quarter;

      return this._get('program/' + query + '.json').then(function (result) {
        result.program = result.data;
        delete result.data;
        return result;
      });
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
        result.program = result.data.Programs;
        delete result.data;
        return result;
      });
    }
  }]);

  return Program;
}(_service2.default);

exports.default = Program;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2dyYW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTTs7O0FBQ0osV0FESSxPQUNKLENBQVksTUFBWixFQUFvQjswQkFEaEIsU0FDZ0I7O2tFQURoQixvQkFFSSxTQURZO0dBQXBCOztlQURJOzt3QkFLQSxLQUFLO0FBQ1AsVUFBSSxTQUFTO0FBQ1gsaUNBQXlCLElBQUksT0FBSixJQUFlLEVBQWY7QUFDekIsOEJBQXlCLElBQUksSUFBSixJQUFZLEVBQVo7QUFDekIsb0JBQXlCLElBQUksS0FBSixJQUFhLEVBQWI7QUFDekIsaUJBQXlCLElBQUksT0FBSixJQUFlLENBQWY7T0FKdkIsQ0FERzs7QUFRUCxVQUFJLFFBQVEsc0JBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBUixDQVJHOztBQVVQLGFBQU8sS0FBSyxJQUFMLG1CQUEwQixLQUExQixFQUNKLElBREksQ0FDQyxVQUFDLE1BQUQsRUFBWTtBQUNoQixlQUFPLE9BQVAsR0FBaUIsT0FBTyxJQUFQLENBQVksUUFBWixDQUREO0FBRWhCLGVBQU8sT0FBTyxJQUFQLENBRlM7QUFHaEIsZUFBTyxNQUFQLENBSGdCO09BQVosQ0FEUixDQVZPOzs7O3dCQWtCTCxLQUFLO0FBQ1AsVUFBSSxPQUFKLEdBQWMsSUFBSSxPQUFKLElBQWUsQ0FBZixDQURQO0FBRVAsVUFBSSxRQUFXLElBQUksS0FBSixTQUFhLElBQUksT0FBSixTQUFlLElBQUksSUFBSixTQUFZLElBQUksT0FBSixDQUZoRDs7QUFJUCxhQUFPLEtBQUssSUFBTCxjQUFxQixlQUFyQixFQUNKLElBREksQ0FDQyxVQUFDLE1BQUQsRUFBWTtBQUNoQixlQUFPLE9BQVAsR0FBaUIsT0FBTyxJQUFQLENBREQ7QUFFaEIsZUFBTyxPQUFPLElBQVAsQ0FGUztBQUdoQixlQUFPLE1BQVAsQ0FIZ0I7T0FBWixDQURSLENBSk87Ozs7MkJBWUYsS0FBSztBQUNWLFVBQUksU0FBUztBQUNYLGlDQUF5QixJQUFJLE9BQUosSUFBZSxFQUFmO0FBQ3pCLDhCQUF5QixJQUFJLElBQUosSUFBWSxFQUFaO0FBQ3pCLG9CQUF5QixJQUFJLEtBQUosSUFBYSxFQUFiO0FBQ3pCLGlCQUF5QixJQUFJLE9BQUosSUFBZSxDQUFmO0FBQ3pCLGlCQUF5QixJQUFJLE9BQUosSUFBZSxFQUFmO0FBQ3pCLGNBQXlCLElBQUksSUFBSixJQUFZLEVBQVo7T0FOdkIsQ0FETTs7QUFVVixVQUFJLFFBQVEsc0JBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBUixDQVZNOztBQVlWLGFBQU8sS0FBSyxJQUFMLG1CQUEwQixLQUExQixFQUNKLElBREksQ0FDQyxVQUFDLE1BQUQsRUFBWTtBQUNoQixlQUFPLE9BQVAsR0FBaUIsT0FBTyxJQUFQLENBQVksUUFBWixDQUREO0FBRWhCLGVBQU8sT0FBTyxJQUFQLENBRlM7QUFHaEIsZUFBTyxNQUFQLENBSGdCO09BQVosQ0FEUixDQVpVOzs7O1NBbkNSOzs7a0JBd0RTIiwiZmlsZSI6InByb2dyYW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgUHJvZ3JhbSBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgYWxsKG9wdCkge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBmaXJzdF9lZmZlY3RpdmVfcXVhcnRlcjogb3B0LnF1YXJ0ZXIgfHwgJycsXG4gICAgICBmaXJzdF9lZmZlY3RpdmVfeWVhcjogICAgb3B0LnllYXIgfHwgJycsXG4gICAgICBtYWpvcl9hYmJyOiAgICAgICAgICAgICAgb3B0Lm1ham9yIHx8ICcnLFxuICAgICAgcGF0aHdheTogICAgICAgICAgICAgICAgIG9wdC5wYXRod2F5IHx8IDBcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBwcm9ncmFtLmpzb24/JHtxdWVyeX1gKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXN1bHQucHJvZ3JhbSA9IHJlc3VsdC5kYXRhLlByb2dyYW1zO1xuICAgICAgICBkZWxldGUgcmVzdWx0LmRhdGE7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldChvcHQpIHtcbiAgICBvcHQucGF0aHdheSA9IG9wdC5wYXRod2F5IHx8IDA7XG4gICAgbGV0IHF1ZXJ5ID0gYCR7b3B0Lm1ham9yfSwke29wdC5wYXRod2F5fSwke29wdC55ZWFyfSwke29wdC5xdWFydGVyfWA7XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBwcm9ncmFtLyR7cXVlcnl9Lmpzb25gKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXN1bHQucHJvZ3JhbSA9IHJlc3VsdC5kYXRhO1xuICAgICAgICBkZWxldGUgcmVzdWx0LmRhdGE7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaChvcHQpIHtcbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgZmlyc3RfZWZmZWN0aXZlX3F1YXJ0ZXI6IG9wdC5xdWFydGVyIHx8ICcnLFxuICAgICAgZmlyc3RfZWZmZWN0aXZlX3llYXI6ICAgIG9wdC55ZWFyIHx8ICcnLFxuICAgICAgbWFqb3JfYWJicjogICAgICAgICAgICAgIG9wdC5tYWpvciB8fCAnJyxcbiAgICAgIHBhdGh3YXk6ICAgICAgICAgICAgICAgICBvcHQucGF0aHdheSB8fCAwLFxuICAgICAgcXVhcnRlcjogICAgICAgICAgICAgICAgIG9wdC5xdWFydGVyIHx8ICcnLFxuICAgICAgeWVhcjogICAgICAgICAgICAgICAgICAgIG9wdC55ZWFyIHx8ICcnXG4gICAgfTtcblxuICAgIGxldCBxdWVyeSA9IHFzLnN0cmluZ2lmeShwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2dldChgcHJvZ3JhbS5qc29uPyR7cXVlcnl9YClcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgcmVzdWx0LnByb2dyYW0gPSByZXN1bHQuZGF0YS5Qcm9ncmFtcztcbiAgICAgICAgZGVsZXRlIHJlc3VsdC5kYXRhO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3JhbTtcbiJdfQ==