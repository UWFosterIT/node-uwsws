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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2RlcGFydG1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR007OztBQUNKLFdBREksVUFDSixDQUFZLE1BQVosRUFBb0I7MEJBRGhCLFlBQ2dCOztrRUFEaEIsdUJBRUksU0FEWTtHQUFwQjs7ZUFESTs7MkJBS0csS0FBSyxJQUFJO0FBQ2QsVUFBSSxRQUFRLHNCQUFHLFNBQUgsQ0FBYTtBQUN2Qiw4QkFBc0IsSUFBSSxLQUFKLElBQWUsRUFBZjtBQUN0QixzQkFBc0IsSUFBSSxNQUFKLElBQWUsQ0FBZjtBQUN0QixpQkFBc0IsSUFBSSxPQUFKLElBQWUsRUFBZjtBQUN0QixpQkFBc0IsSUFBSSxJQUFKLElBQWUsRUFBZjtBQUN0QixjQUFzQixJQUFJLElBQUosSUFBZSxFQUFmO09BTFosQ0FBUixDQURVOztBQVNkLFdBQUssSUFBTCxzQkFBNkIsS0FBN0IsRUFBc0MsVUFBQyxHQUFELEVBQU0sR0FBTixFQUFXLElBQVgsRUFBb0I7QUFDeEQsV0FBRyxHQUFILEVBQVEsR0FBUixFQUFhLE1BQU0sSUFBTixHQUFhLEtBQUssV0FBTCxDQUExQixDQUR3RDtPQUFwQixDQUF0QyxDQVRjO0FBWWQsYUFaYzs7OztTQUxaOzs7a0JBcUJTIiwiZmlsZSI6ImRlcGFydG1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgRGVwYXJ0bWVudCBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgc2VhcmNoKG9wdCwgY2IpIHtcbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkoe1xuICAgICAgY29sbGVnZV9hYmJyZXZpYXRpb246IG9wdC5hYnJldiAgIHx8ICcnLFxuICAgICAgZnV0dXJlX3Rlcm1zOiAgICAgICAgIG9wdC5mdXR1cmUgIHx8IDAsXG4gICAgICBxdWFydGVyOiAgICAgICAgICAgICAgb3B0LnF1YXJ0ZXIgfHwgJycsXG4gICAgICBzb3J0X2J5OiAgICAgICAgICAgICAgb3B0LnNvcnQgICAgfHwgJycsXG4gICAgICB5ZWFyOiAgICAgICAgICAgICAgICAgb3B0LnllYXIgICAgfHwgJydcbiAgICB9KTtcblxuICAgIHRoaXMuX2dldChgZGVwYXJ0bWVudC5qc29uPyR7cXVlcnl9YCwgKGVyciwgcmVzLCBib2R5KSA9PiB7XG4gICAgICBjYihlcnIsIHJlcywgZXJyID8gYm9keSA6IGJvZHkuRGVwYXJ0bWVudHMpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXBhcnRtZW50O1xuIl19