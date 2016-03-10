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

var Registration = function (_Service) {
  _inherits(Registration, _Service);

  function Registration(config) {
    _classCallCheck(this, Registration);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Registration).call(this, config));
  }

  // forcing verbose and just the one endpoint per their notes at the wiki
  // https://wiki.cac.washington.edu/display/SWS/Registration+Search+Resource+v5


  _createClass(Registration, [{
    key: 'search',
    value: function search(opt, cb) {
      var params = {
        course_number: opt.course || '',
        curriculum_abbreviation: opt.curriculum || '',
        instructor_reg_id: opt.instructor || '',
        is_active: opt.active || '',
        page_size: opt.size || '',
        page_start: opt.start || '',
        quarter: opt.quarter || '',
        reg_id: opt.regid || '',
        section_id: opt.section || '',
        verbose: true,
        year: opt.year || ''
      };

      var query = _queryString2.default.stringify(params);

      this._get('registration.json?' + query, cb);
      return;
    }
  }]);

  return Registration;
}(_service2.default);

exports.default = Registration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3JlZ2lzdHJhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHTTs7O0FBQ0osV0FESSxZQUNKLENBQVksTUFBWixFQUFvQjswQkFEaEIsY0FDZ0I7O2tFQURoQix5QkFFSSxTQURZO0dBQXBCOzs7Ozs7ZUFESTs7MkJBT0csS0FBSyxJQUFJO0FBQ2QsVUFBSSxTQUFTO0FBQ1gsdUJBQXlCLElBQUksTUFBSixJQUFrQixFQUFsQjtBQUN6QixpQ0FBeUIsSUFBSSxVQUFKLElBQWtCLEVBQWxCO0FBQ3pCLDJCQUF5QixJQUFJLFVBQUosSUFBa0IsRUFBbEI7QUFDekIsbUJBQXlCLElBQUksTUFBSixJQUFrQixFQUFsQjtBQUN6QixtQkFBeUIsSUFBSSxJQUFKLElBQWtCLEVBQWxCO0FBQ3pCLG9CQUF5QixJQUFJLEtBQUosSUFBa0IsRUFBbEI7QUFDekIsaUJBQXlCLElBQUksT0FBSixJQUFrQixFQUFsQjtBQUN6QixnQkFBeUIsSUFBSSxLQUFKLElBQWtCLEVBQWxCO0FBQ3pCLG9CQUF5QixJQUFJLE9BQUosSUFBa0IsRUFBbEI7QUFDekIsaUJBQXlCLElBQXpCO0FBQ0EsY0FBeUIsSUFBSSxJQUFKLElBQWtCLEVBQWxCO09BWHZCLENBRFU7O0FBZWQsVUFBSSxRQUFRLHNCQUFHLFNBQUgsQ0FBYSxNQUFiLENBQVIsQ0FmVTs7QUFpQmQsV0FBSyxJQUFMLHdCQUErQixLQUEvQixFQUF3QyxFQUF4QyxFQWpCYztBQWtCZCxhQWxCYzs7OztTQVBaOzs7a0JBNkJTIiwiZmlsZSI6InJlZ2lzdHJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyAgICAgIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBSZWdpc3RyYXRpb24gZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIC8vIGZvcmNpbmcgdmVyYm9zZSBhbmQganVzdCB0aGUgb25lIGVuZHBvaW50IHBlciB0aGVpciBub3RlcyBhdCB0aGUgd2lraVxuICAvLyBodHRwczovL3dpa2kuY2FjLndhc2hpbmd0b24uZWR1L2Rpc3BsYXkvU1dTL1JlZ2lzdHJhdGlvbitTZWFyY2grUmVzb3VyY2UrdjVcbiAgc2VhcmNoKG9wdCwgY2IpIHtcbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgY291cnNlX251bWJlcjogICAgICAgICAgIG9wdC5jb3Vyc2UgICAgIHx8ICcnLFxuICAgICAgY3VycmljdWx1bV9hYmJyZXZpYXRpb246IG9wdC5jdXJyaWN1bHVtIHx8ICcnLFxuICAgICAgaW5zdHJ1Y3Rvcl9yZWdfaWQ6ICAgICAgIG9wdC5pbnN0cnVjdG9yIHx8ICcnLFxuICAgICAgaXNfYWN0aXZlOiAgICAgICAgICAgICAgIG9wdC5hY3RpdmUgICAgIHx8ICcnLFxuICAgICAgcGFnZV9zaXplOiAgICAgICAgICAgICAgIG9wdC5zaXplICAgICAgIHx8ICcnLFxuICAgICAgcGFnZV9zdGFydDogICAgICAgICAgICAgIG9wdC5zdGFydCAgICAgIHx8ICcnLFxuICAgICAgcXVhcnRlcjogICAgICAgICAgICAgICAgIG9wdC5xdWFydGVyICAgIHx8ICcnLFxuICAgICAgcmVnX2lkOiAgICAgICAgICAgICAgICAgIG9wdC5yZWdpZCAgICAgIHx8ICcnLFxuICAgICAgc2VjdGlvbl9pZDogICAgICAgICAgICAgIG9wdC5zZWN0aW9uICAgIHx8ICcnLFxuICAgICAgdmVyYm9zZTogICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICB5ZWFyOiAgICAgICAgICAgICAgICAgICAgb3B0LnllYXIgICAgICAgfHwgJydcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICB0aGlzLl9nZXQoYHJlZ2lzdHJhdGlvbi5qc29uPyR7cXVlcnl9YCwgY2IpO1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb247XG4iXX0=