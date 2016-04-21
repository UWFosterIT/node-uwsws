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

var Program = function (_Service) {
  _inherits(Program, _Service);

  function Program(config) {
    _classCallCheck(this, Program);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Program).call(this, config));
  }

  _createClass(Program, [{
    key: 'all',
    value: function all(opt) {
      var params = {
        first_effective_quarter: opt.quarter || '',
        first_effective_year: opt.year || '',
        major_abbr: opt.major || '',
        pathway: opt.pathway || 0
      };

      var query = _queryString2.default.stringify(params);

      return this._get('program.json?' + query).then(function (result) {
        result.data = result.data.Programs;
        return result;
      });
    }
  }, {
    key: 'get',
    value: function get(opt) {
      opt.pathway = opt.pathway || 0;
      var query = opt.major + ',' + opt.pathway + ',' + opt.year + ',' + opt.quarter;

      return this._get('program/' + query + '.json');
    }
  }, {
    key: 'search',
    value: function search(opt) {
      var params = {
        first_effective_quarter: opt.quarter || '',
        first_effective_year: opt.year || '',
        major_abbr: opt.major || '',
        pathway: opt.pathway || 0,
        quarter: opt.quarter || '',
        year: opt.year || ''
      };

      var query = _queryString2.default.stringify(params);

      return this._get('program.json?' + query).then(function (result) {
        result.data = result.data.Programs;
        return result;
      });
    }
  }]);

  return Program;
}(_service2.default);

exports.default = Program;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2dyYW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxPO1lBQUEsTzs7QUFDSixXQURJLE9BQ0osQ0FBWSxNQUFaLEVBQW9CO0FBQUEsMEJBRGhCLE9BQ2dCOztBQUFBLGtFQURoQixPQUNnQixhQUNaLE1BRFk7QUFFbkI7O2VBSEcsTzs7d0JBS0EsRyxFQUFLO0FBQ1AsVUFBSSxTQUFTO0FBQ1gsaUNBQXlCLElBQUksT0FBSixJQUFlLEVBRDdCO0FBRVgsOEJBQXlCLElBQUksSUFBSixJQUFZLEVBRjFCO0FBR1gsb0JBQXlCLElBQUksS0FBSixJQUFhLEVBSDNCO0FBSVgsaUJBQXlCLElBQUksT0FBSixJQUFlO0FBSjdCLE9BQWI7O0FBT0EsVUFBSSxRQUFRLHNCQUFHLFNBQUgsQ0FBYSxNQUFiLENBQVo7O0FBRUEsYUFBTyxLQUFLLElBQUwsbUJBQTBCLEtBQTFCLEVBQ0osSUFESSxDQUNDLFVBQUMsTUFBRCxFQUFZO0FBQ2hCLGVBQU8sSUFBUCxHQUFjLE9BQU8sSUFBUCxDQUFZLFFBQTFCO0FBQ0EsZUFBTyxNQUFQO0FBQ0QsT0FKSSxDQUFQO0FBS0Q7Ozt3QkFFRyxHLEVBQUs7QUFDUCxVQUFJLE9BQUosR0FBYyxJQUFJLE9BQUosSUFBZSxDQUE3QjtBQUNBLFVBQUksUUFBVyxJQUFJLEtBQWYsU0FBd0IsSUFBSSxPQUE1QixTQUF1QyxJQUFJLElBQTNDLFNBQW1ELElBQUksT0FBM0Q7O0FBRUEsYUFBTyxLQUFLLElBQUwsY0FBcUIsS0FBckIsV0FBUDtBQUNEOzs7MkJBRU0sRyxFQUFLO0FBQ1YsVUFBSSxTQUFTO0FBQ1gsaUNBQXlCLElBQUksT0FBSixJQUFlLEVBRDdCO0FBRVgsOEJBQXlCLElBQUksSUFBSixJQUFZLEVBRjFCO0FBR1gsb0JBQXlCLElBQUksS0FBSixJQUFhLEVBSDNCO0FBSVgsaUJBQXlCLElBQUksT0FBSixJQUFlLENBSjdCO0FBS1gsaUJBQXlCLElBQUksT0FBSixJQUFlLEVBTDdCO0FBTVgsY0FBeUIsSUFBSSxJQUFKLElBQVk7QUFOMUIsT0FBYjs7QUFTQSxVQUFJLFFBQVEsc0JBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBWjs7QUFFQSxhQUFPLEtBQUssSUFBTCxtQkFBMEIsS0FBMUIsRUFDSixJQURJLENBQ0MsVUFBQyxNQUFELEVBQVk7QUFDaEIsZUFBTyxJQUFQLEdBQWMsT0FBTyxJQUFQLENBQVksUUFBMUI7QUFDQSxlQUFPLE1BQVA7QUFDRCxPQUpJLENBQVA7QUFLRDs7O1NBOUNHLE87OztrQkFpRFMsTyIsImZpbGUiOiJwcm9ncmFtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzICAgICAgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIFByb2dyYW0gZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIGFsbChvcHQpIHtcbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgZmlyc3RfZWZmZWN0aXZlX3F1YXJ0ZXI6IG9wdC5xdWFydGVyIHx8ICcnLFxuICAgICAgZmlyc3RfZWZmZWN0aXZlX3llYXI6ICAgIG9wdC55ZWFyIHx8ICcnLFxuICAgICAgbWFqb3JfYWJicjogICAgICAgICAgICAgIG9wdC5tYWpvciB8fCAnJyxcbiAgICAgIHBhdGh3YXk6ICAgICAgICAgICAgICAgICBvcHQucGF0aHdheSB8fCAwXG4gICAgfTtcblxuICAgIGxldCBxdWVyeSA9IHFzLnN0cmluZ2lmeShwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2dldChgcHJvZ3JhbS5qc29uPyR7cXVlcnl9YClcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgcmVzdWx0LmRhdGEgPSByZXN1bHQuZGF0YS5Qcm9ncmFtcztcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0KG9wdCkge1xuICAgIG9wdC5wYXRod2F5ID0gb3B0LnBhdGh3YXkgfHwgMDtcbiAgICBsZXQgcXVlcnkgPSBgJHtvcHQubWFqb3J9LCR7b3B0LnBhdGh3YXl9LCR7b3B0LnllYXJ9LCR7b3B0LnF1YXJ0ZXJ9YDtcblxuICAgIHJldHVybiB0aGlzLl9nZXQoYHByb2dyYW0vJHtxdWVyeX0uanNvbmApO1xuICB9XG5cbiAgc2VhcmNoKG9wdCkge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBmaXJzdF9lZmZlY3RpdmVfcXVhcnRlcjogb3B0LnF1YXJ0ZXIgfHwgJycsXG4gICAgICBmaXJzdF9lZmZlY3RpdmVfeWVhcjogICAgb3B0LnllYXIgfHwgJycsXG4gICAgICBtYWpvcl9hYmJyOiAgICAgICAgICAgICAgb3B0Lm1ham9yIHx8ICcnLFxuICAgICAgcGF0aHdheTogICAgICAgICAgICAgICAgIG9wdC5wYXRod2F5IHx8IDAsXG4gICAgICBxdWFydGVyOiAgICAgICAgICAgICAgICAgb3B0LnF1YXJ0ZXIgfHwgJycsXG4gICAgICB5ZWFyOiAgICAgICAgICAgICAgICAgICAgb3B0LnllYXIgfHwgJydcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBwcm9ncmFtLmpzb24/JHtxdWVyeX1gKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXN1bHQuZGF0YSA9IHJlc3VsdC5kYXRhLlByb2dyYW1zO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3JhbTtcbiJdfQ==