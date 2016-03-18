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

var TestScore = function (_Service) {
  _inherits(TestScore, _Service);

  function TestScore(config) {
    _classCallCheck(this, TestScore);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TestScore).call(this, config));
  }

  _createClass(TestScore, [{
    key: 'get',
    value: function get(opt, cb) {
      if (opt.testType) {
        this._get('testscore/' + opt.testType + ',' + opt.regid + '.json', cb);
      } else {
        this._get('testscore/' + opt.regid + '.json', cb);
      }

      return;
    }
  }]);

  return TestScore;
}(_service2.default);

exports.default = TestScore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3Rlc3RzY29yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNOzs7QUFDSixXQURJLFNBQ0osQ0FBWSxNQUFaLEVBQW9COzBCQURoQixXQUNnQjs7a0VBRGhCLHNCQUVJLFNBRFk7R0FBcEI7O2VBREk7O3dCQUtBLEtBQUssSUFBSTtBQUNYLFVBQUksSUFBSSxRQUFKLEVBQWM7QUFDaEIsYUFBSyxJQUFMLGdCQUF1QixJQUFJLFFBQUosU0FBZ0IsSUFBSSxLQUFKLFVBQXZDLEVBQXlELEVBQXpELEVBRGdCO09BQWxCLE1BRU87QUFDTCxhQUFLLElBQUwsZ0JBQXVCLElBQUksS0FBSixVQUF2QixFQUF5QyxFQUF6QyxFQURLO09BRlA7O0FBTUEsYUFQVzs7OztTQUxUOzs7a0JBZ0JTIiwiZmlsZSI6InRlc3RzY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyAgICAgIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBUZXN0U2NvcmUgZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIGdldChvcHQsIGNiKSB7XG4gICAgaWYgKG9wdC50ZXN0VHlwZSkge1xuICAgICAgdGhpcy5fZ2V0KGB0ZXN0c2NvcmUvJHtvcHQudGVzdFR5cGV9LCR7b3B0LnJlZ2lkfS5qc29uYCwgY2IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9nZXQoYHRlc3RzY29yZS8ke29wdC5yZWdpZH0uanNvbmAsIGNiKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdFNjb3JlO1xuIl19