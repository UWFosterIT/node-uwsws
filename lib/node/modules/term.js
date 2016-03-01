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
    value: function current(cb) {
      this._get('term/current.json', cb);
      return;
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