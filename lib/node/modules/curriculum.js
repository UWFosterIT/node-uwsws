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
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Curriculum).call(this, config));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2N1cnJpY3VsdW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFFTSxVOzs7QUFDSixzQkFBWSxNQUFaLEVBQW9CO0FBQUE7QUFBQSwrR0FDWixNQURZO0FBRW5COzs7OzJCQUVNLEcsRUFBSzs7QUFFVixVQUFJLFNBQVM7QUFDWCw4QkFBeUIsSUFBSSxPQUFKLElBQWUsRUFEN0I7QUFFWCxpQ0FBeUIsSUFBSSxJQUFKLElBQVksRUFGMUI7QUFHWCxzQkFBeUIsSUFBSSxNQUFKLElBQWMsQ0FINUI7QUFJWCxpQkFBeUIsSUFBSSxPQUFKLElBQWUsRUFKN0I7QUFLWCxjQUF5QixJQUFJLElBQUosSUFBWTtBQUwxQixPQUFiOztBQVFBLFVBQUksUUFBUSxzQkFBRyxTQUFILENBQWEsTUFBYixDQUFaOztBQUVBLGFBQU8sS0FBSyxJQUFMLHNCQUE2QixLQUE3QixDQUFQO0FBQ0Q7Ozs7O2tCQUdZLFUiLCJmaWxlIjoiY3VycmljdWx1bS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyAgICAgIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBDdXJyaWN1bHVtIGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBzZWFyY2gob3B0KSB7XG5cbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgY29sbGVnZV9hYmJyZXZpYXRpb246ICAgIG9wdC5jb2xsZWdlIHx8ICcnLFxuICAgICAgZGVwYXJ0bWVudF9hYmJyZXZpYXRpb246IG9wdC5kZXB0IHx8ICcnLFxuICAgICAgZnV0dXJlX3Rlcm1zOiAgICAgICAgICAgIG9wdC5mdXR1cmUgfHwgMCxcbiAgICAgIHF1YXJ0ZXI6ICAgICAgICAgICAgICAgICBvcHQucXVhcnRlciB8fCAnJyxcbiAgICAgIHllYXI6ICAgICAgICAgICAgICAgICAgICBvcHQueWVhciB8fCAnJ1xuICAgIH07XG5cbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkocGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLl9nZXQoYGN1cnJpY3VsdW0uanNvbj8ke3F1ZXJ5fWApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnJpY3VsdW07XG4iXX0=