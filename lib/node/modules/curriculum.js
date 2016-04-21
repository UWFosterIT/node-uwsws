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

var Curriculum = function (_Service) {
  _inherits(Curriculum, _Service);

  function Curriculum(config) {
    _classCallCheck(this, Curriculum);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Curriculum).call(this, config));
  }

  _createClass(Curriculum, [{
    key: 'search',
    value: function search(opt) {

      var params = {
        college_abbreviation: opt.college || '',
        department_abbreviation: opt.dept || '',
        future_terms: opt.future || 0,
        quarter: opt.quarter || '',
        year: opt.year || ''
      };

      var query = _queryString2.default.stringify(params);

      return this._get('curriculum.json?' + query);
    }
  }]);

  return Curriculum;
}(_service2.default);

exports.default = Curriculum;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2N1cnJpY3VsdW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxVO1lBQUEsVTs7QUFDSixXQURJLFVBQ0osQ0FBWSxNQUFaLEVBQW9CO0FBQUEsMEJBRGhCLFVBQ2dCOztBQUFBLGtFQURoQixVQUNnQixhQUNaLE1BRFk7QUFFbkI7O2VBSEcsVTs7MkJBS0csRyxFQUFLOztBQUVWLFVBQUksU0FBUztBQUNYLDhCQUF5QixJQUFJLE9BQUosSUFBZSxFQUQ3QjtBQUVYLGlDQUF5QixJQUFJLElBQUosSUFBWSxFQUYxQjtBQUdYLHNCQUF5QixJQUFJLE1BQUosSUFBYyxDQUg1QjtBQUlYLGlCQUF5QixJQUFJLE9BQUosSUFBZSxFQUo3QjtBQUtYLGNBQXlCLElBQUksSUFBSixJQUFZO0FBTDFCLE9BQWI7O0FBUUEsVUFBSSxRQUFRLHNCQUFHLFNBQUgsQ0FBYSxNQUFiLENBQVo7O0FBRUEsYUFBTyxLQUFLLElBQUwsc0JBQTZCLEtBQTdCLENBQVA7QUFDRDs7O1NBbEJHLFU7OztrQkFxQlMsVSIsImZpbGUiOiJjdXJyaWN1bHVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzICAgICAgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIEN1cnJpY3VsdW0gZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIHNlYXJjaChvcHQpIHtcblxuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBjb2xsZWdlX2FiYnJldmlhdGlvbjogICAgb3B0LmNvbGxlZ2UgfHwgJycsXG4gICAgICBkZXBhcnRtZW50X2FiYnJldmlhdGlvbjogb3B0LmRlcHQgfHwgJycsXG4gICAgICBmdXR1cmVfdGVybXM6ICAgICAgICAgICAgb3B0LmZ1dHVyZSB8fCAwLFxuICAgICAgcXVhcnRlcjogICAgICAgICAgICAgICAgIG9wdC5xdWFydGVyIHx8ICcnLFxuICAgICAgeWVhcjogICAgICAgICAgICAgICAgICAgIG9wdC55ZWFyIHx8ICcnXG4gICAgfTtcblxuICAgIGxldCBxdWVyeSA9IHFzLnN0cmluZ2lmeShwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2dldChgY3VycmljdWx1bS5qc29uPyR7cXVlcnl9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VycmljdWx1bTtcbiJdfQ==