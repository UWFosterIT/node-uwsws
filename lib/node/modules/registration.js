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
    return (0, _possibleConstructorReturn3.default)(this, (Registration.__proto__ || (0, _getPrototypeOf2.default)(Registration)).call(this, config));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3JlZ2lzdHJhdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWdpc3RyYXRpb24iLCJjb25maWciLCJvcHQiLCJwYXJhbXMiLCJjaGFuZ2VkX3NpbmNlX2RhdGUiLCJjaGFuZ2VEYXRlIiwiY291cnNlX251bWJlciIsImNvdXJzZSIsImN1cnJpY3VsdW1fYWJicmV2aWF0aW9uIiwiY3VycmljdWx1bSIsImluc3RydWN0b3JfcmVnX2lkIiwiaW5zdHJ1Y3RvciIsImlzX2FjdGl2ZSIsImFjdGl2ZSIsInBhZ2Vfc2l6ZSIsInNpemUiLCJwYWdlX3N0YXJ0Iiwic3RhcnQiLCJxdWFydGVyIiwicmVnX2lkIiwicmVnaWQiLCJzZWN0aW9uX2lkIiwic2VjdGlvbiIsInRyYW5zY3JpcHRhYmxlX2NvdXJzZSIsInRyYW5zY3JpcHRhYmxlIiwidmVyYm9zZSIsInllYXIiLCJxdWVyeSIsInN0cmluZ2lmeSIsIl9nZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRU1BLFk7OztBQUNKLHdCQUFZQyxNQUFaLEVBQW9CO0FBQUE7QUFBQSw2SUFDWkEsTUFEWTtBQUVuQjs7QUFFRDtBQUNBOzs7OzsyQkFDT0MsRyxFQUFLO0FBQ1YsVUFBSUMsU0FBUztBQUNYQyw0QkFBeUJGLElBQUlHLFVBQUosSUFBc0IsRUFEcEM7QUFFWEMsdUJBQXlCSixJQUFJSyxNQUFKLElBQXNCLEVBRnBDO0FBR1hDLGlDQUF5Qk4sSUFBSU8sVUFBSixJQUFzQixFQUhwQztBQUlYQywyQkFBeUJSLElBQUlTLFVBQUosSUFBc0IsRUFKcEM7QUFLWEMsbUJBQXlCVixJQUFJVyxNQUFKLElBQXNCLEVBTHBDO0FBTVhDLG1CQUF5QlosSUFBSWEsSUFBSixJQUFzQixFQU5wQztBQU9YQyxvQkFBeUJkLElBQUllLEtBQUosSUFBc0IsRUFQcEM7QUFRWEMsaUJBQXlCaEIsSUFBSWdCLE9BQUosSUFBc0IsRUFScEM7QUFTWEMsZ0JBQXlCakIsSUFBSWtCLEtBQUosSUFBc0IsRUFUcEM7QUFVWEMsb0JBQXlCbkIsSUFBSW9CLE9BQUosSUFBc0IsRUFWcEM7QUFXWEMsK0JBQXlCckIsSUFBSXNCLGNBQUosSUFBc0IsRUFYcEM7QUFZWEMsaUJBQXlCLElBWmQ7QUFhWEMsY0FBeUJ4QixJQUFJd0IsSUFBSixJQUFzQjtBQWJwQyxPQUFiOztBQWdCQSxVQUFJQyxRQUFRLHNCQUFHQyxTQUFILENBQWF6QixNQUFiLENBQVo7O0FBRUEsYUFBTyxLQUFLMEIsSUFBTCx3QkFBK0JGLEtBQS9CLENBQVA7QUFDRDs7Ozs7a0JBR1kzQixZIiwiZmlsZSI6InJlZ2lzdHJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyAgICAgIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBSZWdpc3RyYXRpb24gZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIC8vIGZvcmNpbmcgdmVyYm9zZSBhbmQganVzdCB0aGUgb25lIGVuZHBvaW50IHBlciB0aGVpciBub3RlcyBhdCB0aGUgd2lraVxuICAvLyBodHRwczovL3dpa2kuY2FjLndhc2hpbmd0b24uZWR1L2Rpc3BsYXkvU1dTL1JlZ2lzdHJhdGlvbitTZWFyY2grUmVzb3VyY2UrdjVcbiAgc2VhcmNoKG9wdCkge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBjaGFuZ2VkX3NpbmNlX2RhdGU6ICAgICAgb3B0LmNoYW5nZURhdGUgICAgIHx8ICcnLFxuICAgICAgY291cnNlX251bWJlcjogICAgICAgICAgIG9wdC5jb3Vyc2UgICAgICAgICB8fCAnJyxcbiAgICAgIGN1cnJpY3VsdW1fYWJicmV2aWF0aW9uOiBvcHQuY3VycmljdWx1bSAgICAgfHwgJycsXG4gICAgICBpbnN0cnVjdG9yX3JlZ19pZDogICAgICAgb3B0Lmluc3RydWN0b3IgICAgIHx8ICcnLFxuICAgICAgaXNfYWN0aXZlOiAgICAgICAgICAgICAgIG9wdC5hY3RpdmUgICAgICAgICB8fCAnJyxcbiAgICAgIHBhZ2Vfc2l6ZTogICAgICAgICAgICAgICBvcHQuc2l6ZSAgICAgICAgICAgfHwgJycsXG4gICAgICBwYWdlX3N0YXJ0OiAgICAgICAgICAgICAgb3B0LnN0YXJ0ICAgICAgICAgIHx8ICcnLFxuICAgICAgcXVhcnRlcjogICAgICAgICAgICAgICAgIG9wdC5xdWFydGVyICAgICAgICB8fCAnJyxcbiAgICAgIHJlZ19pZDogICAgICAgICAgICAgICAgICBvcHQucmVnaWQgICAgICAgICAgfHwgJycsXG4gICAgICBzZWN0aW9uX2lkOiAgICAgICAgICAgICAgb3B0LnNlY3Rpb24gICAgICAgIHx8ICcnLFxuICAgICAgdHJhbnNjcmlwdGFibGVfY291cnNlOiAgIG9wdC50cmFuc2NyaXB0YWJsZSB8fCAnJyxcbiAgICAgIHZlcmJvc2U6ICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgeWVhcjogICAgICAgICAgICAgICAgICAgIG9wdC55ZWFyICAgICAgICAgICB8fCAnJ1xuICAgIH07XG5cbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkocGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLl9nZXQoYHJlZ2lzdHJhdGlvbi5qc29uPyR7cXVlcnl9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uO1xuIl19