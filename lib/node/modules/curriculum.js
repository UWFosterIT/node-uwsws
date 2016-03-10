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
    value: function search(opt, cb) {

      var params = {
        college_abbreviation: opt.college || '',
        course_number: opt.course || '',
        department_abbreviation: opt.dept || '',
        future_terms: opt.future || 0,
        page_size: opt.size || '',
        page_start: opt.start || '',
        quarter: opt.quarter || '',
        sort_by: opt.sort || '',
        year: opt.year || ''
      };

      var query = _queryString2.default.stringify(params);

      this._get('curriculum.json?' + query, cb);
      return;
    }
  }]);

  return Curriculum;
}(_service2.default);

exports.default = Curriculum;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2N1cnJpY3VsdW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR007OztBQUNKLFdBREksVUFDSixDQUFZLE1BQVosRUFBb0I7MEJBRGhCLFlBQ2dCOztrRUFEaEIsdUJBRUksU0FEWTtHQUFwQjs7ZUFESTs7MkJBS0csS0FBSyxJQUFJOztBQUVkLFVBQUksU0FBUztBQUNYLDhCQUF5QixJQUFJLE9BQUosSUFBZSxFQUFmO0FBQ3pCLHVCQUF5QixJQUFJLE1BQUosSUFBZSxFQUFmO0FBQ3pCLGlDQUF5QixJQUFJLElBQUosSUFBZSxFQUFmO0FBQ3pCLHNCQUF5QixJQUFJLE1BQUosSUFBZSxDQUFmO0FBQ3pCLG1CQUF5QixJQUFJLElBQUosSUFBZSxFQUFmO0FBQ3pCLG9CQUF5QixJQUFJLEtBQUosSUFBZSxFQUFmO0FBQ3pCLGlCQUF5QixJQUFJLE9BQUosSUFBZSxFQUFmO0FBQ3pCLGlCQUF5QixJQUFJLElBQUosSUFBZSxFQUFmO0FBQ3pCLGNBQXlCLElBQUksSUFBSixJQUFlLEVBQWY7T0FUdkIsQ0FGVTs7QUFjZCxVQUFJLFFBQVEsc0JBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBUixDQWRVOztBQWdCZCxXQUFLLElBQUwsc0JBQTZCLEtBQTdCLEVBQXNDLEVBQXRDLEVBaEJjO0FBaUJkLGFBakJjOzs7O1NBTFo7OztrQkEwQlMiLCJmaWxlIjoiY3VycmljdWx1bS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyAgICAgIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBDdXJyaWN1bHVtIGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBzZWFyY2gob3B0LCBjYikge1xuXG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIGNvbGxlZ2VfYWJicmV2aWF0aW9uOiAgICBvcHQuY29sbGVnZSB8fCAnJyxcbiAgICAgIGNvdXJzZV9udW1iZXI6ICAgICAgICAgICBvcHQuY291cnNlICB8fCAnJyxcbiAgICAgIGRlcGFydG1lbnRfYWJicmV2aWF0aW9uOiBvcHQuZGVwdCAgICB8fCAnJyxcbiAgICAgIGZ1dHVyZV90ZXJtczogICAgICAgICAgICBvcHQuZnV0dXJlICB8fCAwLFxuICAgICAgcGFnZV9zaXplOiAgICAgICAgICAgICAgIG9wdC5zaXplICAgIHx8ICcnLFxuICAgICAgcGFnZV9zdGFydDogICAgICAgICAgICAgIG9wdC5zdGFydCAgIHx8ICcnLFxuICAgICAgcXVhcnRlcjogICAgICAgICAgICAgICAgIG9wdC5xdWFydGVyIHx8ICcnLFxuICAgICAgc29ydF9ieTogICAgICAgICAgICAgICAgIG9wdC5zb3J0ICAgIHx8ICcnLFxuICAgICAgeWVhcjogICAgICAgICAgICAgICAgICAgIG9wdC55ZWFyICAgIHx8ICcnLFxuICAgIH07XG5cbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkocGFyYW1zKTtcblxuICAgIHRoaXMuX2dldChgY3VycmljdWx1bS5qc29uPyR7cXVlcnl9YCwgY2IpO1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXJyaWN1bHVtO1xuIl19