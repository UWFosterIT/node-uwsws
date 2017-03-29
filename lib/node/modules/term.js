'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var Term = function (_Service) {
  (0, _inherits3.default)(Term, _Service);

  function Term(config) {
    (0, _classCallCheck3.default)(this, Term);
    return (0, _possibleConstructorReturn3.default)(this, (Term.__proto__ || (0, _getPrototypeOf2.default)(Term)).call(this, config));
  }

  (0, _createClass3.default)(Term, [{
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
  }, {
    key: 'currentAndNext',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(options) {
        var numberOfTerms, termNames, qty, terms, year, start, z, i, nextTerm;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                numberOfTerms = options.numberOfTerms;

                if (numberOfTerms) {
                  numberOfTerms++;
                } else {
                  numberOfTerms = 2;
                }
                termNames = ['winter', 'spring', 'summer', 'autumn'];
                qty = numberOfTerms - 1;
                terms = [];
                _context.next = 7;
                return this.current().then(function (term) {
                  return term.data;
                });

              case 7:
                terms[0] = _context.sent;
                year = terms[0].Year;
                start = termNames.indexOf(terms[0].Quarter) + 1;
                z = 0;

              case 11:
                if (!(z < qty)) {
                  _context.next = 21;
                  break;
                }

                i = (z + start) % termNames.length;

                if (i % 4 === 0) {
                  year++;
                }
                _context.next = 16;
                return this.search({
                  quarter: termNames[i],
                  year: year
                }).catch(function (error) {
                  throw error;
                });

              case 16:
                nextTerm = _context.sent;

                terms.push(nextTerm.data);

              case 18:
                ++z;
                _context.next = 11;
                break;

              case 21:
                return _context.abrupt('return', { data: terms });

              case 22:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function currentAndNext(_x) {
        return _ref.apply(this, arguments);
      }

      return currentAndNext;
    }()
  }]);
  return Term;
}(_service2.default);

