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

      return this._get('enrollment/' + query + '.json?verbose=' + verbose).then(function (result) {
        result.enrollment = result.data;
        delete result.data;
        return result;
      });
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

      return this._get('enrollment.json?' + query).then(function (result) {
        result.enrollment = result.data;
        delete result.data;
        return result;
      });
    }
  }]);

  return Enrollment;
}(_service2.default);

exports.default = Enrollment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2Vucm9sbG1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTTs7O0FBQ0osV0FESSxVQUNKLENBQVksTUFBWixFQUFvQjswQkFEaEIsWUFDZ0I7O2tFQURoQix1QkFFSSxTQURZO0dBQXBCOztlQURJOzt3QkFLQSxLQUFLO0FBQ1AsVUFBSSxVQUFVLElBQUksT0FBSixJQUFlLEVBQWYsQ0FEUDtBQUVQLFVBQUksUUFBVyxJQUFJLElBQUosU0FBWSxJQUFJLE9BQUosU0FBZSxJQUFJLEtBQUosQ0FGbkM7O0FBSVAsYUFBTyxLQUFLLElBQUwsaUJBQXdCLDJCQUFzQixPQUE5QyxFQUNKLElBREksQ0FDQyxVQUFDLE1BQUQsRUFBWTtBQUNoQixlQUFPLFVBQVAsR0FBb0IsT0FBTyxJQUFQLENBREo7QUFFaEIsZUFBTyxPQUFPLElBQVAsQ0FGUztBQUdoQixlQUFPLE1BQVAsQ0FIZ0I7T0FBWixDQURSLENBSk87Ozs7MkJBWUYsS0FBSztBQUNWLFVBQUksU0FBUztBQUNYLDRCQUF1QixJQUFJLFVBQUosSUFBa0IsRUFBbEI7QUFDdkIsZ0JBQXVCLElBQUksS0FBSixJQUFhLEVBQWI7QUFDdkIsK0JBQXVCLElBQUksY0FBSixJQUFzQixFQUF0QjtBQUN2QixpQkFBdUIsSUFBSSxPQUFKLElBQWUsRUFBZjtPQUpyQixDQURNOztBQVFWLFVBQUksUUFBUSxzQkFBRyxTQUFILENBQWEsTUFBYixDQUFSLENBUk07O0FBVVYsYUFBTyxLQUFLLElBQUwsc0JBQTZCLEtBQTdCLEVBQ0osSUFESSxDQUNDLFVBQUMsTUFBRCxFQUFZO0FBQ2hCLGVBQU8sVUFBUCxHQUFvQixPQUFPLElBQVAsQ0FESjtBQUVoQixlQUFPLE9BQU8sSUFBUCxDQUZTO0FBR2hCLGVBQU8sTUFBUCxDQUhnQjtPQUFaLENBRFIsQ0FWVTs7OztTQWpCUjs7O2tCQW9DUyIsImZpbGUiOiJlbnJvbGxtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzICAgICAgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIEVucm9sbG1lbnQgZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIGdldChvcHQpIHtcbiAgICBsZXQgdmVyYm9zZSA9IG9wdC52ZXJib3NlIHx8ICcnO1xuICAgIGxldCBxdWVyeSA9IGAke29wdC55ZWFyfSwke29wdC5xdWFydGVyfSwke29wdC5yZWdpZH1gO1xuXG4gICAgcmV0dXJuIHRoaXMuX2dldChgZW5yb2xsbWVudC8ke3F1ZXJ5fS5qc29uP3ZlcmJvc2U9JHt2ZXJib3NlfWApXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc3VsdC5lbnJvbGxtZW50ID0gcmVzdWx0LmRhdGE7XG4gICAgICAgIGRlbGV0ZSByZXN1bHQuZGF0YTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoKG9wdCkge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBjaGFuZ2VkX3NpbmNlX2RhdGU6ICAgIG9wdC5jaGFuZ2VEYXRlIHx8ICcnLFxuICAgICAgcmVnX2lkOiAgICAgICAgICAgICAgICBvcHQucmVnaWQgfHwgJycsXG4gICAgICB0cmFuc2NyaXB0YWJsZV9jb3Vyc2U6IG9wdC50cmFuc2NyaXB0YWJsZSB8fCAnJyxcbiAgICAgIHZlcmJvc2U6ICAgICAgICAgICAgICAgb3B0LnZlcmJvc2UgfHwgJydcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBlbnJvbGxtZW50Lmpzb24/JHtxdWVyeX1gKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXN1bHQuZW5yb2xsbWVudCA9IHJlc3VsdC5kYXRhO1xuICAgICAgICBkZWxldGUgcmVzdWx0LmRhdGE7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnJvbGxtZW50O1xuIl19