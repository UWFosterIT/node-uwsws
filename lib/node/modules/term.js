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
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Term).call(this, config));
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
                return this.search({ year: year, quarter: termNames[i] }).catch(function (error) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3Rlcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7SUFFcUIsSTs7O0FBQ25CLGdCQUFZLE1BQVosRUFBb0I7QUFBQTtBQUFBLHlHQUNaLE1BRFk7QUFFbkI7Ozs7MkJBRU07QUFDTCxhQUFPLEtBQUssSUFBTCxDQUFVLGdCQUFWLENBQVA7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLLElBQUwsQ0FBVSxvQkFBVixDQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBSyxJQUFMLENBQVUsbUJBQVYsQ0FBUDtBQUNEOzs7MkJBRU0sTyxFQUFTO0FBQ2QsYUFBTyxLQUFLLElBQUwsV0FBa0IsUUFBUSxJQUExQixTQUFrQyxRQUFRLE9BQTFDLFdBQVA7QUFDRDs7Ozs2RkFFb0IsTzs7Ozs7O0FBQ2YsNkIsR0FBZ0IsUUFBUSxhOztBQUM1QixvQkFBSSxhQUFKLEVBQW1CO0FBQ2pCO0FBQ0QsaUJBRkQsTUFFTztBQUNMLGtDQUFnQixDQUFoQjtBQUNEO0FBQ0sseUIsR0FBWSxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLFFBQXJCLEVBQStCLFFBQS9CLEM7QUFDWixtQixHQUFNLGdCQUFnQixDO0FBQ3hCLHFCLEdBQVEsRTs7dUJBQ0ssS0FBSyxPQUFMLEdBQWUsSUFBZixDQUFvQixVQUFDLElBQUQsRUFBVTtBQUM3Qyx5QkFBTyxLQUFLLElBQVo7QUFDRCxpQkFGZ0IsQzs7O0FBQWpCLHNCQUFNLENBQU4sQztBQUdJLG9CLEdBQU8sTUFBTSxDQUFOLEVBQVMsSTtBQUNoQixxQixHQUFRLFVBQVUsT0FBVixDQUFrQixNQUFNLENBQU4sRUFBUyxPQUEzQixJQUFzQyxDO0FBQ3pDLGlCLEdBQUksQzs7O3NCQUFHLElBQUksRzs7Ozs7QUFDZCxpQixHQUFJLENBQUMsSUFBSSxLQUFMLElBQWMsVUFBVSxNOztBQUNoQyxvQkFBSSxJQUFJLENBQUosS0FBVSxDQUFkLEVBQWlCO0FBQ2Y7QUFDRDs7dUJBQ29CLEtBQUssTUFBTCxDQUFZLEVBQUMsTUFBTSxJQUFQLEVBQWEsU0FBUyxVQUFVLENBQVYsQ0FBdEIsRUFBWixFQUFpRCxLQUFqRCxDQUF1RCxVQUFDLEtBQUQsRUFBVztBQUNyRix3QkFBTSxLQUFOO0FBQ0QsaUJBRm9CLEM7OztBQUFqQix3Qjs7QUFHSixzQkFBTSxJQUFOLENBQVcsU0FBUyxJQUFwQjs7O0FBUnVCLGtCQUFFLEM7Ozs7O2lEQVVwQixFQUFDLE1BQU0sS0FBUCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkE5Q1UsSSIsImZpbGUiOiJ0ZXJtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybSBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgbmV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0KCd0ZXJtL25leHQuanNvbicpO1xuICB9XG5cbiAgcHJldmlvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldCgndGVybS9wcmV2aW91cy5qc29uJyk7XG4gIH1cblxuICBjdXJyZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9nZXQoJ3Rlcm0vY3VycmVudC5qc29uJyk7XG4gIH1cblxuICBzZWFyY2gob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9nZXQoYHRlcm0vJHtvcHRpb25zLnllYXJ9LCR7b3B0aW9ucy5xdWFydGVyfS5qc29uYCk7XG4gIH1cblxuICBhc3luYyBjdXJyZW50QW5kTmV4dChvcHRpb25zKSB7XG4gICAgbGV0IG51bWJlck9mVGVybXMgPSBvcHRpb25zLm51bWJlck9mVGVybXM7XG4gICAgaWYgKG51bWJlck9mVGVybXMpIHtcbiAgICAgIG51bWJlck9mVGVybXMgKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIG51bWJlck9mVGVybXMgPSAyO1xuICAgIH1cbiAgICBjb25zdCB0ZXJtTmFtZXMgPSBbJ3dpbnRlcicsICdzcHJpbmcnLCAnc3VtbWVyJywgJ2F1dHVtbiddO1xuICAgIGNvbnN0IHF0eSA9IG51bWJlck9mVGVybXMgLSAxO1xuICAgIGxldCB0ZXJtcyA9IFtdO1xuICAgIHRlcm1zWzBdID0gYXdhaXQgdGhpcy5jdXJyZW50KCkudGhlbigodGVybSkgPT4ge1xuICAgICAgcmV0dXJuIHRlcm0uZGF0YTtcbiAgICB9KTtcbiAgICBsZXQgeWVhciA9IHRlcm1zWzBdLlllYXI7XG4gICAgbGV0IHN0YXJ0ID0gdGVybU5hbWVzLmluZGV4T2YodGVybXNbMF0uUXVhcnRlcikgKyAxO1xuICAgIGZvciAobGV0IHogPSAwOyB6IDwgcXR5OyArK3opIHtcbiAgICAgIGxldCBpID0gKHogKyBzdGFydCkgJSB0ZXJtTmFtZXMubGVuZ3RoO1xuICAgICAgaWYgKGkgJSA0ID09PSAwKSB7XG4gICAgICAgIHllYXIrKztcbiAgICAgIH1cbiAgICAgIGxldCBuZXh0VGVybSA9IGF3YWl0IHRoaXMuc2VhcmNoKHt5ZWFyOiB5ZWFyLCBxdWFydGVyOiB0ZXJtTmFtZXNbaV19KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9KTtcbiAgICAgIHRlcm1zLnB1c2gobmV4dFRlcm0uZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiB7ZGF0YTogdGVybXN9O1xuICB9XG59XG4iXX0=