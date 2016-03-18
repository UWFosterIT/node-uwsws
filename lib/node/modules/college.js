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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvbGxlZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTTs7O0FBQ0osV0FESSxPQUNKLENBQVksTUFBWixFQUFvQjswQkFEaEIsU0FDZ0I7O2tFQURoQixvQkFFSSxTQURZO0dBQXBCOztlQURJOzsyQkFLRyxLQUFLLElBQUk7O0FBRWQsVUFBSSxTQUFTO0FBQ1gsMkJBQW1CLElBQUksSUFBSixJQUFlLEVBQWY7QUFDbkIsc0JBQW1CLElBQUksTUFBSixJQUFlLENBQWY7QUFDbkIsaUJBQW1CLElBQUksT0FBSixJQUFlLEVBQWY7QUFDbkIsY0FBbUIsSUFBSSxJQUFKLElBQWUsRUFBZjtPQUpqQixDQUZVOztBQVNkLFVBQUksUUFBUSxzQkFBRyxTQUFILENBQWEsTUFBYixDQUFSLENBVFU7O0FBV2QsV0FBSyxJQUFMLG1CQUEwQixLQUExQixFQUFtQyxVQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsSUFBWCxFQUFvQjtBQUNyRCxXQUFHLEdBQUgsRUFBUSxHQUFSLEVBQWEsS0FBSyxRQUFMLENBQWIsQ0FEcUQ7T0FBcEIsQ0FBbkMsQ0FYYzs7QUFlZCxhQWZjOzs7O1NBTFo7OztrQkF3QlMiLCJmaWxlIjoiY29sbGVnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyAgICAgIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBDb2xsZWdlIGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBzZWFyY2gob3B0LCBjYikge1xuXG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIGNhbXB1c19zaG9ydF9uYW1lOiBvcHQubmFtZSAgICB8fCAnJyxcbiAgICAgIGZ1dHVyZV90ZXJtczogICAgICBvcHQuZnV0dXJlICB8fCAwLFxuICAgICAgcXVhcnRlcjogICAgICAgICAgIG9wdC5xdWFydGVyIHx8ICcnLFxuICAgICAgeWVhcjogICAgICAgICAgICAgIG9wdC55ZWFyICAgIHx8ICcnLFxuICAgIH07XG5cbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkocGFyYW1zKTtcblxuICAgIHRoaXMuX2dldChgY29sbGVnZS5qc29uPyR7cXVlcnl9YCwgKGVyciwgcmVzLCBib2R5KSA9PiB7XG4gICAgICBjYihlcnIsIHJlcywgYm9keS5Db2xsZWdlcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sbGVnZTtcbiJdfQ==