exports.default = Term;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3Rlcm0uanMiXSwibmFtZXMiOlsiVGVybSIsImNvbmZpZyIsIl9nZXQiLCJvcHRpb25zIiwieWVhciIsInF1YXJ0ZXIiLCJudW1iZXJPZlRlcm1zIiwidGVybU5hbWVzIiwicXR5IiwidGVybXMiLCJjdXJyZW50IiwidGhlbiIsInRlcm0iLCJkYXRhIiwiWWVhciIsInN0YXJ0IiwiaW5kZXhPZiIsIlF1YXJ0ZXIiLCJ6IiwiaSIsImxlbmd0aCIsInNlYXJjaCIsImNhdGNoIiwiZXJyb3IiLCJuZXh0VGVybSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBRXFCQSxJOzs7QUFDbkIsZ0JBQVlDLE1BQVosRUFBb0I7QUFBQTtBQUFBLDZIQUNaQSxNQURZO0FBRW5COzs7OzJCQUVNO0FBQ0wsYUFBTyxLQUFLQyxJQUFMLENBQVUsZ0JBQVYsQ0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLElBQUwsQ0FBVSxvQkFBVixDQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0EsSUFBTCxDQUFVLG1CQUFWLENBQVA7QUFDRDs7OzJCQUVNQyxPLEVBQVM7QUFDZCxhQUFPLEtBQUtELElBQUwsV0FBa0JDLFFBQVFDLElBQTFCLFNBQWtDRCxRQUFRRSxPQUExQyxXQUFQO0FBQ0Q7Ozs7NkZBRW9CRixPOzs7Ozs7QUFDZkcsNkIsR0FBZ0JILFFBQVFHLGE7O0FBQzVCLG9CQUFJQSxhQUFKLEVBQW1CO0FBQ2pCQTtBQUNELGlCQUZELE1BRU87QUFDTEEsa0NBQWdCLENBQWhCO0FBQ0Q7QUFDS0MseUIsR0FBWSxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLFFBQXJCLEVBQStCLFFBQS9CLEM7QUFDWkMsbUIsR0FBTUYsZ0JBQWdCLEM7QUFDeEJHLHFCLEdBQVEsRTs7dUJBQ0ssS0FBS0MsT0FBTCxHQUFlQyxJQUFmLENBQW9CLFVBQUNDLElBQUQsRUFBVTtBQUM3Qyx5QkFBT0EsS0FBS0MsSUFBWjtBQUNELGlCQUZnQixDOzs7QUFBakJKLHNCQUFNLENBQU4sQztBQUdJTCxvQixHQUFPSyxNQUFNLENBQU4sRUFBU0ssSTtBQUNoQkMscUIsR0FBUVIsVUFBVVMsT0FBVixDQUFrQlAsTUFBTSxDQUFOLEVBQVNRLE9BQTNCLElBQXNDLEM7QUFDekNDLGlCLEdBQUksQzs7O3NCQUFHQSxJQUFJVixHOzs7OztBQUNkVyxpQixHQUFJLENBQUNELElBQUlILEtBQUwsSUFBY1IsVUFBVWEsTTs7QUFDaEMsb0JBQUlELElBQUksQ0FBSixLQUFVLENBQWQsRUFBaUI7QUFDZmY7QUFDRDs7dUJBQ29CLEtBQUtpQixNQUFMLENBQVk7QUFDL0JoQiwyQkFBU0UsVUFBVVksQ0FBVixDQURzQjtBQUUvQmYsd0JBQVNBO0FBRnNCLGlCQUFaLEVBR2xCa0IsS0FIa0IsQ0FHWixVQUFDQyxLQUFELEVBQVc7QUFDbEIsd0JBQU1BLEtBQU47QUFDRCxpQkFMb0IsQzs7O0FBQWpCQyx3Qjs7QUFNSmYsc0JBQU1nQixJQUFOLENBQVdELFNBQVNYLElBQXBCOzs7QUFYdUIsa0JBQUVLLEM7Ozs7O2lEQWFwQixFQUFDTCxNQUFNSixLQUFQLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQWpEVVQsSSIsImZpbGUiOiJ0ZXJtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybSBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgbmV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0KCd0ZXJtL25leHQuanNvbicpO1xuICB9XG5cbiAgcHJldmlvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldCgndGVybS9wcmV2aW91cy5qc29uJyk7XG4gIH1cblxuICBjdXJyZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9nZXQoJ3Rlcm0vY3VycmVudC5qc29uJyk7XG4gIH1cblxuICBzZWFyY2gob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9nZXQoYHRlcm0vJHtvcHRpb25zLnllYXJ9LCR7b3B0aW9ucy5xdWFydGVyfS5qc29uYCk7XG4gIH1cblxuICBhc3luYyBjdXJyZW50QW5kTmV4dChvcHRpb25zKSB7XG4gICAgbGV0IG51bWJlck9mVGVybXMgPSBvcHRpb25zLm51bWJlck9mVGVybXM7XG4gICAgaWYgKG51bWJlck9mVGVybXMpIHtcbiAgICAgIG51bWJlck9mVGVybXMrKztcbiAgICB9IGVsc2Uge1xuICAgICAgbnVtYmVyT2ZUZXJtcyA9IDI7XG4gICAgfVxuICAgIGNvbnN0IHRlcm1OYW1lcyA9IFsnd2ludGVyJywgJ3NwcmluZycsICdzdW1tZXInLCAnYXV0dW1uJ107XG4gICAgY29uc3QgcXR5ID0gbnVtYmVyT2ZUZXJtcyAtIDE7XG4gICAgbGV0IHRlcm1zID0gW107XG4gICAgdGVybXNbMF0gPSBhd2FpdCB0aGlzLmN1cnJlbnQoKS50aGVuKCh0ZXJtKSA9PiB7XG4gICAgICByZXR1cm4gdGVybS5kYXRhO1xuICAgIH0pO1xuICAgIGxldCB5ZWFyID0gdGVybXNbMF0uWWVhcjtcbiAgICBsZXQgc3RhcnQgPSB0ZXJtTmFtZXMuaW5kZXhPZih0ZXJtc1swXS5RdWFydGVyKSArIDE7XG4gICAgZm9yIChsZXQgeiA9IDA7IHogPCBxdHk7ICsreikge1xuICAgICAgbGV0IGkgPSAoeiArIHN0YXJ0KSAlIHRlcm1OYW1lcy5sZW5ndGg7XG4gICAgICBpZiAoaSAlIDQgPT09IDApIHtcbiAgICAgICAgeWVhcisrO1xuICAgICAgfVxuICAgICAgbGV0IG5leHRUZXJtID0gYXdhaXQgdGhpcy5zZWFyY2goe1xuICAgICAgICBxdWFydGVyOiB0ZXJtTmFtZXNbaV0sXG4gICAgICAgIHllYXI6ICAgIHllYXIsXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9KTtcbiAgICAgIHRlcm1zLnB1c2gobmV4dFRlcm0uZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiB7ZGF0YTogdGVybXN9O1xuICB9XG59XG4iXX0=