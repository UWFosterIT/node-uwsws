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
    value: function next() {
      return this._get('term/next.json').then(function (result) {
        result.term = result.data;
        delete result.data;
        return result;
      });
    }
  }, {
    key: 'previous',
    value: function previous() {
      return this._get('term/previous.json').then(function (result) {
        result.term = result.data;
        delete result.data;
        return result;
      });
    }
  }, {
    key: 'current',
    value: function current() {
      return this._get('term/current.json').then(function (result) {
        result.term = result.data;
        delete result.data;
        return result;
      });
    }
  }, {
    key: 'search',
    value: function search(options) {
      return this._get('term/' + options.year + ',' + options.quarter + '.json').then(function (result) {
        result.term = result.data;
        delete result.data;
        return result;
      });
    }
  }]);

  return Term;
}(_service2.default);

exports.default = Term;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3Rlcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU07OztBQUNKLFdBREksSUFDSixDQUFZLE1BQVosRUFBb0I7MEJBRGhCLE1BQ2dCOztrRUFEaEIsaUJBRUksU0FEWTtHQUFwQjs7ZUFESTs7MkJBS0c7QUFDTCxhQUFPLEtBQUssSUFBTCxDQUFVLGdCQUFWLEVBQ0osSUFESSxDQUNDLFVBQUMsTUFBRCxFQUFZO0FBQ2hCLGVBQU8sSUFBUCxHQUFjLE9BQU8sSUFBUCxDQURFO0FBRWhCLGVBQU8sT0FBTyxJQUFQLENBRlM7QUFHaEIsZUFBTyxNQUFQLENBSGdCO09BQVosQ0FEUixDQURLOzs7OytCQVNJO0FBQ1QsYUFBTyxLQUFLLElBQUwsQ0FBVSxvQkFBVixFQUNKLElBREksQ0FDQyxVQUFDLE1BQUQsRUFBWTtBQUNoQixlQUFPLElBQVAsR0FBYyxPQUFPLElBQVAsQ0FERTtBQUVoQixlQUFPLE9BQU8sSUFBUCxDQUZTO0FBR2hCLGVBQU8sTUFBUCxDQUhnQjtPQUFaLENBRFIsQ0FEUzs7Ozs4QkFTRDtBQUNSLGFBQU8sS0FBSyxJQUFMLENBQVUsbUJBQVYsRUFDSixJQURJLENBQ0MsVUFBQyxNQUFELEVBQVk7QUFDaEIsZUFBTyxJQUFQLEdBQWMsT0FBTyxJQUFQLENBREU7QUFFaEIsZUFBTyxPQUFPLElBQVAsQ0FGUztBQUdoQixlQUFPLE1BQVAsQ0FIZ0I7T0FBWixDQURSLENBRFE7Ozs7MkJBU0gsU0FBUztBQUNkLGFBQU8sS0FBSyxJQUFMLFdBQWtCLFFBQVEsSUFBUixTQUFnQixRQUFRLE9BQVIsVUFBbEMsRUFDSixJQURJLENBQ0MsVUFBQyxNQUFELEVBQVk7QUFDaEIsZUFBTyxJQUFQLEdBQWMsT0FBTyxJQUFQLENBREU7QUFFaEIsZUFBTyxPQUFPLElBQVAsQ0FGUztBQUdoQixlQUFPLE1BQVAsQ0FIZ0I7T0FBWixDQURSLENBRGM7Ozs7U0FoQ1o7OztrQkEwQ1MiLCJmaWxlIjoidGVybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIFRlcm0gZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIG5leHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldCgndGVybS9uZXh0Lmpzb24nKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXN1bHQudGVybSA9IHJlc3VsdC5kYXRhO1xuICAgICAgICBkZWxldGUgcmVzdWx0LmRhdGE7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByZXZpb3VzKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXQoJ3Rlcm0vcHJldmlvdXMuanNvbicpXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc3VsdC50ZXJtID0gcmVzdWx0LmRhdGE7XG4gICAgICAgIGRlbGV0ZSByZXN1bHQuZGF0YTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pO1xuICB9XG5cbiAgY3VycmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0KCd0ZXJtL2N1cnJlbnQuanNvbicpXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc3VsdC50ZXJtID0gcmVzdWx0LmRhdGE7XG4gICAgICAgIGRlbGV0ZSByZXN1bHQuZGF0YTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0KGB0ZXJtLyR7b3B0aW9ucy55ZWFyfSwke29wdGlvbnMucXVhcnRlcn0uanNvbmApXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc3VsdC50ZXJtID0gcmVzdWx0LmRhdGE7XG4gICAgICAgIGRlbGV0ZSByZXN1bHQuZGF0YTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlcm07XG4iXX0=