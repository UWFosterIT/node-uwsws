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

var Enrollment = function (_Service) {
  _inherits(Enrollment, _Service);

  function Enrollment(config) {
    _classCallCheck(this, Enrollment);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Enrollment).call(this, config));
  }

  _createClass(Enrollment, [{
    key: 'get',
    value: function get(opt, cb) {
      var verbose = opt.verbose || '';
      var query = opt.year + ',' + opt.quarter + ',' + opt.regid;

      this._get('enrollment/' + query + '.json?verbose=' + verbose, cb);
      return;
    }
  }, {
    key: 'search',
    value: function search(opt, cb) {
      var params = {
        changed_since_date: opt.changeDate || '',
        reg_id: opt.regid || '',
        transcriptable_course: opt.transcriptable || '',
        verbose: opt.verbose || ''
      };

      var query = _queryString2.default.stringify(params);

      this._get('enrollment.json?' + query, cb);
      return;
    }
  }]);

  return Enrollment;
}(_service2.default);

exports.default = Enrollment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2Vucm9sbG1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR007OztBQUNKLFdBREksVUFDSixDQUFZLE1BQVosRUFBb0I7MEJBRGhCLFlBQ2dCOztrRUFEaEIsdUJBRUksU0FEWTtHQUFwQjs7ZUFESTs7d0JBS0EsS0FBSyxJQUFJO0FBQ1gsVUFBSSxVQUFVLElBQUksT0FBSixJQUFlLEVBQWYsQ0FESDtBQUVYLFVBQUksUUFBYSxJQUFJLElBQUosU0FBWSxJQUFJLE9BQUosU0FBZSxJQUFJLEtBQUosQ0FGakM7O0FBSVgsV0FBSyxJQUFMLGlCQUF3QiwyQkFBc0IsT0FBOUMsRUFBeUQsRUFBekQsRUFKVztBQUtYLGFBTFc7Ozs7MkJBUU4sS0FBSyxJQUFJO0FBQ2QsVUFBSSxTQUFTO0FBQ1gsNEJBQXVCLElBQUksVUFBSixJQUFzQixFQUF0QjtBQUN2QixnQkFBdUIsSUFBSSxLQUFKLElBQXNCLEVBQXRCO0FBQ3ZCLCtCQUF1QixJQUFJLGNBQUosSUFBc0IsRUFBdEI7QUFDdkIsaUJBQXVCLElBQUksT0FBSixJQUFzQixFQUF0QjtPQUpyQixDQURVOztBQVFkLFVBQUksUUFBUSxzQkFBRyxTQUFILENBQWEsTUFBYixDQUFSLENBUlU7O0FBVWQsV0FBSyxJQUFMLHNCQUE2QixLQUE3QixFQUFzQyxFQUF0QyxFQVZjO0FBV2QsYUFYYzs7OztTQWJaOzs7a0JBNEJTIiwiZmlsZSI6ImVucm9sbG1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgRW5yb2xsbWVudCBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgZ2V0KG9wdCwgY2IpIHtcbiAgICBsZXQgdmVyYm9zZSA9IG9wdC52ZXJib3NlIHx8ICcnO1xuICAgIGxldCBxdWVyeSAgID0gYCR7b3B0LnllYXJ9LCR7b3B0LnF1YXJ0ZXJ9LCR7b3B0LnJlZ2lkfWA7XG5cbiAgICB0aGlzLl9nZXQoYGVucm9sbG1lbnQvJHtxdWVyeX0uanNvbj92ZXJib3NlPSR7dmVyYm9zZX1gLCBjYik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc2VhcmNoKG9wdCwgY2IpIHtcbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgY2hhbmdlZF9zaW5jZV9kYXRlOiAgICBvcHQuY2hhbmdlRGF0ZSAgICAgfHwgJycsXG4gICAgICByZWdfaWQ6ICAgICAgICAgICAgICAgIG9wdC5yZWdpZCAgICAgICAgICB8fCAnJyxcbiAgICAgIHRyYW5zY3JpcHRhYmxlX2NvdXJzZTogb3B0LnRyYW5zY3JpcHRhYmxlIHx8ICcnLFxuICAgICAgdmVyYm9zZTogICAgICAgICAgICAgICBvcHQudmVyYm9zZSAgICAgICAgfHwgJydcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICB0aGlzLl9nZXQoYGVucm9sbG1lbnQuanNvbj8ke3F1ZXJ5fWAsIGNiKTtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW5yb2xsbWVudDtcbiJdfQ==