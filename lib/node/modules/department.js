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
    value: function search(opt) {
      var query = _queryString2.default.stringify({
        college_abbreviation: opt.abrev || '',
        future_terms: opt.future || 0,
        quarter: opt.quarter || '',
        sort_by: opt.sort || '',
        year: opt.year || ''
      });

      return this._get('department.json?' + query).then(function (result) {
        result.data = result.data.Departments;
        return result;
      });
    }
  }]);

  return Department;
}(_service2.default);

exports.default = Department;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2RlcGFydG1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxVO1lBQUEsVTs7QUFDSixXQURJLFVBQ0osQ0FBWSxNQUFaLEVBQW9CO0FBQUEsMEJBRGhCLFVBQ2dCOztBQUFBLGtFQURoQixVQUNnQixhQUNaLE1BRFk7QUFFbkI7O2VBSEcsVTs7MkJBS0csRyxFQUFLO0FBQ1YsVUFBSSxRQUFRLHNCQUFHLFNBQUgsQ0FBYTtBQUN2Qiw4QkFBc0IsSUFBSSxLQUFKLElBQWEsRUFEWjtBQUV2QixzQkFBc0IsSUFBSSxNQUFKLElBQWMsQ0FGYjtBQUd2QixpQkFBc0IsSUFBSSxPQUFKLElBQWUsRUFIZDtBQUl2QixpQkFBc0IsSUFBSSxJQUFKLElBQVksRUFKWDtBQUt2QixjQUFzQixJQUFJLElBQUosSUFBWTtBQUxYLE9BQWIsQ0FBWjs7QUFRQSxhQUFPLEtBQUssSUFBTCxzQkFBNkIsS0FBN0IsRUFDSixJQURJLENBQ0MsVUFBQyxNQUFELEVBQVk7QUFDaEIsZUFBTyxJQUFQLEdBQWMsT0FBTyxJQUFQLENBQVksV0FBMUI7QUFDQSxlQUFPLE1BQVA7QUFDRCxPQUpJLENBQVA7QUFLRDs7O1NBbkJHLFU7OztrQkFzQlMsVSIsImZpbGUiOiJkZXBhcnRtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzICAgICAgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIERlcGFydG1lbnQgZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIHNlYXJjaChvcHQpIHtcbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkoe1xuICAgICAgY29sbGVnZV9hYmJyZXZpYXRpb246IG9wdC5hYnJldiB8fCAnJyxcbiAgICAgIGZ1dHVyZV90ZXJtczogICAgICAgICBvcHQuZnV0dXJlIHx8IDAsXG4gICAgICBxdWFydGVyOiAgICAgICAgICAgICAgb3B0LnF1YXJ0ZXIgfHwgJycsXG4gICAgICBzb3J0X2J5OiAgICAgICAgICAgICAgb3B0LnNvcnQgfHwgJycsXG4gICAgICB5ZWFyOiAgICAgICAgICAgICAgICAgb3B0LnllYXIgfHwgJydcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLl9nZXQoYGRlcGFydG1lbnQuanNvbj8ke3F1ZXJ5fWApXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc3VsdC5kYXRhID0gcmVzdWx0LmRhdGEuRGVwYXJ0bWVudHM7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXBhcnRtZW50O1xuIl19