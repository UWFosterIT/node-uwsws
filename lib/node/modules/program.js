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
    value: function all(opt, cb) {
      var params = {
        first_effective_quarter: opt.quarter || '',
        first_effective_year: opt.year || '',
        major_abbr: opt.major || '',
        pathway: opt.pathway || 0
      };

      var query = _queryString2.default.stringify(params);

      this._get('program.json?' + query, function (err, res, body) {
        cb(err, res, err ? body : body.Programs);
      });
      return;
    }
  }, {
    key: 'get',
    value: function get(opt, cb) {
      opt.pathway = opt.pathway || 0;
      var query = opt.major + ',' + opt.pathway + ',' + opt.year + ',' + opt.quarter;

      this._get('program/' + query + '.json', cb);
      return;
    }
  }, {
    key: 'search',
    value: function search(opt, cb) {
      var params = {
        first_effective_quarter: opt.quarter || '',
        first_effective_year: opt.year || '',
        major_abbr: opt.major || '',
        pathway: opt.pathway || 0,
        quarter: opt.quarter || '',
        year: opt.year || ''
      };

      var query = _queryString2.default.stringify(params);

      this._get('program.json?' + query, function (err, res, body) {
        cb(err, res, err ? body : body.Programs);
      });
      return;
    }
  }]);

  return Program;
}(_service2.default);

