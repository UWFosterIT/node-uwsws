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

var Term = function (_Service) {
  _inherits(Term, _Service);

  function Term(config) {
    _classCallCheck(this, Term);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Term).call(this, config));
  }

  _createClass(Term, [{
    key: 'next',
    value: function next(cb) {
      this._get('term/next.json', cb);
      return;
    }
  }, {
    key: 'previous',
    value: function previous(cb) {
      this._get('term/previous.json', cb);
      return;
    }
  }, {
    key: 'current',
    value: function current() {
      return this._get('term/dcurrent.json').then(function (result) {
        result.term = result.data;
        delete result.data;
        return result;
      });
    }
  }, {
    key: 'search',
    value: function search(options, cb) {
      this._get('term/' + options.year + ',' + options.quarter + '.json', cb);
      return;
    }
  }]);

  return Term;
}(_service2.default);

exports.default = Term;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3Rlcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU07OztBQUNKLFdBREksSUFDSixDQUFZLE1BQVosRUFBb0I7MEJBRGhCLE1BQ2dCOztrRUFEaEIsaUJBRUksU0FEWTtHQUFwQjs7ZUFESTs7eUJBS0MsSUFBSTtBQUNQLFdBQUssSUFBTCxDQUFVLGdCQUFWLEVBQTRCLEVBQTVCLEVBRE87QUFFUCxhQUZPOzs7OzZCQUtBLElBQUk7QUFDWCxXQUFLLElBQUwsQ0FBVSxvQkFBVixFQUFnQyxFQUFoQyxFQURXO0FBRVgsYUFGVzs7Ozs4QkFLSDtBQUNSLGFBQU8sS0FBSyxJQUFMLENBQVUsb0JBQVYsRUFDSixJQURJLENBQ0MsVUFBQyxNQUFELEVBQVk7QUFDaEIsZUFBTyxJQUFQLEdBQWMsT0FBTyxJQUFQLENBREU7QUFFaEIsZUFBTyxPQUFPLElBQVAsQ0FGUztBQUdoQixlQUFPLE1BQVAsQ0FIZ0I7T0FBWixDQURSLENBRFE7Ozs7MkJBU0gsU0FBUyxJQUFJO0FBQ2xCLFdBQUssSUFBTCxXQUFrQixRQUFRLElBQVIsU0FBZ0IsUUFBUSxPQUFSLFVBQWxDLEVBQTBELEVBQTFELEVBRGtCO0FBRWxCLGFBRmtCOzs7O1NBeEJoQjs7O2tCQThCUyIsImZpbGUiOiJ0ZXJtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgVGVybSBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgbmV4dChjYikge1xuICAgIHRoaXMuX2dldCgndGVybS9uZXh0Lmpzb24nLCBjYik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHJldmlvdXMoY2IpIHtcbiAgICB0aGlzLl9nZXQoJ3Rlcm0vcHJldmlvdXMuanNvbicsIGNiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjdXJyZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9nZXQoJ3Rlcm0vZGN1cnJlbnQuanNvbicpXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc3VsdC50ZXJtID0gcmVzdWx0LmRhdGE7XG4gICAgICAgIGRlbGV0ZSByZXN1bHQuZGF0YTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoKG9wdGlvbnMsIGNiKSB7XG4gICAgdGhpcy5fZ2V0KGB0ZXJtLyR7b3B0aW9ucy55ZWFyfSwke29wdGlvbnMucXVhcnRlcn0uanNvbmAsIGNiKTtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVybTtcbiJdfQ==