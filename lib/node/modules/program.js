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

var Program = function (_Service) {
  (0, _inherits3.default)(Program, _Service);

  function Program(config) {
    (0, _classCallCheck3.default)(this, Program);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Program).call(this, config));
  }

  (0, _createClass3.default)(Program, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2dyYW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFFTSxPOzs7QUFDSixtQkFBWSxNQUFaLEVBQW9CO0FBQUE7QUFBQSw0R0FDWixNQURZO0FBRW5COzs7O3dCQUVHLEcsRUFBSztBQUNQLFVBQUksU0FBUztBQUNYLGlDQUF5QixJQUFJLE9BQUosSUFBZSxFQUQ3QjtBQUVYLDhCQUF5QixJQUFJLElBQUosSUFBWSxFQUYxQjtBQUdYLG9CQUF5QixJQUFJLEtBQUosSUFBYSxFQUgzQjtBQUlYLGlCQUF5QixJQUFJLE9BQUosSUFBZTtBQUo3QixPQUFiOztBQU9BLFVBQUksUUFBUSxzQkFBRyxTQUFILENBQWEsTUFBYixDQUFaOztBQUVBLGFBQU8sS0FBSyxJQUFMLG1CQUEwQixLQUExQixFQUNKLElBREksQ0FDQyxVQUFDLE1BQUQsRUFBWTtBQUNoQixlQUFPLElBQVAsR0FBYyxPQUFPLElBQVAsQ0FBWSxRQUExQjtBQUNBLGVBQU8sTUFBUDtBQUNELE9BSkksQ0FBUDtBQUtEOzs7d0JBRUcsRyxFQUFLO0FBQ1AsVUFBSSxPQUFKLEdBQWMsSUFBSSxPQUFKLElBQWUsQ0FBN0I7QUFDQSxVQUFJLFFBQVcsSUFBSSxLQUFmLFNBQXdCLElBQUksT0FBNUIsU0FBdUMsSUFBSSxJQUEzQyxTQUFtRCxJQUFJLE9BQTNEOztBQUVBLGFBQU8sS0FBSyxJQUFMLGNBQXFCLEtBQXJCLFdBQVA7QUFDRDs7OzJCQUVNLEcsRUFBSztBQUNWLFVBQUksU0FBUztBQUNYLGlDQUF5QixJQUFJLE9BQUosSUFBZSxFQUQ3QjtBQUVYLDhCQUF5QixJQUFJLElBQUosSUFBWSxFQUYxQjtBQUdYLG9CQUF5QixJQUFJLEtBQUosSUFBYSxFQUgzQjtBQUlYLGlCQUF5QixJQUFJLE9BQUosSUFBZSxDQUo3QjtBQUtYLGlCQUF5QixJQUFJLE9BQUosSUFBZSxFQUw3QjtBQU1YLGNBQXlCLElBQUksSUFBSixJQUFZO0FBTjFCLE9BQWI7O0FBU0EsVUFBSSxRQUFRLHNCQUFHLFNBQUgsQ0FBYSxNQUFiLENBQVo7O0FBRUEsYUFBTyxLQUFLLElBQUwsbUJBQTBCLEtBQTFCLEVBQ0osSUFESSxDQUNDLFVBQUMsTUFBRCxFQUFZO0FBQ2hCLGVBQU8sSUFBUCxHQUFjLE9BQU8sSUFBUCxDQUFZLFFBQTFCO0FBQ0EsZUFBTyxNQUFQO0FBQ0QsT0FKSSxDQUFQO0FBS0Q7Ozs7O2tCQUdZLE8iLCJmaWxlIjoicHJvZ3JhbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyAgICAgIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBQcm9ncmFtIGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBhbGwob3B0KSB7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIGZpcnN0X2VmZmVjdGl2ZV9xdWFydGVyOiBvcHQucXVhcnRlciB8fCAnJyxcbiAgICAgIGZpcnN0X2VmZmVjdGl2ZV95ZWFyOiAgICBvcHQueWVhciB8fCAnJyxcbiAgICAgIG1ham9yX2FiYnI6ICAgICAgICAgICAgICBvcHQubWFqb3IgfHwgJycsXG4gICAgICBwYXRod2F5OiAgICAgICAgICAgICAgICAgb3B0LnBhdGh3YXkgfHwgMFxuICAgIH07XG5cbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkocGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLl9nZXQoYHByb2dyYW0uanNvbj8ke3F1ZXJ5fWApXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc3VsdC5kYXRhID0gcmVzdWx0LmRhdGEuUHJvZ3JhbXM7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldChvcHQpIHtcbiAgICBvcHQucGF0aHdheSA9IG9wdC5wYXRod2F5IHx8IDA7XG4gICAgbGV0IHF1ZXJ5ID0gYCR7b3B0Lm1ham9yfSwke29wdC5wYXRod2F5fSwke29wdC55ZWFyfSwke29wdC5xdWFydGVyfWA7XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBwcm9ncmFtLyR7cXVlcnl9Lmpzb25gKTtcbiAgfVxuXG4gIHNlYXJjaChvcHQpIHtcbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgZmlyc3RfZWZmZWN0aXZlX3F1YXJ0ZXI6IG9wdC5xdWFydGVyIHx8ICcnLFxuICAgICAgZmlyc3RfZWZmZWN0aXZlX3llYXI6ICAgIG9wdC55ZWFyIHx8ICcnLFxuICAgICAgbWFqb3JfYWJicjogICAgICAgICAgICAgIG9wdC5tYWpvciB8fCAnJyxcbiAgICAgIHBhdGh3YXk6ICAgICAgICAgICAgICAgICBvcHQucGF0aHdheSB8fCAwLFxuICAgICAgcXVhcnRlcjogICAgICAgICAgICAgICAgIG9wdC5xdWFydGVyIHx8ICcnLFxuICAgICAgeWVhcjogICAgICAgICAgICAgICAgICAgIG9wdC55ZWFyIHx8ICcnXG4gICAgfTtcblxuICAgIGxldCBxdWVyeSA9IHFzLnN0cmluZ2lmeShwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2dldChgcHJvZ3JhbS5qc29uPyR7cXVlcnl9YClcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgcmVzdWx0LmRhdGEgPSByZXN1bHQuZGF0YS5Qcm9ncmFtcztcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyYW07XG4iXX0=