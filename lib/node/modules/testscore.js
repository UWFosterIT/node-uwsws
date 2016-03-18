'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
    value: function get(opt) {
      if (opt.testType) {
        return this._get('testscore/' + opt.testType + ',' + opt.regid + '.json').then(function (result) {
          result.testscore = result.data;
          delete result.data;
          return result;
        });
      }
      return this._get('testscore/' + opt.regid + '.json').then(function (result) {
        result.testscore = result.data;
        delete result.data;
        return result;
      });
    }
  }]);

  return TestScore;
}(_service2.default);

exports.default = TestScore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3Rlc3RzY29yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTTs7O0FBQ0osV0FESSxTQUNKLENBQVksTUFBWixFQUFvQjswQkFEaEIsV0FDZ0I7O2tFQURoQixzQkFFSSxTQURZO0dBQXBCOztlQURJOzt3QkFLQSxLQUFLO0FBQ1AsVUFBSSxJQUFJLFFBQUosRUFBYztBQUNoQixlQUFPLEtBQUssSUFBTCxnQkFBdUIsSUFBSSxRQUFKLFNBQWdCLElBQUksS0FBSixVQUF2QyxFQUNKLElBREksQ0FDQyxVQUFDLE1BQUQsRUFBWTtBQUNoQixpQkFBTyxTQUFQLEdBQW1CLE9BQU8sSUFBUCxDQURIO0FBRWhCLGlCQUFPLE9BQU8sSUFBUCxDQUZTO0FBR2hCLGlCQUFPLE1BQVAsQ0FIZ0I7U0FBWixDQURSLENBRGdCO09BQWxCO0FBUUEsYUFBTyxLQUFLLElBQUwsZ0JBQXVCLElBQUksS0FBSixVQUF2QixFQUNKLElBREksQ0FDQyxVQUFDLE1BQUQsRUFBWTtBQUNoQixlQUFPLFNBQVAsR0FBbUIsT0FBTyxJQUFQLENBREg7QUFFaEIsZUFBTyxPQUFPLElBQVAsQ0FGUztBQUdoQixlQUFPLE1BQVAsQ0FIZ0I7T0FBWixDQURSLENBVE87Ozs7U0FMTDs7O2tCQXVCUyIsImZpbGUiOiJ0ZXN0c2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBUZXN0U2NvcmUgZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIGdldChvcHQpIHtcbiAgICBpZiAob3B0LnRlc3RUeXBlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0KGB0ZXN0c2NvcmUvJHtvcHQudGVzdFR5cGV9LCR7b3B0LnJlZ2lkfS5qc29uYClcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHJlc3VsdC50ZXN0c2NvcmUgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgICBkZWxldGUgcmVzdWx0LmRhdGE7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9nZXQoYHRlc3RzY29yZS8ke29wdC5yZWdpZH0uanNvbmApXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc3VsdC50ZXN0c2NvcmUgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgZGVsZXRlIHJlc3VsdC5kYXRhO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdFNjb3JlO1xuIl19