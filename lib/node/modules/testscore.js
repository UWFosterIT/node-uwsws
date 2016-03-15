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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3Rlc3RzY29yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHTTs7O0FBQ0osV0FESSxTQUNKLENBQVksTUFBWixFQUFvQjswQkFEaEIsV0FDZ0I7O2tFQURoQixzQkFFSSxTQURZO0dBQXBCOztlQURJOzt3QkFLQSxLQUFLLElBQUk7QUFDWCxVQUFJLElBQUksUUFBSixFQUFjO0FBQ2hCLGFBQUssSUFBTCxnQkFBdUIsSUFBSSxRQUFKLFNBQWdCLElBQUksS0FBSixVQUF2QyxFQUF5RCxFQUF6RCxFQURnQjtPQUFsQixNQUVPO0FBQ0wsYUFBSyxJQUFMLGdCQUF1QixJQUFJLEtBQUosVUFBdkIsRUFBeUMsRUFBekMsRUFESztPQUZQOztBQU1BLGFBUFc7Ozs7U0FMVDs7O2tCQWdCUyIsImZpbGUiOiJ0ZXN0c2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgVGVzdFNjb3JlIGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBnZXQob3B0LCBjYikge1xuICAgIGlmIChvcHQudGVzdFR5cGUpIHtcbiAgICAgIHRoaXMuX2dldChgdGVzdHNjb3JlLyR7b3B0LnRlc3RUeXBlfSwke29wdC5yZWdpZH0uanNvbmAsIGNiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZ2V0KGB0ZXN0c2NvcmUvJHtvcHQucmVnaWR9Lmpzb25gLCBjYik7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RTY29yZTtcbiJdfQ==