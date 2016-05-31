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

var Registration = function (_Service) {
  (0, _inherits3.default)(Registration, _Service);

  function Registration(config) {
    (0, _classCallCheck3.default)(this, Registration);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Registration).call(this, config));
  }

  // forcing verbose and just the one endpoint per their notes at the wiki
  // https://wiki.cac.washington.edu/display/SWS/Registration+Search+Resource+v5


  (0, _createClass3.default)(Registration, [{
    key: 'search',
    value: function search(opt) {
      var params = {
        changed_since_date: opt.changeDate || '',
        course_number: opt.course || '',
        curriculum_abbreviation: opt.curriculum || '',
        instructor_reg_id: opt.instructor || '',
        is_active: opt.active || '',
        page_size: opt.size || '',
        page_start: opt.start || '',
        quarter: opt.quarter || '',
        reg_id: opt.regid || '',
        section_id: opt.section || '',
        transcriptable_course: opt.transcriptable || '',
        verbose: true,
        year: opt.year || ''
      };

      var query = _queryString2.default.stringify(params);

      return this._get('registration.json?' + query);
    }
  }]);
  return Registration;
}(_service2.default);

exports.default = Registration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3JlZ2lzdHJhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztJQUVNLFk7OztBQUNKLHdCQUFZLE1BQVosRUFBb0I7QUFBQTtBQUFBLGlIQUNaLE1BRFk7QUFFbkI7Ozs7Ozs7OzJCQUlNLEcsRUFBSztBQUNWLFVBQUksU0FBUztBQUNYLDRCQUF5QixJQUFJLFVBQUosSUFBc0IsRUFEcEM7QUFFWCx1QkFBeUIsSUFBSSxNQUFKLElBQXNCLEVBRnBDO0FBR1gsaUNBQXlCLElBQUksVUFBSixJQUFzQixFQUhwQztBQUlYLDJCQUF5QixJQUFJLFVBQUosSUFBc0IsRUFKcEM7QUFLWCxtQkFBeUIsSUFBSSxNQUFKLElBQXNCLEVBTHBDO0FBTVgsbUJBQXlCLElBQUksSUFBSixJQUFzQixFQU5wQztBQU9YLG9CQUF5QixJQUFJLEtBQUosSUFBc0IsRUFQcEM7QUFRWCxpQkFBeUIsSUFBSSxPQUFKLElBQXNCLEVBUnBDO0FBU1gsZ0JBQXlCLElBQUksS0FBSixJQUFzQixFQVRwQztBQVVYLG9CQUF5QixJQUFJLE9BQUosSUFBc0IsRUFWcEM7QUFXWCwrQkFBeUIsSUFBSSxjQUFKLElBQXNCLEVBWHBDO0FBWVgsaUJBQXlCLElBWmQ7QUFhWCxjQUF5QixJQUFJLElBQUosSUFBc0I7QUFicEMsT0FBYjs7QUFnQkEsVUFBSSxRQUFRLHNCQUFHLFNBQUgsQ0FBYSxNQUFiLENBQVo7O0FBRUEsYUFBTyxLQUFLLElBQUwsd0JBQStCLEtBQS9CLENBQVA7QUFDRDs7Ozs7a0JBR1ksWSIsImZpbGUiOiJyZWdpc3RyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgUmVnaXN0cmF0aW9uIGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICAvLyBmb3JjaW5nIHZlcmJvc2UgYW5kIGp1c3QgdGhlIG9uZSBlbmRwb2ludCBwZXIgdGhlaXIgbm90ZXMgYXQgdGhlIHdpa2lcbiAgLy8gaHR0cHM6Ly93aWtpLmNhYy53YXNoaW5ndG9uLmVkdS9kaXNwbGF5L1NXUy9SZWdpc3RyYXRpb24rU2VhcmNoK1Jlc291cmNlK3Y1XG4gIHNlYXJjaChvcHQpIHtcbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgY2hhbmdlZF9zaW5jZV9kYXRlOiAgICAgIG9wdC5jaGFuZ2VEYXRlICAgICB8fCAnJyxcbiAgICAgIGNvdXJzZV9udW1iZXI6ICAgICAgICAgICBvcHQuY291cnNlICAgICAgICAgfHwgJycsXG4gICAgICBjdXJyaWN1bHVtX2FiYnJldmlhdGlvbjogb3B0LmN1cnJpY3VsdW0gICAgIHx8ICcnLFxuICAgICAgaW5zdHJ1Y3Rvcl9yZWdfaWQ6ICAgICAgIG9wdC5pbnN0cnVjdG9yICAgICB8fCAnJyxcbiAgICAgIGlzX2FjdGl2ZTogICAgICAgICAgICAgICBvcHQuYWN0aXZlICAgICAgICAgfHwgJycsXG4gICAgICBwYWdlX3NpemU6ICAgICAgICAgICAgICAgb3B0LnNpemUgICAgICAgICAgIHx8ICcnLFxuICAgICAgcGFnZV9zdGFydDogICAgICAgICAgICAgIG9wdC5zdGFydCAgICAgICAgICB8fCAnJyxcbiAgICAgIHF1YXJ0ZXI6ICAgICAgICAgICAgICAgICBvcHQucXVhcnRlciAgICAgICAgfHwgJycsXG4gICAgICByZWdfaWQ6ICAgICAgICAgICAgICAgICAgb3B0LnJlZ2lkICAgICAgICAgIHx8ICcnLFxuICAgICAgc2VjdGlvbl9pZDogICAgICAgICAgICAgIG9wdC5zZWN0aW9uICAgICAgICB8fCAnJyxcbiAgICAgIHRyYW5zY3JpcHRhYmxlX2NvdXJzZTogICBvcHQudHJhbnNjcmlwdGFibGUgfHwgJycsXG4gICAgICB2ZXJib3NlOiAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgIHllYXI6ICAgICAgICAgICAgICAgICAgICBvcHQueWVhciAgICAgICAgICAgfHwgJydcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0KGByZWdpc3RyYXRpb24uanNvbj8ke3F1ZXJ5fWApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbjtcbiJdfQ==