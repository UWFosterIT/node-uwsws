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

var College = function (_Service) {
  _inherits(College, _Service);

  function College(config) {
    _classCallCheck(this, College);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(College).call(this, config));
  }

  _createClass(College, [{
    key: 'search',
    value: function search(opt, cb) {

      var params = {
        campus_short_name: opt.name || '',
        future_terms: opt.future || 0,
        quarter: opt.quarter || '',
        year: opt.year || ''
      };

      var query = _queryString2.default.stringify(params);

      this._get('college.json?' + query, function (err, res, body) {
        cb(err, res, body.Colleges);
      });

      return;
    }
  }]);

  return College;
}(_service2.default);

exports.default = College;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvbGxlZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR007OztBQUNKLFdBREksT0FDSixDQUFZLE1BQVosRUFBb0I7MEJBRGhCLFNBQ2dCOztrRUFEaEIsb0JBRUksU0FEWTtHQUFwQjs7ZUFESTs7MkJBS0csS0FBSyxJQUFJOztBQUVkLFVBQUksU0FBUztBQUNYLDJCQUFtQixJQUFJLElBQUosSUFBZSxFQUFmO0FBQ25CLHNCQUFtQixJQUFJLE1BQUosSUFBZSxDQUFmO0FBQ25CLGlCQUFtQixJQUFJLE9BQUosSUFBZSxFQUFmO0FBQ25CLGNBQW1CLElBQUksSUFBSixJQUFlLEVBQWY7T0FKakIsQ0FGVTs7QUFTZCxVQUFJLFFBQVEsc0JBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBUixDQVRVOztBQVdkLFdBQUssSUFBTCxtQkFBMEIsS0FBMUIsRUFBbUMsVUFBQyxHQUFELEVBQU0sR0FBTixFQUFXLElBQVgsRUFBb0I7QUFDckQsV0FBRyxHQUFILEVBQVEsR0FBUixFQUFhLEtBQUssUUFBTCxDQUFiLENBRHFEO09BQXBCLENBQW5DLENBWGM7O0FBZWQsYUFmYzs7OztTQUxaOzs7a0JBd0JTIiwiZmlsZSI6ImNvbGxlZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgQ29sbGVnZSBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgc2VhcmNoKG9wdCwgY2IpIHtcblxuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBjYW1wdXNfc2hvcnRfbmFtZTogb3B0Lm5hbWUgICAgfHwgJycsXG4gICAgICBmdXR1cmVfdGVybXM6ICAgICAgb3B0LmZ1dHVyZSAgfHwgMCxcbiAgICAgIHF1YXJ0ZXI6ICAgICAgICAgICBvcHQucXVhcnRlciB8fCAnJyxcbiAgICAgIHllYXI6ICAgICAgICAgICAgICBvcHQueWVhciAgICB8fCAnJyxcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICB0aGlzLl9nZXQoYGNvbGxlZ2UuanNvbj8ke3F1ZXJ5fWAsIChlcnIsIHJlcywgYm9keSkgPT4ge1xuICAgICAgY2IoZXJyLCByZXMsIGJvZHkuQ29sbGVnZXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxlZ2U7XG4iXX0=