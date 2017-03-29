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
    return (0, _possibleConstructorReturn3.default)(this, (Program.__proto__ || (0, _getPrototypeOf2.default)(Program)).call(this, config));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2dyYW0uanMiXSwibmFtZXMiOlsiUHJvZ3JhbSIsImNvbmZpZyIsIm9wdCIsInBhcmFtcyIsImZpcnN0X2VmZmVjdGl2ZV9xdWFydGVyIiwicXVhcnRlciIsImZpcnN0X2VmZmVjdGl2ZV95ZWFyIiwieWVhciIsIm1ham9yX2FiYnIiLCJtYWpvciIsInBhdGh3YXkiLCJxdWVyeSIsInN0cmluZ2lmeSIsIl9nZXQiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIlByb2dyYW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztJQUVNQSxPOzs7QUFDSixtQkFBWUMsTUFBWixFQUFvQjtBQUFBO0FBQUEsbUlBQ1pBLE1BRFk7QUFFbkI7Ozs7d0JBRUdDLEcsRUFBSztBQUNQLFVBQUlDLFNBQVM7QUFDWEMsaUNBQXlCRixJQUFJRyxPQUFKLElBQWUsRUFEN0I7QUFFWEMsOEJBQXlCSixJQUFJSyxJQUFKLElBQVksRUFGMUI7QUFHWEMsb0JBQXlCTixJQUFJTyxLQUFKLElBQWEsRUFIM0I7QUFJWEMsaUJBQXlCUixJQUFJUSxPQUFKLElBQWU7QUFKN0IsT0FBYjs7QUFPQSxVQUFJQyxRQUFRLHNCQUFHQyxTQUFILENBQWFULE1BQWIsQ0FBWjs7QUFFQSxhQUFPLEtBQUtVLElBQUwsbUJBQTBCRixLQUExQixFQUNKRyxJQURJLENBQ0MsVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCQSxlQUFPQyxJQUFQLEdBQWNELE9BQU9DLElBQVAsQ0FBWUMsUUFBMUI7QUFDQSxlQUFPRixNQUFQO0FBQ0QsT0FKSSxDQUFQO0FBS0Q7Ozt3QkFFR2IsRyxFQUFLO0FBQ1BBLFVBQUlRLE9BQUosR0FBY1IsSUFBSVEsT0FBSixJQUFlLENBQTdCO0FBQ0EsVUFBSUMsUUFBV1QsSUFBSU8sS0FBZixTQUF3QlAsSUFBSVEsT0FBNUIsU0FBdUNSLElBQUlLLElBQTNDLFNBQW1ETCxJQUFJRyxPQUEzRDs7QUFFQSxhQUFPLEtBQUtRLElBQUwsY0FBcUJGLEtBQXJCLFdBQVA7QUFDRDs7OzJCQUVNVCxHLEVBQUs7QUFDVixVQUFJQyxTQUFTO0FBQ1hDLGlDQUF5QkYsSUFBSUcsT0FBSixJQUFlLEVBRDdCO0FBRVhDLDhCQUF5QkosSUFBSUssSUFBSixJQUFZLEVBRjFCO0FBR1hDLG9CQUF5Qk4sSUFBSU8sS0FBSixJQUFhLEVBSDNCO0FBSVhDLGlCQUF5QlIsSUFBSVEsT0FBSixJQUFlLENBSjdCO0FBS1hMLGlCQUF5QkgsSUFBSUcsT0FBSixJQUFlLEVBTDdCO0FBTVhFLGNBQXlCTCxJQUFJSyxJQUFKLElBQVk7QUFOMUIsT0FBYjs7QUFTQSxVQUFJSSxRQUFRLHNCQUFHQyxTQUFILENBQWFULE1BQWIsQ0FBWjs7QUFFQSxhQUFPLEtBQUtVLElBQUwsbUJBQTBCRixLQUExQixFQUNKRyxJQURJLENBQ0MsVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCQSxlQUFPQyxJQUFQLEdBQWNELE9BQU9DLElBQVAsQ0FBWUMsUUFBMUI7QUFDQSxlQUFPRixNQUFQO0FBQ0QsT0FKSSxDQUFQO0FBS0Q7Ozs7O2tCQUdZZixPIiwiZmlsZSI6InByb2dyYW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgUHJvZ3JhbSBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgYWxsKG9wdCkge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBmaXJzdF9lZmZlY3RpdmVfcXVhcnRlcjogb3B0LnF1YXJ0ZXIgfHwgJycsXG4gICAgICBmaXJzdF9lZmZlY3RpdmVfeWVhcjogICAgb3B0LnllYXIgfHwgJycsXG4gICAgICBtYWpvcl9hYmJyOiAgICAgICAgICAgICAgb3B0Lm1ham9yIHx8ICcnLFxuICAgICAgcGF0aHdheTogICAgICAgICAgICAgICAgIG9wdC5wYXRod2F5IHx8IDBcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBwcm9ncmFtLmpzb24/JHtxdWVyeX1gKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXN1bHQuZGF0YSA9IHJlc3VsdC5kYXRhLlByb2dyYW1zO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSk7XG4gIH1cblxuICBnZXQob3B0KSB7XG4gICAgb3B0LnBhdGh3YXkgPSBvcHQucGF0aHdheSB8fCAwO1xuICAgIGxldCBxdWVyeSA9IGAke29wdC5tYWpvcn0sJHtvcHQucGF0aHdheX0sJHtvcHQueWVhcn0sJHtvcHQucXVhcnRlcn1gO1xuXG4gICAgcmV0dXJuIHRoaXMuX2dldChgcHJvZ3JhbS8ke3F1ZXJ5fS5qc29uYCk7XG4gIH1cblxuICBzZWFyY2gob3B0KSB7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIGZpcnN0X2VmZmVjdGl2ZV9xdWFydGVyOiBvcHQucXVhcnRlciB8fCAnJyxcbiAgICAgIGZpcnN0X2VmZmVjdGl2ZV95ZWFyOiAgICBvcHQueWVhciB8fCAnJyxcbiAgICAgIG1ham9yX2FiYnI6ICAgICAgICAgICAgICBvcHQubWFqb3IgfHwgJycsXG4gICAgICBwYXRod2F5OiAgICAgICAgICAgICAgICAgb3B0LnBhdGh3YXkgfHwgMCxcbiAgICAgIHF1YXJ0ZXI6ICAgICAgICAgICAgICAgICBvcHQucXVhcnRlciB8fCAnJyxcbiAgICAgIHllYXI6ICAgICAgICAgICAgICAgICAgICBvcHQueWVhciB8fCAnJ1xuICAgIH07XG5cbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkocGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLl9nZXQoYHByb2dyYW0uanNvbj8ke3F1ZXJ5fWApXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc3VsdC5kYXRhID0gcmVzdWx0LmRhdGEuUHJvZ3JhbXM7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmFtO1xuIl19