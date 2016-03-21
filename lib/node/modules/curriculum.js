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

var Curriculum = function (_Service) {
  _inherits(Curriculum, _Service);

  function Curriculum(config) {
    _classCallCheck(this, Curriculum);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Curriculum).call(this, config));
  }

  _createClass(Curriculum, [{
    key: 'search',
    value: function search(opt) {

      var params = {
        college_abbreviation: opt.college || '',
        department_abbreviation: opt.dept || '',
        future_terms: opt.future || 0,
        quarter: opt.quarter || '',
        year: opt.year || ''
      };

      var query = _queryString2.default.stringify(params);

      return this._get('curriculum.json?' + query).then(function (result) {
        result.curriculum = result.data;
        delete result.data;
        return result;
      });
    }
  }]);

  return Curriculum;
}(_service2.default);

exports.default = Curriculum;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2N1cnJpY3VsdW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTTs7O0FBQ0osV0FESSxVQUNKLENBQVksTUFBWixFQUFvQjswQkFEaEIsWUFDZ0I7O2tFQURoQix1QkFFSSxTQURZO0dBQXBCOztlQURJOzsyQkFLRyxLQUFLOztBQUVWLFVBQUksU0FBUztBQUNYLDhCQUF5QixJQUFJLE9BQUosSUFBZSxFQUFmO0FBQ3pCLGlDQUF5QixJQUFJLElBQUosSUFBWSxFQUFaO0FBQ3pCLHNCQUF5QixJQUFJLE1BQUosSUFBYyxDQUFkO0FBQ3pCLGlCQUF5QixJQUFJLE9BQUosSUFBZSxFQUFmO0FBQ3pCLGNBQXlCLElBQUksSUFBSixJQUFZLEVBQVo7T0FMdkIsQ0FGTTs7QUFVVixVQUFJLFFBQVEsc0JBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBUixDQVZNOztBQVlWLGFBQU8sS0FBSyxJQUFMLHNCQUE2QixLQUE3QixFQUNKLElBREksQ0FDQyxVQUFDLE1BQUQsRUFBWTtBQUNoQixlQUFPLFVBQVAsR0FBb0IsT0FBTyxJQUFQLENBREo7QUFFaEIsZUFBTyxPQUFPLElBQVAsQ0FGUztBQUdoQixlQUFPLE1BQVAsQ0FIZ0I7T0FBWixDQURSLENBWlU7Ozs7U0FMUjs7O2tCQTBCUyIsImZpbGUiOiJjdXJyaWN1bHVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzICAgICAgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIEN1cnJpY3VsdW0gZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIHNlYXJjaChvcHQpIHtcblxuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBjb2xsZWdlX2FiYnJldmlhdGlvbjogICAgb3B0LmNvbGxlZ2UgfHwgJycsXG4gICAgICBkZXBhcnRtZW50X2FiYnJldmlhdGlvbjogb3B0LmRlcHQgfHwgJycsXG4gICAgICBmdXR1cmVfdGVybXM6ICAgICAgICAgICAgb3B0LmZ1dHVyZSB8fCAwLFxuICAgICAgcXVhcnRlcjogICAgICAgICAgICAgICAgIG9wdC5xdWFydGVyIHx8ICcnLFxuICAgICAgeWVhcjogICAgICAgICAgICAgICAgICAgIG9wdC55ZWFyIHx8ICcnXG4gICAgfTtcblxuICAgIGxldCBxdWVyeSA9IHFzLnN0cmluZ2lmeShwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2dldChgY3VycmljdWx1bS5qc29uPyR7cXVlcnl9YClcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgcmVzdWx0LmN1cnJpY3VsdW0gPSByZXN1bHQuZGF0YTtcbiAgICAgICAgZGVsZXRlIHJlc3VsdC5kYXRhO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VycmljdWx1bTtcbiJdfQ==