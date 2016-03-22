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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3Rlcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU07OztBQUNKLFdBREksSUFDSixDQUFZLE1BQVosRUFBb0I7MEJBRGhCLE1BQ2dCOztrRUFEaEIsaUJBRUksU0FEWTtHQUFwQjs7ZUFESTs7MkJBS0c7QUFDTCxhQUFPLEtBQUssSUFBTCxDQUFVLGdCQUFWLENBQVAsQ0FESzs7OzsrQkFJSTtBQUNULGFBQU8sS0FBSyxJQUFMLENBQVUsb0JBQVYsQ0FBUCxDQURTOzs7OzhCQUlEO0FBQ1IsYUFBTyxLQUFLLElBQUwsQ0FBVSxtQkFBVixDQUFQLENBRFE7Ozs7MkJBSUgsU0FBUztBQUNkLGFBQU8sS0FBSyxJQUFMLFdBQWtCLFFBQVEsSUFBUixTQUFnQixRQUFRLE9BQVIsVUFBbEMsQ0FBUCxDQURjOzs7O1NBakJaOzs7a0JBc0JTIiwiZmlsZSI6InRlcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBUZXJtIGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBuZXh0KCkge1xuICAgIHJldHVybiB0aGlzLl9nZXQoJ3Rlcm0vbmV4dC5qc29uJyk7XG4gIH1cblxuICBwcmV2aW91cygpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0KCd0ZXJtL3ByZXZpb3VzLmpzb24nKTtcbiAgfVxuXG4gIGN1cnJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldCgndGVybS9jdXJyZW50Lmpzb24nKTtcbiAgfVxuXG4gIHNlYXJjaChvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldChgdGVybS8ke29wdGlvbnMueWVhcn0sJHtvcHRpb25zLnF1YXJ0ZXJ9Lmpzb25gKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXJtO1xuIl19