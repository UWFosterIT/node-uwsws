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
      return this._get('term/next.json');
    }
  }, {
    key: 'previous',
    value: function previous() {
      return this._get('term/previous.json');
    }
  }, {
    key: 'current',
    value: function current() {
      return this._get('term/current.json');
    }
  }, {
    key: 'search',
    value: function search(options) {
      return this._get('term/' + options.year + ',' + options.quarter + '.json');
    }
  }]);

  return Term;
}(_service2.default);

exports.default = Term;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3Rlcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU0sSTtZQUFBLEk7O0FBQ0osV0FESSxJQUNKLENBQVksTUFBWixFQUFvQjtBQUFBLDBCQURoQixJQUNnQjs7QUFBQSxrRUFEaEIsSUFDZ0IsYUFDWixNQURZO0FBRW5COztlQUhHLEk7OzJCQUtHO0FBQ0wsYUFBTyxLQUFLLElBQUwsQ0FBVSxnQkFBVixDQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULGFBQU8sS0FBSyxJQUFMLENBQVUsb0JBQVYsQ0FBUDtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUssSUFBTCxDQUFVLG1CQUFWLENBQVA7QUFDRDs7OzJCQUVNLE8sRUFBUztBQUNkLGFBQU8sS0FBSyxJQUFMLFdBQWtCLFFBQVEsSUFBMUIsU0FBa0MsUUFBUSxPQUExQyxXQUFQO0FBQ0Q7OztTQW5CRyxJOzs7a0JBc0JTLEkiLCJmaWxlIjoidGVybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIFRlcm0gZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIG5leHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldCgndGVybS9uZXh0Lmpzb24nKTtcbiAgfVxuXG4gIHByZXZpb3VzKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXQoJ3Rlcm0vcHJldmlvdXMuanNvbicpO1xuICB9XG5cbiAgY3VycmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0KCd0ZXJtL2N1cnJlbnQuanNvbicpO1xuICB9XG5cbiAgc2VhcmNoKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0KGB0ZXJtLyR7b3B0aW9ucy55ZWFyfSwke29wdGlvbnMucXVhcnRlcn0uanNvbmApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlcm07XG4iXX0=