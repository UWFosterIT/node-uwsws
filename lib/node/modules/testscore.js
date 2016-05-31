'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _service = require('./service');

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TestScore = function (_Service) {
  (0, _inherits3.default)(TestScore, _Service);

  function TestScore(config) {
    (0, _classCallCheck3.default)(this, TestScore);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TestScore).call(this, config));
  }

  (0, _createClass3.default)(TestScore, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3Rlc3RzY29yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7SUFFTSxTOzs7QUFDSixxQkFBWSxNQUFaLEVBQW9CO0FBQUE7QUFBQSw4R0FDWixNQURZO0FBRW5COzs7O3dCQUVHLEcsRUFBSztBQUNQLFVBQUksSUFBSSxRQUFSLEVBQWtCO0FBQ2hCLGVBQU8sS0FBSyxJQUFMLGdCQUF1QixJQUFJLFFBQTNCLFNBQXVDLElBQUksS0FBM0MsV0FBUDtBQUNEO0FBQ0QsYUFBTyxLQUFLLElBQUwsZ0JBQXVCLElBQUksS0FBM0IsV0FBUDtBQUNEOzs7OztrQkFHWSxTIiwiZmlsZSI6InRlc3RzY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIFRlc3RTY29yZSBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgZ2V0KG9wdCkge1xuICAgIGlmIChvcHQudGVzdFR5cGUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXQoYHRlc3RzY29yZS8ke29wdC50ZXN0VHlwZX0sJHtvcHQucmVnaWR9Lmpzb25gKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2dldChgdGVzdHNjb3JlLyR7b3B0LnJlZ2lkfS5qc29uYCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdFNjb3JlO1xuIl19