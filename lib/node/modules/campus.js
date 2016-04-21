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
        result.data = result.data.Campuses;
        return result;
      });
    }
  }]);

  return Campus;
}(_service2.default);

exports.default = Campus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2NhbXB1cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTSxNO1lBQUEsTTs7QUFDSixXQURJLE1BQ0osQ0FBWSxNQUFaLEVBQW9CO0FBQUEsMEJBRGhCLE1BQ2dCOztBQUFBLGtFQURoQixNQUNnQixhQUNaLE1BRFk7QUFFbkI7O2VBSEcsTTs7MEJBS0U7QUFDSixhQUFPLEtBQUssSUFBTCxDQUFVLGFBQVYsRUFDSixJQURJLENBQ0MsVUFBQyxNQUFELEVBQVk7QUFDaEIsZUFBTyxJQUFQLEdBQWMsT0FBTyxJQUFQLENBQVksUUFBMUI7QUFDQSxlQUFPLE1BQVA7QUFDRCxPQUpJLENBQVA7QUFLRDs7O1NBWEcsTTs7O2tCQWNTLE0iLCJmaWxlIjoiY2FtcHVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgQ2FtcHVzIGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldCgnY2FtcHVzLmpzb24nKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXN1bHQuZGF0YSA9IHJlc3VsdC5kYXRhLkNhbXB1c2VzO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcHVzO1xuIl19