exports.default = Program;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2dyYW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR007OztBQUNKLFdBREksT0FDSixDQUFZLE1BQVosRUFBb0I7MEJBRGhCLFNBQ2dCOztrRUFEaEIsb0JBRUksU0FEWTtHQUFwQjs7ZUFESTs7d0JBS0EsS0FBSyxJQUFJO0FBQ1gsVUFBSSxTQUFTO0FBQ1gsaUNBQXlCLElBQUksT0FBSixJQUFlLEVBQWY7QUFDekIsOEJBQXlCLElBQUksSUFBSixJQUFlLEVBQWY7QUFDekIsb0JBQXlCLElBQUksS0FBSixJQUFlLEVBQWY7QUFDekIsaUJBQXlCLElBQUksT0FBSixJQUFlLENBQWY7T0FKdkIsQ0FETzs7QUFRWCxVQUFJLFFBQVEsc0JBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBUixDQVJPOztBQVVYLFdBQUssSUFBTCxtQkFBMEIsS0FBMUIsRUFBbUMsVUFBQyxHQUFELEVBQU0sR0FBTixFQUFXLElBQVgsRUFBb0I7QUFDckQsV0FBRyxHQUFILEVBQVEsR0FBUixFQUFhLE1BQU0sSUFBTixHQUFhLEtBQUssUUFBTCxDQUExQixDQURxRDtPQUFwQixDQUFuQyxDQVZXO0FBYVgsYUFiVzs7Ozt3QkFnQlQsS0FBSyxJQUFJO0FBQ1gsVUFBSSxPQUFKLEdBQWMsSUFBSSxPQUFKLElBQWUsQ0FBZixDQURIO0FBRVgsVUFBSSxRQUFhLElBQUksS0FBSixTQUFhLElBQUksT0FBSixTQUFlLElBQUksSUFBSixTQUFZLElBQUksT0FBSixDQUY5Qzs7QUFJWCxXQUFLLElBQUwsY0FBcUIsZUFBckIsRUFBbUMsRUFBbkMsRUFKVztBQUtYLGFBTFc7Ozs7MkJBUU4sS0FBSyxJQUFJO0FBQ2QsVUFBSSxTQUFTO0FBQ1gsaUNBQXlCLElBQUksT0FBSixJQUFlLEVBQWY7QUFDekIsOEJBQXlCLElBQUksSUFBSixJQUFlLEVBQWY7QUFDekIsb0JBQXlCLElBQUksS0FBSixJQUFlLEVBQWY7QUFDekIsaUJBQXlCLElBQUksT0FBSixJQUFlLENBQWY7QUFDekIsaUJBQXlCLElBQUksT0FBSixJQUFlLEVBQWY7QUFDekIsY0FBeUIsSUFBSSxJQUFKLElBQWUsRUFBZjtPQU52QixDQURVOztBQVVkLFVBQUksUUFBUSxzQkFBRyxTQUFILENBQWEsTUFBYixDQUFSLENBVlU7O0FBWWQsV0FBSyxJQUFMLG1CQUEwQixLQUExQixFQUFtQyxVQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsSUFBWCxFQUFvQjtBQUNyRCxXQUFHLEdBQUgsRUFBUSxHQUFSLEVBQWEsTUFBTSxJQUFOLEdBQWEsS0FBSyxRQUFMLENBQTFCLENBRHFEO09BQXBCLENBQW5DLENBWmM7QUFlZCxhQWZjOzs7O1NBN0JaOzs7a0JBZ0RTIiwiZmlsZSI6InByb2dyYW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgUHJvZ3JhbSBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgYWxsKG9wdCwgY2IpIHtcbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgZmlyc3RfZWZmZWN0aXZlX3F1YXJ0ZXI6IG9wdC5xdWFydGVyIHx8ICcnLFxuICAgICAgZmlyc3RfZWZmZWN0aXZlX3llYXI6ICAgIG9wdC55ZWFyICAgIHx8ICcnLFxuICAgICAgbWFqb3JfYWJicjogICAgICAgICAgICAgIG9wdC5tYWpvciAgIHx8ICcnLFxuICAgICAgcGF0aHdheTogICAgICAgICAgICAgICAgIG9wdC5wYXRod2F5IHx8IDBcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICB0aGlzLl9nZXQoYHByb2dyYW0uanNvbj8ke3F1ZXJ5fWAsIChlcnIsIHJlcywgYm9keSkgPT4ge1xuICAgICAgY2IoZXJyLCByZXMsIGVyciA/IGJvZHkgOiBib2R5LlByb2dyYW1zKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBnZXQob3B0LCBjYikge1xuICAgIG9wdC5wYXRod2F5ID0gb3B0LnBhdGh3YXkgfHwgMDtcbiAgICBsZXQgcXVlcnkgICA9IGAke29wdC5tYWpvcn0sJHtvcHQucGF0aHdheX0sJHtvcHQueWVhcn0sJHtvcHQucXVhcnRlcn1gO1xuXG4gICAgdGhpcy5fZ2V0KGBwcm9ncmFtLyR7cXVlcnl9Lmpzb25gLCBjYik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc2VhcmNoKG9wdCwgY2IpIHtcbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgZmlyc3RfZWZmZWN0aXZlX3F1YXJ0ZXI6IG9wdC5xdWFydGVyIHx8ICcnLFxuICAgICAgZmlyc3RfZWZmZWN0aXZlX3llYXI6ICAgIG9wdC55ZWFyICAgIHx8ICcnLFxuICAgICAgbWFqb3JfYWJicjogICAgICAgICAgICAgIG9wdC5tYWpvciAgIHx8ICcnLFxuICAgICAgcGF0aHdheTogICAgICAgICAgICAgICAgIG9wdC5wYXRod2F5IHx8IDAsXG4gICAgICBxdWFydGVyOiAgICAgICAgICAgICAgICAgb3B0LnF1YXJ0ZXIgfHwgJycsXG4gICAgICB5ZWFyOiAgICAgICAgICAgICAgICAgICAgb3B0LnllYXIgICAgfHwgJydcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICB0aGlzLl9nZXQoYHByb2dyYW0uanNvbj8ke3F1ZXJ5fWAsIChlcnIsIHJlcywgYm9keSkgPT4ge1xuICAgICAgY2IoZXJyLCByZXMsIGVyciA/IGJvZHkgOiBib2R5LlByb2dyYW1zKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3JhbTtcbiJdfQ==