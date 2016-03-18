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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFTTtBQUNKLFdBREksT0FDSixDQUFZLE1BQVosRUFBb0I7MEJBRGhCLFNBQ2dCOztBQUNsQixTQUFLLE1BQUwsR0FBYyxNQUFkLENBRGtCO0FBRWxCLFNBQUssR0FBTCxHQUFXLE9BQU8sR0FBUCxDQUZPO0FBR2xCLFNBQUssS0FBTCxHQUFhLE9BQU8sS0FBUCxDQUhLO0dBQXBCOztlQURJOzs2QkFPSyxVQUFVO0FBQ2pCLGFBQU87QUFDTCxzQkFBYyxLQUFLLE1BQUwsQ0FBWSxJQUFaO0FBQ2QsaUJBQWMsS0FBSyxNQUFMLENBQVksT0FBWjtBQUNkLGtCQUFjLFNBQVMsT0FBVCxDQUFpQixLQUFqQixFQUF3QixFQUF4QixDQUFkO0FBQ0EsYUFBYyxLQUFLLE1BQUwsQ0FBWSxPQUFaLEdBQXNCLFFBQXRCO09BSmhCLENBRGlCOzs7O3lCQVNkLFVBQVU7OztBQUNiLGFBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjs7OztBQUl0QyxZQUFJLFVBQVUsTUFBSyxRQUFMLENBQWMsUUFBZCxDQUFWLENBSmtDOztBQU10QyxZQUFJLE1BQUssTUFBTCxDQUFZLFNBQVosS0FBMEIsTUFBMUIsRUFBa0M7QUFDcEMsZ0JBQUssR0FBTCxDQUFTLEtBQVQsY0FBMEIsUUFBUSxHQUFSLENBQTFCLENBRG9DO0FBRXBDLDRCQUFRLEdBQVIsQ0FBWSxPQUFaLEVBQXFCLFVBQUMsR0FBRCxFQUFNLFFBQU4sRUFBZ0IsSUFBaEIsRUFBeUI7QUFDNUMsZ0JBQUksQ0FBQyxHQUFELEVBQU07QUFDUixrQkFBSSxTQUFTLFVBQVQsS0FBd0IsR0FBeEIsRUFBNkI7OztBQUcvQix1QkFBTyxZQUFQLENBSCtCO2VBQWpDO0FBS0Esc0JBQVEsTUFBSyxZQUFMLENBQWtCLFFBQWxCLEVBQTRCLElBQTVCLENBQVIsRUFOUTthQUFWLE1BT087QUFDTCxxQkFBTyxHQUFQLEVBREs7YUFQUDtXQURtQixDQUFyQixDQUZvQztTQUF0QyxNQWNPLElBQUksTUFBSyxNQUFMLENBQVksU0FBWixLQUEwQixRQUExQixFQUFvQztBQUM3QyxnQkFBSyxHQUFMLENBQVMsS0FBVCxpQkFBNkIsUUFBUSxHQUFSLENBQTdCLENBRDZDO0FBRTdDLGNBQUksT0FBTyxNQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLFFBQVEsUUFBUixDQUF2QixDQUZ5QztBQUc3QyxjQUFJLElBQUosRUFBVTtBQUNSLGdCQUFJLFdBQVcsRUFBWCxDQURJO0FBRVIscUJBQVMsVUFBVCxHQUFzQixHQUF0QixDQUZRO0FBR1Isb0JBQVEsTUFBSyxZQUFMLENBQWtCLFFBQWxCLEVBQTRCLElBQTVCLENBQVIsRUFIUTtXQUFWLE1BSU87QUFDTCw4QkFBUSxHQUFSLENBQVksT0FBWixFQUFxQixVQUFDLEdBQUQsRUFBTSxRQUFOLEVBQWdCLElBQWhCLEVBQXlCO0FBQzVDLGtCQUFJLENBQUMsR0FBRCxFQUFNO0FBQ1Isb0JBQUksU0FBUyxVQUFULEtBQXdCLEdBQXhCLEVBQTZCOzs7QUFHL0IseUJBQU8sWUFBUCxDQUgrQjtpQkFBakM7QUFLQSx3QkFBUSxNQUFLLFlBQUwsQ0FBa0IsUUFBbEIsRUFBNEIsSUFBNUIsQ0FBUixFQU5RO2VBQVYsTUFPTztBQUNMLHVCQUFPLEdBQVAsRUFESztlQVBQO2FBRG1CLENBQXJCLENBREs7V0FKUDtTQUhLLE1BcUJBLElBQUksTUFBSyxNQUFMLENBQVksU0FBWixLQUEwQixRQUExQixFQUFvQztBQUM3QyxnQkFBSyxHQUFMLENBQVMsS0FBVCxnQkFBNEIsUUFBUSxHQUFSLENBQTVCLENBRDZDO0FBRTdDLGNBQUksUUFBTyxNQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLFFBQVEsUUFBUixDQUF2QixDQUZ5QztBQUc3QyxjQUFJLEtBQUosRUFBVTtBQUNSLGdCQUFJLFlBQVcsRUFBWCxDQURJO0FBRVIsc0JBQVMsVUFBVCxHQUFzQixHQUF0QixDQUZRO0FBR1Isb0JBQVEsTUFBSyxZQUFMLENBQWtCLFNBQWxCLEVBQTRCLEtBQTVCLENBQVIsRUFIUTtXQUFWLE1BSU87QUFDTCw4QkFBUSxHQUFSLENBQVksT0FBWixFQUFxQixVQUFDLEdBQUQsRUFBTSxRQUFOLEVBQWdCLElBQWhCLEVBQXlCO0FBQzVDLGtCQUFJLENBQUMsR0FBRCxFQUFNO0FBQ1Isb0JBQUksU0FBUyxVQUFULEtBQXdCLEdBQXhCLEVBQTZCO0FBQy9CLHdCQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLFFBQVEsUUFBUixFQUFrQixJQUFuQyxFQUF5QyxJQUF6QyxFQUQrQjtpQkFBakMsTUFFTyxJQUFJLFNBQVMsVUFBVCxLQUF3QixHQUF4QixFQUE2Qjs7O0FBR3RDLHlCQUFPLFlBQVAsQ0FIc0M7aUJBQWpDO0FBS1Asd0JBQVEsTUFBSyxZQUFMLENBQWtCLFFBQWxCLEVBQTRCLElBQTVCLENBQVIsRUFSUTtlQUFWLE1BU087QUFDTCx1QkFBTyxHQUFQLEVBREs7ZUFUUDthQURtQixDQUFyQixDQURLO1dBSlA7U0FISztPQXpDVSxDQUFuQixDQURhOzs7O2lDQXFFRixVQUFVLE1BQU07QUFDM0IsVUFBSSxTQUFTLEVBQVQsQ0FEdUI7QUFFM0IsYUFBTyxVQUFQLEdBQW9CLFNBQVMsVUFBVCxDQUZPO0FBRzNCLFVBQUksU0FBUyxVQUFULEtBQXdCLEdBQXhCLEVBQTZCO0FBQy9CLFlBQUksQ0FBQyxLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQUQsRUFBcUI7QUFDdkIsaUJBQU8sT0FBUCxHQUFpQixJQUFqQixDQUR1QjtTQUF6QixNQUVPO0FBQ0wsaUJBQU8sT0FBUCxHQUFpQixLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWpCLENBREs7U0FGUDtBQUtBLGVBQU8sSUFBUCxHQUFjLEVBQWQsQ0FOK0I7T0FBakMsTUFPTztBQUNMLGVBQU8sSUFBUCxHQUFjLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZCxDQURLO09BUFA7QUFVQSxhQUFPLE1BQVAsQ0FiMkI7Ozs7NEJBZ0JyQixNQUFNO0FBQ1osVUFBSTtBQUNGLGFBQUssS0FBTCxDQUFXLElBQVgsRUFERTtPQUFKLENBRUUsT0FBTyxDQUFQLEVBQVU7QUFDVixlQUFPLEtBQVAsQ0FEVTtPQUFWO0FBR0YsYUFBTyxJQUFQLENBTlk7Ozs7U0FyR1Y7OztrQkErR1MiLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0IGZyb20gJ3JlcXVlc3QnO1xuXG5jbGFzcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5sb2cgPSBjb25maWcubG9nO1xuICAgIHRoaXMuY2FjaGUgPSBjb25maWcuY2FjaGU7XG4gIH1cblxuICBfb3B0aW9ucyhlbmRwb2ludCkge1xuICAgIHJldHVybiB7XG4gICAgICBhZ2VudE9wdGlvbnM6IHRoaXMuY29uZmlnLmF1dGgsXG4gICAgICBoZWFkZXJzOiAgICAgIHRoaXMuY29uZmlnLmhlYWRlcnMsXG4gICAgICB1cmlDYWNoZTogICAgIGVuZHBvaW50LnJlcGxhY2UoL1xcLy9nLCAnJyksXG4gICAgICB1cmk6ICAgICAgICAgIHRoaXMuY29uZmlnLmJhc2VVcmwgKyBlbmRwb2ludFxuICAgIH07XG4gIH1cblxuICBfZ2V0KGVuZHBvaW50KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChmdWxmaWxsLCByZWplY3QpID0+IHtcbiAgICAgIC8vIHdpbGQgICAgbm8gbG9hZCBubyBzYXZlXG4gICAgICAvLyBkcnlydW4gIGxvYWQgbm90IHNhdmVcbiAgICAgIC8vIHJlY29yZCAgbG9hZCBhbmQgc2F2ZVxuICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLl9vcHRpb25zKGVuZHBvaW50KTtcblxuICAgICAgaWYgKHRoaXMuY29uZmlnLmNhY2hlTW9kZSA9PT0gJ3dpbGQnKSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKGB3aWxkIC0tICR7b3B0aW9ucy51cml9YCk7XG4gICAgICAgIHJlcXVlc3QuZ2V0KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlLCBib2R5KSA9PiB7XG4gICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgLy8gc3BlY2lhbCBjYXNlIGZvciA0MDQgYmVjYXVzZSB0aGUgU3R1ZGVudCBXZWIgU2VydmljZVxuICAgICAgICAgICAgICAvLyByZXR1cm5zIHVnbHkgSFRNTCBpbiB0aGUgcmVzcG9uc2UgYm9keS5cbiAgICAgICAgICAgICAgYm9keSA9ICdOb3QgZm91bmQuJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bGZpbGwodGhpcy5fYnVpbGRSZXN1bHQocmVzcG9uc2UsIGJvZHkpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWcuY2FjaGVNb2RlID09PSAnZHJ5cnVuJykge1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhgZHJ5cnVuIGZvciAke29wdGlvbnMudXJpfWApO1xuICAgICAgICBsZXQgYm9keSA9IHRoaXMuY2FjaGUucmVhZChvcHRpb25zLnVyaUNhY2hlKTtcbiAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB7fTtcbiAgICAgICAgICByZXNwb25zZS5zdGF0dXNDb2RlID0gMjAwO1xuICAgICAgICAgIGZ1bGZpbGwodGhpcy5fYnVpbGRSZXN1bHQocmVzcG9uc2UsIGJvZHkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXF1ZXN0LmdldChvcHRpb25zLCAoZXJyLCByZXNwb25zZSwgYm9keSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIC8vIHNwZWNpYWwgY2FzZSBmb3IgNDA0IGJlY2F1c2UgdGhlIFN0dWRlbnQgV2ViIFNlcnZpY2VcbiAgICAgICAgICAgICAgICAvLyByZXR1cm5zIHVnbHkgSFRNTCBpbiB0aGUgcmVzcG9uc2UgYm9keS5cbiAgICAgICAgICAgICAgICBib2R5ID0gJ05vdCBmb3VuZC4nO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZ1bGZpbGwodGhpcy5fYnVpbGRSZXN1bHQocmVzcG9uc2UsIGJvZHkpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlnLmNhY2hlTW9kZSA9PT0gJ3JlY29yZCcpIHtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoYHJlY29yZCAtLSAke29wdGlvbnMudXJpfWApO1xuICAgICAgICBsZXQgYm9keSA9IHRoaXMuY2FjaGUucmVhZChvcHRpb25zLnVyaUNhY2hlKTtcbiAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB7fTtcbiAgICAgICAgICByZXNwb25zZS5zdGF0dXNDb2RlID0gMjAwO1xuICAgICAgICAgIGZ1bGZpbGwodGhpcy5fYnVpbGRSZXN1bHQocmVzcG9uc2UsIGJvZHkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXF1ZXN0LmdldChvcHRpb25zLCAoZXJyLCByZXNwb25zZSwgYm9keSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUud3JpdGUob3B0aW9ucy51cmlDYWNoZSwgYm9keSwgdHJ1ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgLy8gc3BlY2lhbCBjYXNlIGZvciA0MDQgYmVjYXVzZSB0aGUgU3R1ZGVudCBXZWIgU2VydmljZVxuICAgICAgICAgICAgICAgIC8vIHJldHVybnMgdWdseSBIVE1MIGluIHRoZSByZXNwb25zZSBib2R5LlxuICAgICAgICAgICAgICAgIGJvZHkgPSAnTm90IGZvdW5kLic7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZnVsZmlsbCh0aGlzLl9idWlsZFJlc3VsdChyZXNwb25zZSwgYm9keSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9idWlsZFJlc3VsdChyZXNwb25zZSwgYm9keSkge1xuICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICByZXN1bHQuc3RhdHVzQ29kZSA9IHJlc3BvbnNlLnN0YXR1c0NvZGU7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IDIwMCkge1xuICAgICAgaWYgKCF0aGlzLl9pc0pzb24oYm9keSkpIHtcbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBib2R5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBKU09OLnBhcnNlKGJvZHkpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LmRhdGEgPSB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LmRhdGEgPSBKU09OLnBhcnNlKGJvZHkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgX2lzSnNvbihkYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlO1xuIl19