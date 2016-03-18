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
    value: function search(opt, cb) {

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2N1cnJpY3VsdW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTTs7O0FBQ0osV0FESSxVQUNKLENBQVksTUFBWixFQUFvQjswQkFEaEIsWUFDZ0I7O2tFQURoQix1QkFFSSxTQURZO0dBQXBCOztlQURJOzsyQkFLRyxLQUFLLElBQUk7O0FBRWQsVUFBSSxTQUFTO0FBQ1gsOEJBQXlCLElBQUksT0FBSixJQUFlLEVBQWY7QUFDekIsaUNBQXlCLElBQUksSUFBSixJQUFlLEVBQWY7QUFDekIsc0JBQXlCLElBQUksTUFBSixJQUFlLENBQWY7QUFDekIsaUJBQXlCLElBQUksT0FBSixJQUFlLEVBQWY7QUFDekIsY0FBeUIsSUFBSSxJQUFKLElBQWUsRUFBZjtPQUx2QixDQUZVOztBQVVkLFVBQUksUUFBUSxzQkFBRyxTQUFILENBQWEsTUFBYixDQUFSLENBVlU7O0FBWWQsYUFBTyxLQUFLLElBQUwsc0JBQTZCLEtBQTdCLEVBQ0osSUFESSxDQUNDLFVBQUMsTUFBRCxFQUFZO0FBQ2hCLGVBQU8sVUFBUCxHQUFvQixPQUFPLElBQVAsQ0FESjtBQUVoQixlQUFPLE9BQU8sSUFBUCxDQUZTO0FBR2hCLGVBQU8sTUFBUCxDQUhnQjtPQUFaLENBRFIsQ0FaYzs7OztTQUxaOzs7a0JBMEJTIiwiZmlsZSI6ImN1cnJpY3VsdW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgQ3VycmljdWx1bSBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgc2VhcmNoKG9wdCwgY2IpIHtcblxuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBjb2xsZWdlX2FiYnJldmlhdGlvbjogICAgb3B0LmNvbGxlZ2UgfHwgJycsXG4gICAgICBkZXBhcnRtZW50X2FiYnJldmlhdGlvbjogb3B0LmRlcHQgICAgfHwgJycsXG4gICAgICBmdXR1cmVfdGVybXM6ICAgICAgICAgICAgb3B0LmZ1dHVyZSAgfHwgMCxcbiAgICAgIHF1YXJ0ZXI6ICAgICAgICAgICAgICAgICBvcHQucXVhcnRlciB8fCAnJyxcbiAgICAgIHllYXI6ICAgICAgICAgICAgICAgICAgICBvcHQueWVhciAgICB8fCAnJyxcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBjdXJyaWN1bHVtLmpzb24/JHtxdWVyeX1gKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXN1bHQuY3VycmljdWx1bSA9IHJlc3VsdC5kYXRhO1xuICAgICAgICBkZWxldGUgcmVzdWx0LmRhdGE7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXJyaWN1bHVtO1xuIl19