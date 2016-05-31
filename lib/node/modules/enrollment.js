'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _service = require('./service');

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Enrollment = function (_Service) {
  (0, _inherits3.default)(Enrollment, _Service);

  function Enrollment(config) {
    (0, _classCallCheck3.default)(this, Enrollment);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Enrollment).call(this, config));
  }

  (0, _createClass3.default)(Enrollment, [{
    key: 'get',
    value: function get(opt) {
      var verbose = opt.verbose || '';
      var query = opt.year + ',' + opt.quarter + ',' + opt.regid;

      return this._get('enrollment/' + query + '.json?verbose=' + verbose);
    }
  }, {
    key: 'search',
    value: function search(opt) {
      var params = {
        changed_since_date: opt.changeDate || '',
        reg_id: opt.regid || '',
        transcriptable_course: opt.transcriptable || '',
        verbose: opt.verbose || ''
      };

      var query = _queryString2.default.stringify(params);

      return this._get('enrollment.json?' + query);
    }
  }]);
  return Enrollment;
}(_service2.default);

exports.default = Enrollment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2Vucm9sbG1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFFTSxVOzs7QUFDSixzQkFBWSxNQUFaLEVBQW9CO0FBQUE7QUFBQSwrR0FDWixNQURZO0FBRW5COzs7O3dCQUVHLEcsRUFBSztBQUNQLFVBQUksVUFBVSxJQUFJLE9BQUosSUFBZSxFQUE3QjtBQUNBLFVBQUksUUFBVyxJQUFJLElBQWYsU0FBdUIsSUFBSSxPQUEzQixTQUFzQyxJQUFJLEtBQTlDOztBQUVBLGFBQU8sS0FBSyxJQUFMLGlCQUF3QixLQUF4QixzQkFBOEMsT0FBOUMsQ0FBUDtBQUNEOzs7MkJBRU0sRyxFQUFLO0FBQ1YsVUFBSSxTQUFTO0FBQ1gsNEJBQXVCLElBQUksVUFBSixJQUFrQixFQUQ5QjtBQUVYLGdCQUF1QixJQUFJLEtBQUosSUFBYSxFQUZ6QjtBQUdYLCtCQUF1QixJQUFJLGNBQUosSUFBc0IsRUFIbEM7QUFJWCxpQkFBdUIsSUFBSSxPQUFKLElBQWU7QUFKM0IsT0FBYjs7QUFPQSxVQUFJLFFBQVEsc0JBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBWjs7QUFFQSxhQUFPLEtBQUssSUFBTCxzQkFBNkIsS0FBN0IsQ0FBUDtBQUNEOzs7OztrQkFHWSxVIiwiZmlsZSI6ImVucm9sbG1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgRW5yb2xsbWVudCBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgZ2V0KG9wdCkge1xuICAgIGxldCB2ZXJib3NlID0gb3B0LnZlcmJvc2UgfHwgJyc7XG4gICAgbGV0IHF1ZXJ5ID0gYCR7b3B0LnllYXJ9LCR7b3B0LnF1YXJ0ZXJ9LCR7b3B0LnJlZ2lkfWA7XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBlbnJvbGxtZW50LyR7cXVlcnl9Lmpzb24/dmVyYm9zZT0ke3ZlcmJvc2V9YCk7XG4gIH1cblxuICBzZWFyY2gob3B0KSB7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIGNoYW5nZWRfc2luY2VfZGF0ZTogICAgb3B0LmNoYW5nZURhdGUgfHwgJycsXG4gICAgICByZWdfaWQ6ICAgICAgICAgICAgICAgIG9wdC5yZWdpZCB8fCAnJyxcbiAgICAgIHRyYW5zY3JpcHRhYmxlX2NvdXJzZTogb3B0LnRyYW5zY3JpcHRhYmxlIHx8ICcnLFxuICAgICAgdmVyYm9zZTogICAgICAgICAgICAgICBvcHQudmVyYm9zZSB8fCAnJ1xuICAgIH07XG5cbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkocGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLl9nZXQoYGVucm9sbG1lbnQuanNvbj8ke3F1ZXJ5fWApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVucm9sbG1lbnQ7XG4iXX0=