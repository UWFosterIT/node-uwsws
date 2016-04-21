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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2Vucm9sbG1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxVO1lBQUEsVTs7QUFDSixXQURJLFVBQ0osQ0FBWSxNQUFaLEVBQW9CO0FBQUEsMEJBRGhCLFVBQ2dCOztBQUFBLGtFQURoQixVQUNnQixhQUNaLE1BRFk7QUFFbkI7O2VBSEcsVTs7d0JBS0EsRyxFQUFLO0FBQ1AsVUFBSSxVQUFVLElBQUksT0FBSixJQUFlLEVBQTdCO0FBQ0EsVUFBSSxRQUFXLElBQUksSUFBZixTQUF1QixJQUFJLE9BQTNCLFNBQXNDLElBQUksS0FBOUM7O0FBRUEsYUFBTyxLQUFLLElBQUwsaUJBQXdCLEtBQXhCLHNCQUE4QyxPQUE5QyxDQUFQO0FBQ0Q7OzsyQkFFTSxHLEVBQUs7QUFDVixVQUFJLFNBQVM7QUFDWCw0QkFBdUIsSUFBSSxVQUFKLElBQWtCLEVBRDlCO0FBRVgsZ0JBQXVCLElBQUksS0FBSixJQUFhLEVBRnpCO0FBR1gsK0JBQXVCLElBQUksY0FBSixJQUFzQixFQUhsQztBQUlYLGlCQUF1QixJQUFJLE9BQUosSUFBZTtBQUozQixPQUFiOztBQU9BLFVBQUksUUFBUSxzQkFBRyxTQUFILENBQWEsTUFBYixDQUFaOztBQUVBLGFBQU8sS0FBSyxJQUFMLHNCQUE2QixLQUE3QixDQUFQO0FBQ0Q7OztTQXZCRyxVOzs7a0JBMEJTLFUiLCJmaWxlIjoiZW5yb2xsbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyAgICAgIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBFbnJvbGxtZW50IGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBnZXQob3B0KSB7XG4gICAgbGV0IHZlcmJvc2UgPSBvcHQudmVyYm9zZSB8fCAnJztcbiAgICBsZXQgcXVlcnkgPSBgJHtvcHQueWVhcn0sJHtvcHQucXVhcnRlcn0sJHtvcHQucmVnaWR9YDtcblxuICAgIHJldHVybiB0aGlzLl9nZXQoYGVucm9sbG1lbnQvJHtxdWVyeX0uanNvbj92ZXJib3NlPSR7dmVyYm9zZX1gKTtcbiAgfVxuXG4gIHNlYXJjaChvcHQpIHtcbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgY2hhbmdlZF9zaW5jZV9kYXRlOiAgICBvcHQuY2hhbmdlRGF0ZSB8fCAnJyxcbiAgICAgIHJlZ19pZDogICAgICAgICAgICAgICAgb3B0LnJlZ2lkIHx8ICcnLFxuICAgICAgdHJhbnNjcmlwdGFibGVfY291cnNlOiBvcHQudHJhbnNjcmlwdGFibGUgfHwgJycsXG4gICAgICB2ZXJib3NlOiAgICAgICAgICAgICAgIG9wdC52ZXJib3NlIHx8ICcnXG4gICAgfTtcblxuICAgIGxldCBxdWVyeSA9IHFzLnN0cmluZ2lmeShwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2dldChgZW5yb2xsbWVudC5qc29uPyR7cXVlcnl9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW5yb2xsbWVudDtcbiJdfQ==