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

var Campus = function (_Service) {
  _inherits(Campus, _Service);

  function Campus(config) {
    _classCallCheck(this, Campus);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Campus).call(this, config));
  }

  _createClass(Campus, [{
    key: 'all',
    value: function all(cb) {
      this._get('campus.json', function (err, res, body) {
        cb(err, res, err ? body : body.Campuses);
      });

      return;
    }
  }]);

  return Campus;
}(_service2.default);

exports.default = Campus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2NhbXB1cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNOzs7QUFDSixXQURJLE1BQ0osQ0FBWSxNQUFaLEVBQW9COzBCQURoQixRQUNnQjs7a0VBRGhCLG1CQUVJLFNBRFk7R0FBcEI7O2VBREk7O3dCQUtBLElBQUk7QUFDTixXQUFLLElBQUwsQ0FBVSxhQUFWLEVBQXlCLFVBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxJQUFYLEVBQW9CO0FBQzNDLFdBQUcsR0FBSCxFQUFRLEdBQVIsRUFBYSxNQUFNLElBQU4sR0FBYSxLQUFLLFFBQUwsQ0FBMUIsQ0FEMkM7T0FBcEIsQ0FBekIsQ0FETTs7QUFLTixhQUxNOzs7O1NBTEo7OztrQkFjUyIsImZpbGUiOiJjYW1wdXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBDYW1wdXMgZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIGFsbChjYikge1xuICAgIHRoaXMuX2dldCgnY2FtcHVzLmpzb24nLCAoZXJyLCByZXMsIGJvZHkpID0+IHtcbiAgICAgIGNiKGVyciwgcmVzLCBlcnIgPyBib2R5IDogYm9keS5DYW1wdXNlcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcHVzO1xuIl19