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
        sort_by: opt.sort || ''
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2RlcGFydG1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR007OztBQUNKLFdBREksVUFDSixDQUFZLE1BQVosRUFBb0I7MEJBRGhCLFlBQ2dCOztrRUFEaEIsdUJBRUksU0FEWTtHQUFwQjs7ZUFESTs7MkJBS0csS0FBSyxJQUFJO0FBQ2QsVUFBSSxRQUFRLHNCQUFHLFNBQUgsQ0FBYTtBQUN2Qiw4QkFBc0IsSUFBSSxLQUFKLElBQWEsRUFBYjtBQUN0QixpQkFBc0IsSUFBSSxJQUFKLElBQWEsRUFBYjtPQUZaLENBQVIsQ0FEVTs7QUFNZCxXQUFLLElBQUwsc0JBQTZCLEtBQTdCLEVBQXNDLFVBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxJQUFYLEVBQW9CO0FBQ3hELFdBQUcsR0FBSCxFQUFRLEdBQVIsRUFBYSxNQUFNLElBQU4sR0FBYSxLQUFLLFdBQUwsQ0FBMUIsQ0FEd0Q7T0FBcEIsQ0FBdEMsQ0FOYztBQVNkLGFBVGM7Ozs7U0FMWjs7O2tCQWtCUyIsImZpbGUiOiJkZXBhcnRtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzICAgICAgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIERlcGFydG1lbnQgZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIHNlYXJjaChvcHQsIGNiKSB7XG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHtcbiAgICAgIGNvbGxlZ2VfYWJicmV2aWF0aW9uOiBvcHQuYWJyZXYgfHwgJycsXG4gICAgICBzb3J0X2J5OiAgICAgICAgICAgICAgb3B0LnNvcnQgIHx8ICcnXG4gICAgfSk7XG5cbiAgICB0aGlzLl9nZXQoYGRlcGFydG1lbnQuanNvbj8ke3F1ZXJ5fWAsIChlcnIsIHJlcywgYm9keSkgPT4ge1xuICAgICAgY2IoZXJyLCByZXMsIGVyciA/IGJvZHkgOiBib2R5LkRlcGFydG1lbnRzKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVwYXJ0bWVudDtcbiJdfQ==