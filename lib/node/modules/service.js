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
        agentOptions: this.config.auth,
        headers: this.config.headers,
        uriCache: endpoint.replace(/\//g, ''),
        uri: this.config.baseUrl + endpoint
      };
    }
  }, {
    key: '_get',
    value: function _get(endpoint) {
      var _this = this;

      return new Promise(function (fulfill, reject) {
        // wild    no load no save
        // dryrun  load not save
        // record  load and save
        var options = _this._options(endpoint);

        if (_this.config.cacheMode === 'wild') {
          _this.log.debug('wild -- ' + options.uri);
          _request2.default.get(options, function (err, response, body) {
            if (!err) {
              if (response.statusCode === 404) {
                // special case for 404 because the Student Web Service
                // returns ugly HTML in the response body.
                body = 'Not found.';
              }
              fulfill(_this._buildResult(response, body));
            } else {
              reject(err);
            }
          });
        } else if (_this.config.cacheMode === 'dryrun') {
          _this.log.debug('dryrun for ' + options.uri);
          var body = _this.cache.read(options.uriCache);
          if (body) {
            var response = {};
            response.statusCode = 200;
            fulfill(_this._buildResult(response, body));
          } else {
            _request2.default.get(options, function (err, response, body) {
              if (!err) {
                if (response.statusCode === 404) {
                  // special case for 404 because the Student Web Service
                  // returns ugly HTML in the response body.
                  body = 'Not found.';
                }
                fulfill(_this._buildResult(response, body));
              } else {
                reject(err);
              }
            });
          }
        } else if (_this.config.cacheMode === 'record') {
          _this.log.debug('record -- ' + options.uri);
          var _body = _this.cache.read(options.uriCache);
          if (_body) {
            var _response = {};
            _response.statusCode = 200;
            fulfill(_this._buildResult(_response, _body));
          } else {
            _request2.default.get(options, function (err, response, body) {
              if (!err) {
                if (response.statusCode === 200) {
                  _this.cache.write(options.uriCache, body, true);
                } else if (response.statusCode === 404) {
                  // special case for 404 because the Student Web Service
                  // returns ugly HTML in the response body.
                  body = 'Not found.';
                }
                fulfill(_this._buildResult(response, body));
              } else {
                reject(err);
              }
            });
          }
        }
      });
    }
  }, {
    key: '_buildResult',
    value: function _buildResult(response, body) {
      var result = {};
      result.statusCode = response.statusCode;
      if (response.statusCode !== 200) {
        if (!this._isJson(body)) {
          result.message = body;
        } else {
          result.message = JSON.parse(body);
        }
        result.data = {};
      } else {
        result.data = JSON.parse(body);
      }
      return result;
    }
  }, {
    key: '_isJson',
    value: function _isJson(data) {
      try {
        JSON.parse(data);
      } catch (e) {
        return false;
      }
      return true;
    }
  }]);

  return Service;
}();

