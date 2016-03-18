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
    value: function search(opt, cb) {
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

      this._get('registration.json?' + query, cb);
      return;
    }
  }]);

  return Registration;
}(_service2.default);

exports.default = Registration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3JlZ2lzdHJhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNOzs7QUFDSixXQURJLFlBQ0osQ0FBWSxNQUFaLEVBQW9COzBCQURoQixjQUNnQjs7a0VBRGhCLHlCQUVJLFNBRFk7R0FBcEI7Ozs7OztlQURJOzsyQkFPRyxLQUFLLElBQUk7QUFDZCxVQUFJLFNBQVM7QUFDWCw0QkFBeUIsSUFBSSxVQUFKLElBQXNCLEVBQXRCO0FBQ3pCLHVCQUF5QixJQUFJLE1BQUosSUFBc0IsRUFBdEI7QUFDekIsaUNBQXlCLElBQUksVUFBSixJQUFzQixFQUF0QjtBQUN6QiwyQkFBeUIsSUFBSSxVQUFKLElBQXNCLEVBQXRCO0FBQ3pCLG1CQUF5QixJQUFJLE1BQUosSUFBc0IsRUFBdEI7QUFDekIsbUJBQXlCLElBQUksSUFBSixJQUFzQixFQUF0QjtBQUN6QixvQkFBeUIsSUFBSSxLQUFKLElBQXNCLEVBQXRCO0FBQ3pCLGlCQUF5QixJQUFJLE9BQUosSUFBc0IsRUFBdEI7QUFDekIsZ0JBQXlCLElBQUksS0FBSixJQUFzQixFQUF0QjtBQUN6QixvQkFBeUIsSUFBSSxPQUFKLElBQXNCLEVBQXRCO0FBQ3pCLCtCQUF5QixJQUFJLGNBQUosSUFBc0IsRUFBdEI7QUFDekIsaUJBQXlCLElBQXpCO0FBQ0EsY0FBeUIsSUFBSSxJQUFKLElBQXNCLEVBQXRCO09BYnZCLENBRFU7O0FBaUJkLFVBQUksUUFBUSxzQkFBRyxTQUFILENBQWEsTUFBYixDQUFSLENBakJVOztBQW1CZCxXQUFLLElBQUwsd0JBQStCLEtBQS9CLEVBQXdDLEVBQXhDLEVBbkJjO0FBb0JkLGFBcEJjOzs7O1NBUFo7OztrQkErQlMiLCJmaWxlIjoicmVnaXN0cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzICAgICAgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIFJlZ2lzdHJhdGlvbiBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgLy8gZm9yY2luZyB2ZXJib3NlIGFuZCBqdXN0IHRoZSBvbmUgZW5kcG9pbnQgcGVyIHRoZWlyIG5vdGVzIGF0IHRoZSB3aWtpXG4gIC8vIGh0dHBzOi8vd2lraS5jYWMud2FzaGluZ3Rvbi5lZHUvZGlzcGxheS9TV1MvUmVnaXN0cmF0aW9uK1NlYXJjaCtSZXNvdXJjZSt2NVxuICBzZWFyY2gob3B0LCBjYikge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBjaGFuZ2VkX3NpbmNlX2RhdGU6ICAgICAgb3B0LmNoYW5nZURhdGUgICAgIHx8ICcnLFxuICAgICAgY291cnNlX251bWJlcjogICAgICAgICAgIG9wdC5jb3Vyc2UgICAgICAgICB8fCAnJyxcbiAgICAgIGN1cnJpY3VsdW1fYWJicmV2aWF0aW9uOiBvcHQuY3VycmljdWx1bSAgICAgfHwgJycsXG4gICAgICBpbnN0cnVjdG9yX3JlZ19pZDogICAgICAgb3B0Lmluc3RydWN0b3IgICAgIHx8ICcnLFxuICAgICAgaXNfYWN0aXZlOiAgICAgICAgICAgICAgIG9wdC5hY3RpdmUgICAgICAgICB8fCAnJyxcbiAgICAgIHBhZ2Vfc2l6ZTogICAgICAgICAgICAgICBvcHQuc2l6ZSAgICAgICAgICAgfHwgJycsXG4gICAgICBwYWdlX3N0YXJ0OiAgICAgICAgICAgICAgb3B0LnN0YXJ0ICAgICAgICAgIHx8ICcnLFxuICAgICAgcXVhcnRlcjogICAgICAgICAgICAgICAgIG9wdC5xdWFydGVyICAgICAgICB8fCAnJyxcbiAgICAgIHJlZ19pZDogICAgICAgICAgICAgICAgICBvcHQucmVnaWQgICAgICAgICAgfHwgJycsXG4gICAgICBzZWN0aW9uX2lkOiAgICAgICAgICAgICAgb3B0LnNlY3Rpb24gICAgICAgIHx8ICcnLFxuICAgICAgdHJhbnNjcmlwdGFibGVfY291cnNlOiAgIG9wdC50cmFuc2NyaXB0YWJsZSB8fCAnJyxcbiAgICAgIHZlcmJvc2U6ICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgeWVhcjogICAgICAgICAgICAgICAgICAgIG9wdC55ZWFyICAgICAgICAgICB8fCAnJ1xuICAgIH07XG5cbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkocGFyYW1zKTtcblxuICAgIHRoaXMuX2dldChgcmVnaXN0cmF0aW9uLmpzb24/JHtxdWVyeX1gLCBjYik7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbjtcbiJdfQ==