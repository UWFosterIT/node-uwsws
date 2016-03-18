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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2dyYW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTTs7O0FBQ0osV0FESSxPQUNKLENBQVksTUFBWixFQUFvQjswQkFEaEIsU0FDZ0I7O2tFQURoQixvQkFFSSxTQURZO0dBQXBCOztlQURJOzt3QkFLQSxLQUFLLElBQUk7QUFDWCxVQUFJLFNBQVM7QUFDWCxpQ0FBeUIsSUFBSSxPQUFKLElBQWUsRUFBZjtBQUN6Qiw4QkFBeUIsSUFBSSxJQUFKLElBQWUsRUFBZjtBQUN6QixvQkFBeUIsSUFBSSxLQUFKLElBQWUsRUFBZjtBQUN6QixpQkFBeUIsSUFBSSxPQUFKLElBQWUsQ0FBZjtPQUp2QixDQURPOztBQVFYLFVBQUksUUFBUSxzQkFBRyxTQUFILENBQWEsTUFBYixDQUFSLENBUk87O0FBVVgsV0FBSyxJQUFMLG1CQUEwQixLQUExQixFQUFtQyxVQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsSUFBWCxFQUFvQjtBQUNyRCxXQUFHLEdBQUgsRUFBUSxHQUFSLEVBQWEsTUFBTSxJQUFOLEdBQWEsS0FBSyxRQUFMLENBQTFCLENBRHFEO09BQXBCLENBQW5DLENBVlc7QUFhWCxhQWJXOzs7O3dCQWdCVCxLQUFLLElBQUk7QUFDWCxVQUFJLE9BQUosR0FBYyxJQUFJLE9BQUosSUFBZSxDQUFmLENBREg7QUFFWCxVQUFJLFFBQWEsSUFBSSxLQUFKLFNBQWEsSUFBSSxPQUFKLFNBQWUsSUFBSSxJQUFKLFNBQVksSUFBSSxPQUFKLENBRjlDOztBQUlYLFdBQUssSUFBTCxjQUFxQixlQUFyQixFQUFtQyxFQUFuQyxFQUpXO0FBS1gsYUFMVzs7OzsyQkFRTixLQUFLLElBQUk7QUFDZCxVQUFJLFNBQVM7QUFDWCxpQ0FBeUIsSUFBSSxPQUFKLElBQWUsRUFBZjtBQUN6Qiw4QkFBeUIsSUFBSSxJQUFKLElBQWUsRUFBZjtBQUN6QixvQkFBeUIsSUFBSSxLQUFKLElBQWUsRUFBZjtBQUN6QixpQkFBeUIsSUFBSSxPQUFKLElBQWUsQ0FBZjtBQUN6QixpQkFBeUIsSUFBSSxPQUFKLElBQWUsRUFBZjtBQUN6QixjQUF5QixJQUFJLElBQUosSUFBZSxFQUFmO09BTnZCLENBRFU7O0FBVWQsVUFBSSxRQUFRLHNCQUFHLFNBQUgsQ0FBYSxNQUFiLENBQVIsQ0FWVTs7QUFZZCxXQUFLLElBQUwsbUJBQTBCLEtBQTFCLEVBQW1DLFVBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxJQUFYLEVBQW9CO0FBQ3JELFdBQUcsR0FBSCxFQUFRLEdBQVIsRUFBYSxNQUFNLElBQU4sR0FBYSxLQUFLLFFBQUwsQ0FBMUIsQ0FEcUQ7T0FBcEIsQ0FBbkMsQ0FaYztBQWVkLGFBZmM7Ozs7U0E3Qlo7OztrQkFnRFMiLCJmaWxlIjoicHJvZ3JhbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyAgICAgIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBQcm9ncmFtIGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBhbGwob3B0LCBjYikge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBmaXJzdF9lZmZlY3RpdmVfcXVhcnRlcjogb3B0LnF1YXJ0ZXIgfHwgJycsXG4gICAgICBmaXJzdF9lZmZlY3RpdmVfeWVhcjogICAgb3B0LnllYXIgICAgfHwgJycsXG4gICAgICBtYWpvcl9hYmJyOiAgICAgICAgICAgICAgb3B0Lm1ham9yICAgfHwgJycsXG4gICAgICBwYXRod2F5OiAgICAgICAgICAgICAgICAgb3B0LnBhdGh3YXkgfHwgMFxuICAgIH07XG5cbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkocGFyYW1zKTtcblxuICAgIHRoaXMuX2dldChgcHJvZ3JhbS5qc29uPyR7cXVlcnl9YCwgKGVyciwgcmVzLCBib2R5KSA9PiB7XG4gICAgICBjYihlcnIsIHJlcywgZXJyID8gYm9keSA6IGJvZHkuUHJvZ3JhbXMpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGdldChvcHQsIGNiKSB7XG4gICAgb3B0LnBhdGh3YXkgPSBvcHQucGF0aHdheSB8fCAwO1xuICAgIGxldCBxdWVyeSAgID0gYCR7b3B0Lm1ham9yfSwke29wdC5wYXRod2F5fSwke29wdC55ZWFyfSwke29wdC5xdWFydGVyfWA7XG5cbiAgICB0aGlzLl9nZXQoYHByb2dyYW0vJHtxdWVyeX0uanNvbmAsIGNiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBzZWFyY2gob3B0LCBjYikge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBmaXJzdF9lZmZlY3RpdmVfcXVhcnRlcjogb3B0LnF1YXJ0ZXIgfHwgJycsXG4gICAgICBmaXJzdF9lZmZlY3RpdmVfeWVhcjogICAgb3B0LnllYXIgICAgfHwgJycsXG4gICAgICBtYWpvcl9hYmJyOiAgICAgICAgICAgICAgb3B0Lm1ham9yICAgfHwgJycsXG4gICAgICBwYXRod2F5OiAgICAgICAgICAgICAgICAgb3B0LnBhdGh3YXkgfHwgMCxcbiAgICAgIHF1YXJ0ZXI6ICAgICAgICAgICAgICAgICBvcHQucXVhcnRlciB8fCAnJyxcbiAgICAgIHllYXI6ICAgICAgICAgICAgICAgICAgICBvcHQueWVhciAgICB8fCAnJ1xuICAgIH07XG5cbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkocGFyYW1zKTtcblxuICAgIHRoaXMuX2dldChgcHJvZ3JhbS5qc29uPyR7cXVlcnl9YCwgKGVyciwgcmVzLCBib2R5KSA9PiB7XG4gICAgICBjYihlcnIsIHJlcywgZXJyID8gYm9keSA6IGJvZHkuUHJvZ3JhbXMpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmFtO1xuIl19