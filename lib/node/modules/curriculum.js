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

var Curriculum = function (_Service) {
  (0, _inherits3.default)(Curriculum, _Service);

  function Curriculum(config) {
    (0, _classCallCheck3.default)(this, Curriculum);
    return (0, _possibleConstructorReturn3.default)(this, (Curriculum.__proto__ || (0, _getPrototypeOf2.default)(Curriculum)).call(this, config));
  }

  (0, _createClass3.default)(Curriculum, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2N1cnJpY3VsdW0uanMiXSwibmFtZXMiOlsiQ3VycmljdWx1bSIsImNvbmZpZyIsIm9wdCIsInBhcmFtcyIsImNvbGxlZ2VfYWJicmV2aWF0aW9uIiwiY29sbGVnZSIsImRlcGFydG1lbnRfYWJicmV2aWF0aW9uIiwiZGVwdCIsImZ1dHVyZV90ZXJtcyIsImZ1dHVyZSIsInF1YXJ0ZXIiLCJ5ZWFyIiwicXVlcnkiLCJzdHJpbmdpZnkiLCJfZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztJQUVNQSxVOzs7QUFDSixzQkFBWUMsTUFBWixFQUFvQjtBQUFBO0FBQUEseUlBQ1pBLE1BRFk7QUFFbkI7Ozs7MkJBRU1DLEcsRUFBSzs7QUFFVixVQUFJQyxTQUFTO0FBQ1hDLDhCQUF5QkYsSUFBSUcsT0FBSixJQUFlLEVBRDdCO0FBRVhDLGlDQUF5QkosSUFBSUssSUFBSixJQUFZLEVBRjFCO0FBR1hDLHNCQUF5Qk4sSUFBSU8sTUFBSixJQUFjLENBSDVCO0FBSVhDLGlCQUF5QlIsSUFBSVEsT0FBSixJQUFlLEVBSjdCO0FBS1hDLGNBQXlCVCxJQUFJUyxJQUFKLElBQVk7QUFMMUIsT0FBYjs7QUFRQSxVQUFJQyxRQUFRLHNCQUFHQyxTQUFILENBQWFWLE1BQWIsQ0FBWjs7QUFFQSxhQUFPLEtBQUtXLElBQUwsc0JBQTZCRixLQUE3QixDQUFQO0FBQ0Q7Ozs7O2tCQUdZWixVIiwiZmlsZSI6ImN1cnJpY3VsdW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgQ3VycmljdWx1bSBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgc2VhcmNoKG9wdCkge1xuXG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIGNvbGxlZ2VfYWJicmV2aWF0aW9uOiAgICBvcHQuY29sbGVnZSB8fCAnJyxcbiAgICAgIGRlcGFydG1lbnRfYWJicmV2aWF0aW9uOiBvcHQuZGVwdCB8fCAnJyxcbiAgICAgIGZ1dHVyZV90ZXJtczogICAgICAgICAgICBvcHQuZnV0dXJlIHx8IDAsXG4gICAgICBxdWFydGVyOiAgICAgICAgICAgICAgICAgb3B0LnF1YXJ0ZXIgfHwgJycsXG4gICAgICB5ZWFyOiAgICAgICAgICAgICAgICAgICAgb3B0LnllYXIgfHwgJydcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBjdXJyaWN1bHVtLmpzb24/JHtxdWVyeX1gKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXJyaWN1bHVtO1xuIl19