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
        return this._get('testscore/' + opt.testType + ',' + opt.regid + '.json');
      }
      return this._get('testscore/' + opt.regid + '.json');
    }
  }]);

  return TestScore;
}(_service2.default);

exports.default = TestScore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3Rlc3RzY29yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTSxTO1lBQUEsUzs7QUFDSixXQURJLFNBQ0osQ0FBWSxNQUFaLEVBQW9CO0FBQUEsMEJBRGhCLFNBQ2dCOztBQUFBLGtFQURoQixTQUNnQixhQUNaLE1BRFk7QUFFbkI7O2VBSEcsUzs7d0JBS0EsRyxFQUFLO0FBQ1AsVUFBSSxJQUFJLFFBQVIsRUFBa0I7QUFDaEIsZUFBTyxLQUFLLElBQUwsZ0JBQXVCLElBQUksUUFBM0IsU0FBdUMsSUFBSSxLQUEzQyxXQUFQO0FBQ0Q7QUFDRCxhQUFPLEtBQUssSUFBTCxnQkFBdUIsSUFBSSxLQUEzQixXQUFQO0FBQ0Q7OztTQVZHLFM7OztrQkFhUyxTIiwiZmlsZSI6InRlc3RzY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIFRlc3RTY29yZSBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgZ2V0KG9wdCkge1xuICAgIGlmIChvcHQudGVzdFR5cGUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXQoYHRlc3RzY29yZS8ke29wdC50ZXN0VHlwZX0sJHtvcHQucmVnaWR9Lmpzb25gKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2dldChgdGVzdHNjb3JlLyR7b3B0LnJlZ2lkfS5qc29uYCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdFNjb3JlO1xuIl19