exports.default = Service;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFTSxPO0FBQ0osV0FESSxPQUNKLENBQVksTUFBWixFQUFvQjtBQUFBLDBCQURoQixPQUNnQjs7QUFDbEIsU0FBSyxNQUFMLEdBQWMsTUFBZDtBQUNBLFNBQUssR0FBTCxHQUFXLE9BQU8sR0FBbEI7QUFDQSxTQUFLLEtBQUwsR0FBYSxPQUFPLEtBQXBCO0FBQ0Q7O2VBTEcsTzs7NkJBT0ssUSxFQUFVO0FBQ2pCLGFBQU87QUFDTCxzQkFBYyxLQUFLLE1BQUwsQ0FBWSxJQURyQjtBQUVMLGlCQUFjLEtBQUssTUFBTCxDQUFZLE9BRnJCO0FBR0wsa0JBQWMsU0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXdCLEVBQXhCLENBSFQ7QUFJTCxhQUFjLEtBQUssTUFBTCxDQUFZLE9BQVosR0FBc0I7QUFKL0IsT0FBUDtBQU1EOzs7eUJBRUksUSxFQUFVO0FBQUE7O0FBQ2IsYUFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCOzs7O0FBSXRDLFlBQUksVUFBVSxNQUFLLFFBQUwsQ0FBYyxRQUFkLENBQWQ7O0FBRUEsWUFBSSxNQUFLLE1BQUwsQ0FBWSxTQUFaLEtBQTBCLE1BQTlCLEVBQXNDO0FBQ3BDLGdCQUFLLEdBQUwsQ0FBUyxLQUFULGNBQTBCLFFBQVEsR0FBbEM7QUFDQSw0QkFBUSxHQUFSLENBQVksT0FBWixFQUFxQixVQUFDLEdBQUQsRUFBTSxRQUFOLEVBQWdCLElBQWhCLEVBQXlCO0FBQzVDLGdCQUFJLENBQUMsR0FBTCxFQUFVO0FBQ1Isa0JBQUksU0FBUyxVQUFULEtBQXdCLEdBQTVCLEVBQWlDOzs7QUFHL0IsdUJBQU8sWUFBUDtBQUNEO0FBQ0Qsc0JBQVEsTUFBSyxZQUFMLENBQWtCLFFBQWxCLEVBQTRCLElBQTVCLENBQVI7QUFDRCxhQVBELE1BT087QUFDTCxxQkFBTyxHQUFQ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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tICdyZXF1ZXN0JztcblxuY2xhc3MgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMubG9nID0gY29uZmlnLmxvZztcbiAgICB0aGlzLmNhY2hlID0gY29uZmlnLmNhY2hlO1xuICB9XG5cbiAgX29wdGlvbnMoZW5kcG9pbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWdlbnRPcHRpb25zOiB0aGlzLmNvbmZpZy5hdXRoLFxuICAgICAgaGVhZGVyczogICAgICB0aGlzLmNvbmZpZy5oZWFkZXJzLFxuICAgICAgdXJpQ2FjaGU6ICAgICBlbmRwb2ludC5yZXBsYWNlKC9cXC8vZywgJycpLFxuICAgICAgdXJpOiAgICAgICAgICB0aGlzLmNvbmZpZy5iYXNlVXJsICsgZW5kcG9pbnRcbiAgICB9O1xuICB9XG5cbiAgX2dldChlbmRwb2ludCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgoZnVsZmlsbCwgcmVqZWN0KSA9PiB7XG4gICAgICAvLyB3aWxkICAgIG5vIGxvYWQgbm8gc2F2ZVxuICAgICAgLy8gZHJ5cnVuICBsb2FkIG5vdCBzYXZlXG4gICAgICAvLyByZWNvcmQgIGxvYWQgYW5kIHNhdmVcbiAgICAgIGxldCBvcHRpb25zID0gdGhpcy5fb3B0aW9ucyhlbmRwb2ludCk7XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5jYWNoZU1vZGUgPT09ICd3aWxkJykge1xuICAgICAgICB0aGlzLmxvZy5kZWJ1Zyhgd2lsZCAtLSAke29wdGlvbnMudXJpfWApO1xuICAgICAgICByZXF1ZXN0LmdldChvcHRpb25zLCAoZXJyLCByZXNwb25zZSwgYm9keSkgPT4ge1xuICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgIC8vIHNwZWNpYWwgY2FzZSBmb3IgNDA0IGJlY2F1c2UgdGhlIFN0dWRlbnQgV2ViIFNlcnZpY2VcbiAgICAgICAgICAgICAgLy8gcmV0dXJucyB1Z2x5IEhUTUwgaW4gdGhlIHJlc3BvbnNlIGJvZHkuXG4gICAgICAgICAgICAgIGJvZHkgPSAnTm90IGZvdW5kLic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdWxmaWxsKHRoaXMuX2J1aWxkUmVzdWx0KHJlc3BvbnNlLCBib2R5KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlnLmNhY2hlTW9kZSA9PT0gJ2RyeXJ1bicpIHtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoYGRyeXJ1biBmb3IgJHtvcHRpb25zLnVyaX1gKTtcbiAgICAgICAgbGV0IGJvZHkgPSB0aGlzLmNhY2hlLnJlYWQob3B0aW9ucy51cmlDYWNoZSk7XG4gICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgbGV0IHJlc3BvbnNlID0ge307XG4gICAgICAgICAgcmVzcG9uc2Uuc3RhdHVzQ29kZSA9IDIwMDtcbiAgICAgICAgICBmdWxmaWxsKHRoaXMuX2J1aWxkUmVzdWx0KHJlc3BvbnNlLCBib2R5KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVxdWVzdC5nZXQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UsIGJvZHkpID0+IHtcbiAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICAvLyBzcGVjaWFsIGNhc2UgZm9yIDQwNCBiZWNhdXNlIHRoZSBTdHVkZW50IFdlYiBTZXJ2aWNlXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJucyB1Z2x5IEhUTUwgaW4gdGhlIHJlc3BvbnNlIGJvZHkuXG4gICAgICAgICAgICAgICAgYm9keSA9ICdOb3QgZm91bmQuJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmdWxmaWxsKHRoaXMuX2J1aWxkUmVzdWx0KHJlc3BvbnNlLCBib2R5KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZy5jYWNoZU1vZGUgPT09ICdyZWNvcmQnKSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKGByZWNvcmQgLS0gJHtvcHRpb25zLnVyaX1gKTtcbiAgICAgICAgbGV0IGJvZHkgPSB0aGlzLmNhY2hlLnJlYWQob3B0aW9ucy51cmlDYWNoZSk7XG4gICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgbGV0IHJlc3BvbnNlID0ge307XG4gICAgICAgICAgcmVzcG9uc2Uuc3RhdHVzQ29kZSA9IDIwMDtcbiAgICAgICAgICBmdWxmaWxsKHRoaXMuX2J1aWxkUmVzdWx0KHJlc3BvbnNlLCBib2R5KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVxdWVzdC5nZXQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UsIGJvZHkpID0+IHtcbiAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLndyaXRlKG9wdGlvbnMudXJpQ2FjaGUsIGJvZHksIHRydWUpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIC8vIHNwZWNpYWwgY2FzZSBmb3IgNDA0IGJlY2F1c2UgdGhlIFN0dWRlbnQgV2ViIFNlcnZpY2VcbiAgICAgICAgICAgICAgICAvLyByZXR1cm5zIHVnbHkgSFRNTCBpbiB0aGUgcmVzcG9uc2UgYm9keS5cbiAgICAgICAgICAgICAgICBib2R5ID0gJ05vdCBmb3VuZC4nO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZ1bGZpbGwodGhpcy5fYnVpbGRSZXN1bHQocmVzcG9uc2UsIGJvZHkpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfYnVpbGRSZXN1bHQocmVzcG9uc2UsIGJvZHkpIHtcbiAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgcmVzdWx0LnN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXNDb2RlO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9PSAyMDApIHtcbiAgICAgIGlmICghdGhpcy5faXNKc29uKGJvZHkpKSB7XG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0gYm9keTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0gSlNPTi5wYXJzZShib2R5KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5kYXRhID0ge307XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5kYXRhID0gSlNPTi5wYXJzZShib2R5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIF9pc0pzb24oZGF0YSkge1xuICAgIHRyeSB7XG4gICAgICBKU09OLnBhcnNlKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VydmljZTtcbiJdfQ==