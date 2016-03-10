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
        department_abbreviation: opt.dept || '',
        future_terms: opt.future || 0,
        quarter: opt.quarter || '',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2N1cnJpY3VsdW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR007OztBQUNKLFdBREksVUFDSixDQUFZLE1BQVosRUFBb0I7MEJBRGhCLFlBQ2dCOztrRUFEaEIsdUJBRUksU0FEWTtHQUFwQjs7ZUFESTs7MkJBS0csS0FBSyxJQUFJOztBQUVkLFVBQUksU0FBUztBQUNYLDhCQUF5QixJQUFJLE9BQUosSUFBZSxFQUFmO0FBQ3pCLGlDQUF5QixJQUFJLElBQUosSUFBZSxFQUFmO0FBQ3pCLHNCQUF5QixJQUFJLE1BQUosSUFBZSxDQUFmO0FBQ3pCLGlCQUF5QixJQUFJLE9BQUosSUFBZSxFQUFmO0FBQ3pCLGNBQXlCLElBQUksSUFBSixJQUFlLEVBQWY7T0FMdkIsQ0FGVTs7QUFVZCxVQUFJLFFBQVEsc0JBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBUixDQVZVOztBQVlkLFdBQUssSUFBTCxzQkFBNkIsS0FBN0IsRUFBc0MsRUFBdEMsRUFaYztBQWFkLGFBYmM7Ozs7U0FMWjs7O2tCQXNCUyIsImZpbGUiOiJjdXJyaWN1bHVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzICAgICAgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIEN1cnJpY3VsdW0gZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIHNlYXJjaChvcHQsIGNiKSB7XG5cbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgY29sbGVnZV9hYmJyZXZpYXRpb246ICAgIG9wdC5jb2xsZWdlIHx8ICcnLFxuICAgICAgZGVwYXJ0bWVudF9hYmJyZXZpYXRpb246IG9wdC5kZXB0ICAgIHx8ICcnLFxuICAgICAgZnV0dXJlX3Rlcm1zOiAgICAgICAgICAgIG9wdC5mdXR1cmUgIHx8IDAsXG4gICAgICBxdWFydGVyOiAgICAgICAgICAgICAgICAgb3B0LnF1YXJ0ZXIgfHwgJycsXG4gICAgICB5ZWFyOiAgICAgICAgICAgICAgICAgICAgb3B0LnllYXIgICAgfHwgJycsXG4gICAgfTtcblxuICAgIGxldCBxdWVyeSA9IHFzLnN0cmluZ2lmeShwYXJhbXMpO1xuXG4gICAgdGhpcy5fZ2V0KGBjdXJyaWN1bHVtLmpzb24/JHtxdWVyeX1gLCBjYik7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnJpY3VsdW07XG4iXX0=