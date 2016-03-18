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
        if (!Service._isJson(body)) {
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
  }], [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFTTtBQUNKLFdBREksT0FDSixDQUFZLE1BQVosRUFBb0I7MEJBRGhCLFNBQ2dCOztBQUNsQixTQUFLLE1BQUwsR0FBYyxNQUFkLENBRGtCO0FBRWxCLFNBQUssR0FBTCxHQUFXLE9BQU8sR0FBUCxDQUZPO0FBR2xCLFNBQUssS0FBTCxHQUFhLE9BQU8sS0FBUCxDQUhLO0dBQXBCOztlQURJOzs2QkFPSyxVQUFVO0FBQ2pCLGFBQU87QUFDTCxzQkFBYyxLQUFLLE1BQUwsQ0FBWSxJQUFaO0FBQ2QsaUJBQWMsS0FBSyxNQUFMLENBQVksT0FBWjtBQUNkLGtCQUFjLFNBQVMsT0FBVCxDQUFpQixLQUFqQixFQUF3QixFQUF4QixDQUFkO0FBQ0EsYUFBYyxLQUFLLE1BQUwsQ0FBWSxPQUFaLEdBQXNCLFFBQXRCO09BSmhCLENBRGlCOzs7O3lCQVNkLFVBQVU7OztBQUNiLGFBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjs7OztBQUl0QyxZQUFJLFVBQVUsTUFBSyxRQUFMLENBQWMsUUFBZCxDQUFWLENBSmtDOztBQU10QyxZQUFJLE1BQUssTUFBTCxDQUFZLFNBQVosS0FBMEIsTUFBMUIsRUFBa0M7QUFDcEMsZ0JBQUssR0FBTCxDQUFTLEtBQVQsY0FBMEIsUUFBUSxHQUFSLENBQTFCLENBRG9DO0FBRXBDLDRCQUFRLEdBQVIsQ0FBWSxPQUFaLEVBQXFCLFVBQUMsR0FBRCxFQUFNLFFBQU4sRUFBZ0IsSUFBaEIsRUFBeUI7QUFDNUMsZ0JBQUksQ0FBQyxHQUFELEVBQU07QUFDUixrQkFBSSxTQUFTLFVBQVQsS0FBd0IsR0FBeEIsRUFBNkI7OztBQUcvQix1QkFBTyxZQUFQLENBSCtCO2VBQWpDO0FBS0Esc0JBQVEsTUFBSyxZQUFMLENBQWtCLFFBQWxCLEVBQTRCLElBQTVCLENBQVIsRUFO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TUFBTTtBQUNuQixVQUFJO0FBQ0YsYUFBSyxLQUFMLENBQVcsSUFBWCxFQURFO09BQUosQ0FFRSxPQUFPLENBQVAsRUFBVTtBQUNWLGVBQU8sS0FBUCxDQURVO09BQVY7QUFHRixhQUFPLElBQVAsQ0FObUI7Ozs7U0FyR2pCOzs7a0JBK0dTIiwiZmlsZSI6InNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tICdyZXF1ZXN0JztcblxuY2xhc3MgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMubG9nID0gY29uZmlnLmxvZztcbiAgICB0aGlzLmNhY2hlID0gY29uZmlnLmNhY2hlO1xuICB9XG5cbiAgX29wdGlvbnMoZW5kcG9pbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWdlbnRPcHRpb25zOiB0aGlzLmNvbmZpZy5hdXRoLFxuICAgICAgaGVhZGVyczogICAgICB0aGlzLmNvbmZpZy5oZWFkZXJzLFxuICAgICAgdXJpQ2FjaGU6ICAgICBlbmRwb2ludC5yZXBsYWNlKC9cXC8vZywgJycpLFxuICAgICAgdXJpOiAgICAgICAgICB0aGlzLmNvbmZpZy5iYXNlVXJsICsgZW5kcG9pbnRcbiAgICB9O1xuICB9XG5cbiAgX2dldChlbmRwb2ludCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgoZnVsZmlsbCwgcmVqZWN0KSA9PiB7XG4gICAgICAvLyB3aWxkICAgIG5vIGxvYWQgbm8gc2F2ZVxuICAgICAgLy8gZHJ5cnVuICBsb2FkIG5vdCBzYXZlXG4gICAgICAvLyByZWNvcmQgIGxvYWQgYW5kIHNhdmVcbiAgICAgIGxldCBvcHRpb25zID0gdGhpcy5fb3B0aW9ucyhlbmRwb2ludCk7XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5jYWNoZU1vZGUgPT09ICd3aWxkJykge1xuICAgICAgICB0aGlzLmxvZy5kZWJ1Zyhgd2lsZCAtLSAke29wdGlvbnMudXJpfWApO1xuICAgICAgICByZXF1ZXN0LmdldChvcHRpb25zLCAoZXJyLCByZXNwb25zZSwgYm9keSkgPT4ge1xuICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgIC8vIHNwZWNpYWwgY2FzZSBmb3IgNDA0IGJlY2F1c2UgdGhlIFN0dWRlbnQgV2ViIFNlcnZpY2VcbiAgICAgICAgICAgICAgLy8gcmV0dXJucyB1Z2x5IEhUTUwgaW4gdGhlIHJlc3BvbnNlIGJvZHkuXG4gICAgICAgICAgICAgIGJvZHkgPSAnTm90IGZvdW5kLic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdWxmaWxsKHRoaXMuX2J1aWxkUmVzdWx0KHJlc3BvbnNlLCBib2R5KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlnLmNhY2hlTW9kZSA9PT0gJ2RyeXJ1bicpIHtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoYGRyeXJ1biBmb3IgJHtvcHRpb25zLnVyaX1gKTtcbiAgICAgICAgbGV0IGJvZHkgPSB0aGlzLmNhY2hlLnJlYWQob3B0aW9ucy51cmlDYWNoZSk7XG4gICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgbGV0IHJlc3BvbnNlID0ge307XG4gICAgICAgICAgcmVzcG9uc2Uuc3RhdHVzQ29kZSA9IDIwMDtcbiAgICAgICAgICBmdWxmaWxsKHRoaXMuX2J1aWxkUmVzdWx0KHJlc3BvbnNlLCBib2R5KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVxdWVzdC5nZXQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UsIGJvZHkpID0+IHtcbiAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICAvLyBzcGVjaWFsIGNhc2UgZm9yIDQwNCBiZWNhdXNlIHRoZSBTdHVkZW50IFdlYiBTZXJ2aWNlXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJucyB1Z2x5IEhUTUwgaW4gdGhlIHJlc3BvbnNlIGJvZHkuXG4gICAgICAgICAgICAgICAgYm9keSA9ICdOb3QgZm91bmQuJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmdWxmaWxsKHRoaXMuX2J1aWxkUmVzdWx0KHJlc3BvbnNlLCBib2R5KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZy5jYWNoZU1vZGUgPT09ICdyZWNvcmQnKSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKGByZWNvcmQgLS0gJHtvcHRpb25zLnVyaX1gKTtcbiAgICAgICAgbGV0IGJvZHkgPSB0aGlzLmNhY2hlLnJlYWQob3B0aW9ucy51cmlDYWNoZSk7XG4gICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgbGV0IHJlc3BvbnNlID0ge307XG4gICAgICAgICAgcmVzcG9uc2Uuc3RhdHVzQ29kZSA9IDIwMDtcbiAgICAgICAgICBmdWxmaWxsKHRoaXMuX2J1aWxkUmVzdWx0KHJlc3BvbnNlLCBib2R5KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVxdWVzdC5nZXQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UsIGJvZHkpID0+IHtcbiAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLndyaXRlKG9wdGlvbnMudXJpQ2FjaGUsIGJvZHksIHRydWUpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIC8vIHNwZWNpYWwgY2FzZSBmb3IgNDA0IGJlY2F1c2UgdGhlIFN0dWRlbnQgV2ViIFNlcnZpY2VcbiAgICAgICAgICAgICAgICAvLyByZXR1cm5zIHVnbHkgSFRNTCBpbiB0aGUgcmVzcG9uc2UgYm9keS5cbiAgICAgICAgICAgICAgICBib2R5ID0gJ05vdCBmb3VuZC4nO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZ1bGZpbGwodGhpcy5fYnVpbGRSZXN1bHQocmVzcG9uc2UsIGJvZHkpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfYnVpbGRSZXN1bHQocmVzcG9uc2UsIGJvZHkpIHtcbiAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgcmVzdWx0LnN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXNDb2RlO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9PSAyMDApIHtcbiAgICAgIGlmICghU2VydmljZS5faXNKc29uKGJvZHkpKSB7XG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0gYm9keTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0gSlNPTi5wYXJzZShib2R5KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5kYXRhID0ge307XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5kYXRhID0gSlNPTi5wYXJzZShib2R5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyBfaXNKc29uKGRhdGEpIHtcbiAgICB0cnkge1xuICAgICAgSlNPTi5wYXJzZShkYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2U7XG4iXX0=