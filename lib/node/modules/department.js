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

var Department = function (_Service) {
  _inherits(Department, _Service);

  function Department(config) {
    _classCallCheck(this, Department);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Department).call(this, config));
  }

  _createClass(Department, [{
    key: 'search',
    value: function search(opt, cb) {
      var query = _queryString2.default.stringify({
        college_abbreviation: opt.abrev || '',
        future_terms: opt.future || 0,
        quarter: opt.quarter || '',
        sort_by: opt.sort || '',
        year: opt.year || ''
      });

      this._get('department.json?' + query, function (err, res, body) {
        cb(err, res, err ? body : body.Departments);
      });
      return;
    }
  }]);

  return Department;
}(_service2.default);

exports.default = Department;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2RlcGFydG1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTTs7O0FBQ0osV0FESSxVQUNKLENBQVksTUFBWixFQUFvQjswQkFEaEIsWUFDZ0I7O2tFQURoQix1QkFFSSxTQURZO0dBQXBCOztlQURJOzsyQkFLRyxLQUFLLElBQUk7QUFDZCxVQUFJLFFBQVEsc0JBQUcsU0FBSCxDQUFhO0FBQ3ZCLDhCQUFzQixJQUFJLEtBQUosSUFBZSxFQUFmO0FBQ3RCLHNCQUFzQixJQUFJLE1BQUosSUFBZSxDQUFmO0FBQ3RCLGlCQUFzQixJQUFJLE9BQUosSUFBZSxFQUFmO0FBQ3RCLGlCQUFzQixJQUFJLElBQUosSUFBZSxFQUFmO0FBQ3RCLGNBQXNCLElBQUksSUFBSixJQUFlLEVBQWY7T0FMWixDQUFSLENBRFU7O0FBU2QsV0FBSyxJQUFMLHNCQUE2QixLQUE3QixFQUFzQyxVQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsSUFBWCxFQUFvQjtBQUN4RCxXQUFHLEdBQUgsRUFBUSxHQUFSLEVBQWEsTUFBTSxJQUFOLEdBQWEsS0FBSyxXQUFMLENBQTFCLENBRHdEO09BQXBCLENBQXRDLENBVGM7QUFZZCxhQVpjOzs7O1NBTFo7OztrQkFxQlMiLCJmaWxlIjoiZGVwYXJ0bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyAgICAgIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBEZXBhcnRtZW50IGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBzZWFyY2gob3B0LCBjYikge1xuICAgIGxldCBxdWVyeSA9IHFzLnN0cmluZ2lmeSh7XG4gICAgICBjb2xsZWdlX2FiYnJldmlhdGlvbjogb3B0LmFicmV2ICAgfHwgJycsXG4gICAgICBmdXR1cmVfdGVybXM6ICAgICAgICAgb3B0LmZ1dHVyZSAgfHwgMCxcbiAgICAgIHF1YXJ0ZXI6ICAgICAgICAgICAgICBvcHQucXVhcnRlciB8fCAnJyxcbiAgICAgIHNvcnRfYnk6ICAgICAgICAgICAgICBvcHQuc29ydCAgICB8fCAnJyxcbiAgICAgIHllYXI6ICAgICAgICAgICAgICAgICBvcHQueWVhciAgICB8fCAnJ1xuICAgIH0pO1xuXG4gICAgdGhpcy5fZ2V0KGBkZXBhcnRtZW50Lmpzb24/JHtxdWVyeX1gLCAoZXJyLCByZXMsIGJvZHkpID0+IHtcbiAgICAgIGNiKGVyciwgcmVzLCBlcnIgPyBib2R5IDogYm9keS5EZXBhcnRtZW50cyk7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlcGFydG1lbnQ7XG4iXX0=