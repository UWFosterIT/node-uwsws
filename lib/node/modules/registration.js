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

var Registration = function (_Service) {
  _inherits(Registration, _Service);

  function Registration(config) {
    _classCallCheck(this, Registration);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Registration).call(this, config));
  }

  // forcing verbose and just the one endpoint per their notes at the wiki
  // https://wiki.cac.washington.edu/display/SWS/Registration+Search+Resource+v5


  _createClass(Registration, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3JlZ2lzdHJhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNLFk7WUFBQSxZOztBQUNKLFdBREksWUFDSixDQUFZLE1BQVosRUFBb0I7QUFBQSwwQkFEaEIsWUFDZ0I7O0FBQUEsa0VBRGhCLFlBQ2dCLGFBQ1osTUFEWTtBQUVuQjs7Ozs7O2VBSEcsWTs7MkJBT0csRyxFQUFLO0FBQ1YsVUFBSSxTQUFTO0FBQ1gsNEJBQXlCLElBQUksVUFBSixJQUFzQixFQURwQztBQUVYLHVCQUF5QixJQUFJLE1BQUosSUFBc0IsRUFGcEM7QUFHWCxpQ0FBeUIsSUFBSSxVQUFKLElBQXNCLEVBSHBDO0FBSVgsMkJBQXlCLElBQUksVUFBSixJQUFzQixFQUpwQztBQUtYLG1CQUF5QixJQUFJLE1BQUosSUFBc0IsRUFMcEM7QUFNWCxtQkFBeUIsSUFBSSxJQUFKLElBQXNCLEVBTnBDO0FBT1gsb0JBQXlCLElBQUksS0FBSixJQUFzQixFQVBwQztBQVFYLGlCQUF5QixJQUFJLE9BQUosSUFBc0IsRUFScEM7QUFTWCxnQkFBeUIsSUFBSSxLQUFKLElBQXNCLEVBVHBDO0FBVVgsb0JBQXlCLElBQUksT0FBSixJQUFzQixFQVZwQztBQVdYLCtCQUF5QixJQUFJLGNBQUosSUFBc0IsRUFYcEM7QUFZWCxpQkFBeUIsSUFaZDtBQWFYLGNBQXlCLElBQUksSUFBSixJQUFzQjtBQWJwQyxPQUFiOztBQWdCQSxVQUFJLFFBQVEsc0JBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBWjs7QUFFQSxhQUFPLEtBQUssSUFBTCx3QkFBK0IsS0FBL0IsQ0FBUDtBQUNEOzs7U0EzQkcsWTs7O2tCQThCUyxZIiwiZmlsZSI6InJlZ2lzdHJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyAgICAgIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBSZWdpc3RyYXRpb24gZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIC8vIGZvcmNpbmcgdmVyYm9zZSBhbmQganVzdCB0aGUgb25lIGVuZHBvaW50IHBlciB0aGVpciBub3RlcyBhdCB0aGUgd2lraVxuICAvLyBodHRwczovL3dpa2kuY2FjLndhc2hpbmd0b24uZWR1L2Rpc3BsYXkvU1dTL1JlZ2lzdHJhdGlvbitTZWFyY2grUmVzb3VyY2UrdjVcbiAgc2VhcmNoKG9wdCkge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBjaGFuZ2VkX3NpbmNlX2RhdGU6ICAgICAgb3B0LmNoYW5nZURhdGUgICAgIHx8ICcnLFxuICAgICAgY291cnNlX251bWJlcjogICAgICAgICAgIG9wdC5jb3Vyc2UgICAgICAgICB8fCAnJyxcbiAgICAgIGN1cnJpY3VsdW1fYWJicmV2aWF0aW9uOiBvcHQuY3VycmljdWx1bSAgICAgfHwgJycsXG4gICAgICBpbnN0cnVjdG9yX3JlZ19pZDogICAgICAgb3B0Lmluc3RydWN0b3IgICAgIHx8ICcnLFxuICAgICAgaXNfYWN0aXZlOiAgICAgICAgICAgICAgIG9wdC5hY3RpdmUgICAgICAgICB8fCAnJyxcbiAgICAgIHBhZ2Vfc2l6ZTogICAgICAgICAgICAgICBvcHQuc2l6ZSAgICAgICAgICAgfHwgJycsXG4gICAgICBwYWdlX3N0YXJ0OiAgICAgICAgICAgICAgb3B0LnN0YXJ0ICAgICAgICAgIHx8ICcnLFxuICAgICAgcXVhcnRlcjogICAgICAgICAgICAgICAgIG9wdC5xdWFydGVyICAgICAgICB8fCAnJyxcbiAgICAgIHJlZ19pZDogICAgICAgICAgICAgICAgICBvcHQucmVnaWQgICAgICAgICAgfHwgJycsXG4gICAgICBzZWN0aW9uX2lkOiAgICAgICAgICAgICAgb3B0LnNlY3Rpb24gICAgICAgIHx8ICcnLFxuICAgICAgdHJhbnNjcmlwdGFibGVfY291cnNlOiAgIG9wdC50cmFuc2NyaXB0YWJsZSB8fCAnJyxcbiAgICAgIHZlcmJvc2U6ICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgeWVhcjogICAgICAgICAgICAgICAgICAgIG9wdC55ZWFyICAgICAgICAgICB8fCAnJ1xuICAgIH07XG5cbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkocGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLl9nZXQoYHJlZ2lzdHJhdGlvbi5qc29uPyR7cXVlcnl9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uO1xuIl19