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

var College = function (_Service) {
  (0, _inherits3.default)(College, _Service);

  function College(config) {
    (0, _classCallCheck3.default)(this, College);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(College).call(this, config));
  }

  (0, _createClass3.default)(College, [{
    key: 'search',
    value: function search(opt) {

      var params = {
        campus_short_name: opt.name || '',
        future_terms: opt.future || 0,
        quarter: opt.quarter || '',
        year: opt.year || ''
      };

      var query = _queryString2.default.stringify(params);

      return this._get('college.json?' + query).then(function (result) {
        result.data = result.data.Colleges;
        return result;
      });
    }
  }]);
  return College;
}(_service2.default);

exports.default = College;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvbGxlZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFFTSxPOzs7QUFDSixtQkFBWSxNQUFaLEVBQW9CO0FBQUE7QUFBQSw0R0FDWixNQURZO0FBRW5COzs7OzJCQUVNLEcsRUFBSzs7QUFFVixVQUFJLFNBQVM7QUFDWCwyQkFBbUIsSUFBSSxJQUFKLElBQVksRUFEcEI7QUFFWCxzQkFBbUIsSUFBSSxNQUFKLElBQWMsQ0FGdEI7QUFHWCxpQkFBbUIsSUFBSSxPQUFKLElBQWUsRUFIdkI7QUFJWCxjQUFtQixJQUFJLElBQUosSUFBWTtBQUpwQixPQUFiOztBQU9BLFVBQUksUUFBUSxzQkFBRyxTQUFILENBQWEsTUFBYixDQUFaOztBQUVBLGFBQU8sS0FBSyxJQUFMLG1CQUEwQixLQUExQixFQUNKLElBREksQ0FDQyxVQUFDLE1BQUQsRUFBWTtBQUNoQixlQUFPLElBQVAsR0FBYyxPQUFPLElBQVAsQ0FBWSxRQUExQjtBQUNBLGVBQU8sTUFBUDtBQUNELE9BSkksQ0FBUDtBQUtEOzs7OztrQkFHWSxPIiwiZmlsZSI6ImNvbGxlZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgQ29sbGVnZSBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgc2VhcmNoKG9wdCkge1xuXG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIGNhbXB1c19zaG9ydF9uYW1lOiBvcHQubmFtZSB8fCAnJyxcbiAgICAgIGZ1dHVyZV90ZXJtczogICAgICBvcHQuZnV0dXJlIHx8IDAsXG4gICAgICBxdWFydGVyOiAgICAgICAgICAgb3B0LnF1YXJ0ZXIgfHwgJycsXG4gICAgICB5ZWFyOiAgICAgICAgICAgICAgb3B0LnllYXIgfHwgJydcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBjb2xsZWdlLmpzb24/JHtxdWVyeX1gKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXN1bHQuZGF0YSA9IHJlc3VsdC5kYXRhLkNvbGxlZ2VzO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sbGVnZTtcbiJdfQ==