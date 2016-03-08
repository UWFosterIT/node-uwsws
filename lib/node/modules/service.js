'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Service = function () {
  function Service(config) {
    _classCallCheck(this, Service);

    this.config = config;
    this.log = config.log;
    this.cache = config.cache;
  }

  _createClass(Service, [{
    key: '_options',
    value: function _options(endpoint) {
      return {
        uriCache: endpoint.replace(/\//g, ''),
        uri: this.config.baseUrl + endpoint,
        agentOptions: {
          cert: this.config.auth.cert,
          key: this.config.auth.key
        }
      };
    }
  }, {
    key: '_get',
    value: function _get(endpoint, cb) {
      var _this = this;

      // wild    no load no save
      // dryrun  load not save
      // record  load and save
      var options = this._options(endpoint);

      if (this.config.cacheMode === 'wild') {
        this.log.debug('wild -- ' + options.uri);
        _request2.default.get(options, function (err, response, body) {
          var result = body;
          if (!err) {
            result = JSON.parse(body);
          }

          cb(err, response, result);
        });
      } else if (this.config.cacheMode === 'dryrun') {
        this.log.debug('dryrun for ' + options.uri);
        var body = this.cache.read(options.uriCache);
        if (body) {
          cb(null, null, JSON.parse(body));
        } else {
          _request2.default.get(options, function (err, response, body) {
            var result = body;
            if (!err) {
              result = JSON.parse(body);
            }

            cb(err, response, result);
          });
        }
      } else if (this.config.cacheMode === 'record') {
        this.log.debug('record -- ' + options.uri);
        var body = this.cache.read(options.uriCache);
        if (body) {
          cb(null, null, JSON.parse(body));
        } else {
          _request2.default.get(options, function (err, response, body) {
            var result = body;
            if (!err) {
              result = JSON.parse(body);
            }

            _this.cache.write(options.uriCache, body, true);
            cb(err, response, result);
          });
        }
      }
      return;
    }
  }]);

  return Service;
}();

exports.default = Service;