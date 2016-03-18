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

var College = function (_Service) {
  _inherits(College, _Service);

  function College(config) {
    _classCallCheck(this, College);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(College).call(this, config));
  }

  _createClass(College, [{
    key: 'search',
    value: function search(opt) {

      var params = {
        campus_short_name: opt.name || '',
        future_terms: opt.future || 0,
        quarter: opt.quarter || '',
        year: opt.year || ''
      };

      var query = _queryString2.default.stringify(params);

      return this._get('college.json?' + query).then(function (result) {
        result.college = result.data.Colleges;
        delete result.data;
        return result;
      });
    }
  }]);

  return College;
}(_service2.default);

exports.default = College;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvbGxlZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTTs7O0FBQ0osV0FESSxPQUNKLENBQVksTUFBWixFQUFvQjswQkFEaEIsU0FDZ0I7O2tFQURoQixvQkFFSSxTQURZO0dBQXBCOztlQURJOzsyQkFLRyxLQUFLOztBQUVWLFVBQUksU0FBUztBQUNYLDJCQUFtQixJQUFJLElBQUosSUFBWSxFQUFaO0FBQ25CLHNCQUFtQixJQUFJLE1BQUosSUFBYyxDQUFkO0FBQ25CLGlCQUFtQixJQUFJLE9BQUosSUFBZSxFQUFmO0FBQ25CLGNBQW1CLElBQUksSUFBSixJQUFZLEVBQVo7T0FKakIsQ0FGTTs7QUFTVixVQUFJLFFBQVEsc0JBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBUixDQVRNOztBQVdWLGFBQU8sS0FBSyxJQUFMLG1CQUEwQixLQUExQixFQUNKLElBREksQ0FDQyxVQUFDLE1BQUQsRUFBWTtBQUNoQixlQUFPLE9BQVAsR0FBaUIsT0FBTyxJQUFQLENBQVksUUFBWixDQUREO0FBRWhCLGVBQU8sT0FBTyxJQUFQLENBRlM7QUFHaEIsZUFBTyxNQUFQLENBSGdCO09BQVosQ0FEUixDQVhVOzs7O1NBTFI7OztrQkF5QlMiLCJmaWxlIjoiY29sbGVnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyAgICAgIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBDb2xsZWdlIGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBzZWFyY2gob3B0KSB7XG5cbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgY2FtcHVzX3Nob3J0X25hbWU6IG9wdC5uYW1lIHx8ICcnLFxuICAgICAgZnV0dXJlX3Rlcm1zOiAgICAgIG9wdC5mdXR1cmUgfHwgMCxcbiAgICAgIHF1YXJ0ZXI6ICAgICAgICAgICBvcHQucXVhcnRlciB8fCAnJyxcbiAgICAgIHllYXI6ICAgICAgICAgICAgICBvcHQueWVhciB8fCAnJyxcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBjb2xsZWdlLmpzb24/JHtxdWVyeX1gKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXN1bHQuY29sbGVnZSA9IHJlc3VsdC5kYXRhLkNvbGxlZ2VzO1xuICAgICAgICBkZWxldGUgcmVzdWx0LmRhdGE7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xsZWdlO1xuIl19