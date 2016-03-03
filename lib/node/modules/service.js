'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nock = require('nock');

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Service = function () {
  function Service(config) {
    _classCallCheck(this, Service);

    this.config = config;
  }

  _createClass(Service, [{
    key: '_options',
    value: function _options(endpoint) {
      return {
        uri: this.config.baseUrl + endpoint,
        agentOptions: {
          cert: this.config.cert,
          key: this.config.key
        }
      };
    }
  }, {
    key: '_get',
    value: function _get(endpoint, cb) {
      var _this = this;

      _nock.back.setMode(this.config.cacheMode);
      _nock.back.fixtures = this.config.cachePath;
      (0, _nock.back)(endpoint.replace('/', ''), function (nockDone) {
        _request2.default.get(_this._options(endpoint), function (err, response, body) {
          nockDone();
          var result = body;
          if (!err) {
            result = JSON.parse(body);
          }

          cb(err, response, result);
        });
      });

      return;
    }
  }]);

  return Service;
}();

exports.default = Service;