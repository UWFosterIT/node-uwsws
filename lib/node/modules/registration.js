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

      return this._get('registration.json?' + query).then(function (result) {
        result.registration = result.data;
        delete result.data;
        return result;
      });
    }
  }]);

  return Registration;
}(_service2.default);

exports.default = Registration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3JlZ2lzdHJhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNOzs7QUFDSixXQURJLFlBQ0osQ0FBWSxNQUFaLEVBQW9COzBCQURoQixjQUNnQjs7a0VBRGhCLHlCQUVJLFNBRFk7R0FBcEI7Ozs7OztlQURJOzsyQkFPRyxLQUFLO0FBQ1YsVUFBSSxTQUFTO0FBQ1gsNEJBQXlCLElBQUksVUFBSixJQUFzQixFQUF0QjtBQUN6Qix1QkFBeUIsSUFBSSxNQUFKLElBQXNCLEVBQXRCO0FBQ3pCLGlDQUF5QixJQUFJLFVBQUosSUFBc0IsRUFBdEI7QUFDekIsMkJBQXlCLElBQUksVUFBSixJQUFzQixFQUF0QjtBQUN6QixtQkFBeUIsSUFBSSxNQUFKLElBQXNCLEVBQXRCO0FBQ3pCLG1CQUF5QixJQUFJLElBQUosSUFBc0IsRUFBdEI7QUFDekIsb0JBQXlCLElBQUksS0FBSixJQUFzQixFQUF0QjtBQUN6QixpQkFBeUIsSUFBSSxPQUFKLElBQXNCLEVBQXRCO0FBQ3pCLGdCQUF5QixJQUFJLEtBQUosSUFBc0IsRUFBdEI7QUFDekIsb0JBQXlCLElBQUksT0FBSixJQUFzQixFQUF0QjtBQUN6QiwrQkFBeUIsSUFBSSxjQUFKLElBQXNCLEVBQXRCO0FBQ3pCLGlCQUF5QixJQUF6QjtBQUNBLGNBQXlCLElBQUksSUFBSixJQUFzQixFQUF0QjtPQWJ2QixDQURNOztBQWlCVixVQUFJLFFBQVEsc0JBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBUixDQWpCTTs7QUFtQlYsYUFBTyxLQUFLLElBQUwsd0JBQStCLEtBQS9CLEVBQ0osSUFESSxDQUNDLFVBQUMsTUFBRCxFQUFZO0FBQ2hCLGVBQU8sWUFBUCxHQUFzQixPQUFPLElBQVAsQ0FETjtBQUVoQixlQUFPLE9BQU8sSUFBUCxDQUZTO0FBR2hCLGVBQU8sTUFBUCxDQUhnQjtPQUFaLENBRFIsQ0FuQlU7Ozs7U0FQUjs7O2tCQW1DUyIsImZpbGUiOiJyZWdpc3RyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgUmVnaXN0cmF0aW9uIGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICAvLyBmb3JjaW5nIHZlcmJvc2UgYW5kIGp1c3QgdGhlIG9uZSBlbmRwb2ludCBwZXIgdGhlaXIgbm90ZXMgYXQgdGhlIHdpa2lcbiAgLy8gaHR0cHM6Ly93aWtpLmNhYy53YXNoaW5ndG9uLmVkdS9kaXNwbGF5L1NXUy9SZWdpc3RyYXRpb24rU2VhcmNoK1Jlc291cmNlK3Y1XG4gIHNlYXJjaChvcHQpIHtcbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgY2hhbmdlZF9zaW5jZV9kYXRlOiAgICAgIG9wdC5jaGFuZ2VEYXRlICAgICB8fCAnJyxcbiAgICAgIGNvdXJzZV9udW1iZXI6ICAgICAgICAgICBvcHQuY291cnNlICAgICAgICAgfHwgJycsXG4gICAgICBjdXJyaWN1bHVtX2FiYnJldmlhdGlvbjogb3B0LmN1cnJpY3VsdW0gICAgIHx8ICcnLFxuICAgICAgaW5zdHJ1Y3Rvcl9yZWdfaWQ6ICAgICAgIG9wdC5pbnN0cnVjdG9yICAgICB8fCAnJyxcbiAgICAgIGlzX2FjdGl2ZTogICAgICAgICAgICAgICBvcHQuYWN0aXZlICAgICAgICAgfHwgJycsXG4gICAgICBwYWdlX3NpemU6ICAgICAgICAgICAgICAgb3B0LnNpemUgICAgICAgICAgIHx8ICcnLFxuICAgICAgcGFnZV9zdGFydDogICAgICAgICAgICAgIG9wdC5zdGFydCAgICAgICAgICB8fCAnJyxcbiAgICAgIHF1YXJ0ZXI6ICAgICAgICAgICAgICAgICBvcHQucXVhcnRlciAgICAgICAgfHwgJycsXG4gICAgICByZWdfaWQ6ICAgICAgICAgICAgICAgICAgb3B0LnJlZ2lkICAgICAgICAgIHx8ICcnLFxuICAgICAgc2VjdGlvbl9pZDogICAgICAgICAgICAgIG9wdC5zZWN0aW9uICAgICAgICB8fCAnJyxcbiAgICAgIHRyYW5zY3JpcHRhYmxlX2NvdXJzZTogICBvcHQudHJhbnNjcmlwdGFibGUgfHwgJycsXG4gICAgICB2ZXJib3NlOiAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgIHllYXI6ICAgICAgICAgICAgICAgICAgICBvcHQueWVhciAgICAgICAgICAgfHwgJydcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0KGByZWdpc3RyYXRpb24uanNvbj8ke3F1ZXJ5fWApXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc3VsdC5yZWdpc3RyYXRpb24gPSByZXN1bHQuZGF0YTtcbiAgICAgICAgZGVsZXRlIHJlc3VsdC5kYXRhO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uO1xuIl19