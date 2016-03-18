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
    value: function all() {
      return this._get('campus.json').then(function (result) {
        result.campus = result.data.Campuses;
        delete result.data;
        return result;
      });
    }
  }]);

  return Campus;
}(_service2.default);

exports.default = Campus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2NhbXB1cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTTs7O0FBQ0osV0FESSxNQUNKLENBQVksTUFBWixFQUFvQjswQkFEaEIsUUFDZ0I7O2tFQURoQixtQkFFSSxTQURZO0dBQXBCOztlQURJOzswQkFLRTtBQUNKLGFBQU8sS0FBSyxJQUFMLENBQVUsYUFBVixFQUNKLElBREksQ0FDQyxVQUFDLE1BQUQsRUFBWTtBQUNoQixlQUFPLE1BQVAsR0FBZ0IsT0FBTyxJQUFQLENBQVksUUFBWixDQURBO0FBRWhCLGVBQU8sT0FBTyxJQUFQLENBRlM7QUFHaEIsZUFBTyxNQUFQLENBSGdCO09BQVosQ0FEUixDQURJOzs7O1NBTEY7OztrQkFlUyIsImZpbGUiOiJjYW1wdXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBDYW1wdXMgZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIGFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0KCdjYW1wdXMuanNvbicpXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc3VsdC5jYW1wdXMgPSByZXN1bHQuZGF0YS5DYW1wdXNlcztcbiAgICAgICAgZGVsZXRlIHJlc3VsdC5kYXRhO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcHVzO1xuIl19