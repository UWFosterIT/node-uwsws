'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Service = function () {
  function Service(config) {
    (0, _classCallCheck3.default)(this, Service);

    this.config = config;
    this.log = config.log;
    this.cache = config.cache;
  }

  (0, _createClass3.default)(Service, [{
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

      return new _promise2.default(function (fulfill, reject) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztJQUVNLE87QUFDSixtQkFBWSxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSxTQUFLLEdBQUwsR0FBVyxPQUFPLEdBQWxCO0FBQ0EsU0FBSyxLQUFMLEdBQWEsT0FBTyxLQUFwQjtBQUNEOzs7OzZCQUVRLFEsRUFBVTtBQUNqQixhQUFPO0FBQ0wsc0JBQWMsS0FBSyxNQUFMLENBQVksSUFEckI7QUFFTCxpQkFBYyxLQUFLLE1BQUwsQ0FBWSxPQUZyQjtBQUdMLGtCQUFjLFNBQVMsT0FBVCxDQUFpQixLQUFqQixFQUF3QixFQUF4QixDQUhUO0FBSUwsYUFBYyxLQUFLLE1BQUwsQ0FBWSxPQUFaLEdBQXNCO0FBSi9CLE9BQVA7QUFNRDs7O3lCQUVJLFEsRUFBVTtBQUFBOztBQUNiLGFBQU8sc0JBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjs7OztBQUl0QyxZQUFJLFVBQVUsTUFBSyxRQUFMLENBQWMsUUFBZCxDQUFkOztBQUVBLFlBQUksTUFBSyxNQUFMLENBQVksU0FBWixLQUEwQixNQUE5QixFQUFzQztBQUNwQyxnQkFBSyxHQUFMLENBQVMsS0FBVCxjQUEwQixRQUFRLEdBQWxDO0FBQ0EsNEJBQVEsR0FBUixDQUFZLE9BQVosRUFBcUIsVUFBQyxHQUFELEVBQU0sUUFBTixFQUFnQixJQUFoQixFQUF5QjtBQUM1QyxnQkFBSSxDQUFDLEdBQUwsRUFBVTtBQUNSLGtCQUFJLFNBQVMsVUFBVCxLQUF3QixHQUE1QixFQUFpQzs7O0FBRy9CLHVCQUFPLFlBQVA7QUFDRDtBQUNELHNCQUFRLE1BQUssWUFBTCxDQUFrQixRQUFsQixFQUE0QixJQUE1QixDQUFSO0FBQ0QsYUFQRCxNQU9PO0FBQ0wscUJBQU8sR0FBUDtBQUNEO0FBQ0YsV0FYRDtBQVlELFNBZEQsTUFjTyxJQUFJLE1BQUssTUFBTCxDQUFZLFNBQVosS0FBMEIsUUFBOUIsRUFBd0M7QUFDN0MsZ0JBQUssR0FBTCxDQUFTLEtBQVQsaUJBQTZCLFFBQVEsR0FBckM7QUFDQSxjQUFJLE9BQU8sTUFBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixRQUFRLFFBQXhCLENBQVg7QUFDQSxjQUFJLElBQUosRUFBVTtBQUNSLGdCQUFJLFdBQVcsRUFBZjtBQUNBLHFCQUFTLFVBQVQsR0FBc0IsR0FBdEI7QUFDQSxvQkFBUSxNQUFLLFlBQUwsQ0FBa0IsUUFBbEIsRUFBNEIsSUFBNUIsQ0FBUjtBQUNELFdBSkQsTUFJTztBQUNMLDhCQUFRLEdBQVIsQ0FBWSxPQUFaLEVBQXFCLFVBQUMsR0FBRCxFQUFNLFFBQU4sRUFBZ0IsSUFBaEIsRUFBeUI7QUFDNUMsa0JBQUksQ0FBQyxHQUFMLEVBQVU7QUFDUixvQkFBSSxTQUFTLFVBQVQsS0FBd0IsR0FBNUIsRUFBaUM7OztBQUcvQix5QkFBTyxZQUFQO0FBQ0Q7QUFDRCx3QkFBUSxNQUFLLFlBQUwsQ0FBa0IsUUFBbEIsRUFBNEIsSUFBNUIsQ0FBUjtBQUNELGVBUEQsTUFPTztBQUNMLHVCQUFPLEdBQVA7QUFDRDtBQUNGLGFBWEQ7QUFZRDtBQUNGLFNBckJNLE1BcUJBLElBQUksTUFBSyxNQUFMLENBQVksU0FBWixLQUEwQixRQUE5QixFQUF3QztBQUM3QyxnQkFBSyxHQUFMLENBQVMsS0FBVCxnQkFBNEIsUUFBUSxHQUFwQztBQUNBLGNBQUksUUFBTyxNQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLFFBQVEsUUFBeEIsQ0FBWDtBQUNBLGNBQUksS0FBSixFQUFVO0FBQ1IsZ0JBQUksWUFBVyxFQUFmO0FBQ0Esc0JBQVMsVUFBVCxHQUFzQixHQUF0QjtBQUNBLG9CQUFRLE1BQUssWUFBTCxDQUFrQixTQUFsQixFQUE0QixLQUE1QixDQUFSO0FBQ0QsV0FKRCxNQUlPO0FBQ0wsOEJBQVEsR0FBUixDQUFZLE9BQVosRUFBcUIsVUFBQyxHQUFELEVBQU0sUUFBTixFQUFnQixJQUFoQixFQUF5QjtBQUM1QyxrQkFBSSxDQUFDLEdBQUwsRUFBVTtBQUNSLG9CQUFJLFNBQVMsVUFBVCxLQUF3QixHQUE1QixFQUFpQztBQUMvQix3QkFBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixRQUFRLFFBQXpCLEVBQW1DLElBQW5DLEVBQXlDLElBQXpDO0FBQ0QsaUJBRkQsTUFFTyxJQUFJLFNBQVMsVUFBVCxLQUF3QixHQUE1QixFQUFpQzs7O0FBR3RDLHlCQUFPLFlBQVA7QUFDRDtBQUNELHdCQUFRLE1BQUssWUFBTCxDQUFrQixRQUFsQixFQUE0QixJQUE1QixDQUFSO0FBQ0QsZUFURCxNQVNPO0FBQ0wsdUJBQU8sR0FBUDtBQUNEO0FBQ0YsYUFiRDtBQWNEO0FBQ0Y7QUFDRixPQWpFTSxDQUFQO0FBa0VEOzs7aUNBRVksUSxFQUFVLEksRUFBTTtBQUMzQixVQUFJLFNBQVMsRUFBYjtBQUNBLGFBQU8sVUFBUCxHQUFvQixTQUFTLFVBQTdCO0FBQ0EsVUFBSSxTQUFTLFVBQVQsS0FBd0IsR0FBNUIsRUFBaUM7QUFDL0IsWUFBSSxDQUFDLEtBQUssT0FBTCxDQUFhLElBQWIsQ0FBTCxFQUF5QjtBQUN2QixpQkFBTyxPQUFQLEdBQWlCLElBQWpCO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQU8sT0FBUCxHQUFpQixLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWpCO0FBQ0Q7QUFDRCxlQUFPLElBQVAsR0FBYyxFQUFkO0FBQ0QsT0FQRCxNQU9PO0FBQ0wsZUFBTyxJQUFQLEdBQWMsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFkO0FBQ0Q7QUFDRCxhQUFPLE1BQVA7QUFDRDs7OzRCQUVPLEksRUFBTTtBQUNaLFVBQUk7QUFDRixhQUFLLEtBQUwsQ0FBVyxJQUFYO0FBQ0QsT0FGRCxDQUVFLE9BQU8sQ0FBUCxFQUFVO0FBQ1YsZUFBTyxLQUFQO0FBQ0Q7QUFDRCxhQUFPLElBQVA7QUFDRDs7Ozs7a0JBR1ksTyIsImZpbGUiOiJzZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlcXVlc3QgZnJvbSAncmVxdWVzdCc7XG5cbmNsYXNzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLmxvZyA9IGNvbmZpZy5sb2c7XG4gICAgdGhpcy5jYWNoZSA9IGNvbmZpZy5jYWNoZTtcbiAgfVxuXG4gIF9vcHRpb25zKGVuZHBvaW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFnZW50T3B0aW9uczogdGhpcy5jb25maWcuYXV0aCxcbiAgICAgIGhlYWRlcnM6ICAgICAgdGhpcy5jb25maWcuaGVhZGVycyxcbiAgICAgIHVyaUNhY2hlOiAgICAgZW5kcG9pbnQucmVwbGFjZSgvXFwvL2csICcnKSxcbiAgICAgIHVyaTogICAgICAgICAgdGhpcy5jb25maWcuYmFzZVVybCArIGVuZHBvaW50XG4gICAgfTtcbiAgfVxuXG4gIF9nZXQoZW5kcG9pbnQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKGZ1bGZpbGwsIHJlamVjdCkgPT4ge1xuICAgICAgLy8gd2lsZCAgICBubyBsb2FkIG5vIHNhdmVcbiAgICAgIC8vIGRyeXJ1biAgbG9hZCBub3Qgc2F2ZVxuICAgICAgLy8gcmVjb3JkICBsb2FkIGFuZCBzYXZlXG4gICAgICBsZXQgb3B0aW9ucyA9IHRoaXMuX29wdGlvbnMoZW5kcG9pbnQpO1xuXG4gICAgICBpZiAodGhpcy5jb25maWcuY2FjaGVNb2RlID09PSAnd2lsZCcpIHtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoYHdpbGQgLS0gJHtvcHRpb25zLnVyaX1gKTtcbiAgICAgICAgcmVxdWVzdC5nZXQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UsIGJvZHkpID0+IHtcbiAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDQwNCkge1xuICAgICAgICAgICAgICAvLyBzcGVjaWFsIGNhc2UgZm9yIDQwNCBiZWNhdXNlIHRoZSBTdHVkZW50IFdlYiBTZXJ2aWNlXG4gICAgICAgICAgICAgIC8vIHJldHVybnMgdWdseSBIVE1MIGluIHRoZSByZXNwb25zZSBib2R5LlxuICAgICAgICAgICAgICBib2R5ID0gJ05vdCBmb3VuZC4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVsZmlsbCh0aGlzLl9idWlsZFJlc3VsdChyZXNwb25zZSwgYm9keSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZy5jYWNoZU1vZGUgPT09ICdkcnlydW4nKSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKGBkcnlydW4gZm9yICR7b3B0aW9ucy51cml9YCk7XG4gICAgICAgIGxldCBib2R5ID0gdGhpcy5jYWNoZS5yZWFkKG9wdGlvbnMudXJpQ2FjaGUpO1xuICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgIGxldCByZXNwb25zZSA9IHt9O1xuICAgICAgICAgIHJlc3BvbnNlLnN0YXR1c0NvZGUgPSAyMDA7XG4gICAgICAgICAgZnVsZmlsbCh0aGlzLl9idWlsZFJlc3VsdChyZXNwb25zZSwgYm9keSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcXVlc3QuZ2V0KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlLCBib2R5KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgLy8gc3BlY2lhbCBjYXNlIGZvciA0MDQgYmVjYXVzZSB0aGUgU3R1ZGVudCBXZWIgU2VydmljZVxuICAgICAgICAgICAgICAgIC8vIHJldHVybnMgdWdseSBIVE1MIGluIHRoZSByZXNwb25zZSBib2R5LlxuICAgICAgICAgICAgICAgIGJvZHkgPSAnTm90IGZvdW5kLic7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZnVsZmlsbCh0aGlzLl9idWlsZFJlc3VsdChyZXNwb25zZSwgYm9keSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWcuY2FjaGVNb2RlID09PSAncmVjb3JkJykge1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhgcmVjb3JkIC0tICR7b3B0aW9ucy51cml9YCk7XG4gICAgICAgIGxldCBib2R5ID0gdGhpcy5jYWNoZS5yZWFkKG9wdGlvbnMudXJpQ2FjaGUpO1xuICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgIGxldCByZXNwb25zZSA9IHt9O1xuICAgICAgICAgIHJlc3BvbnNlLnN0YXR1c0NvZGUgPSAyMDA7XG4gICAgICAgICAgZnVsZmlsbCh0aGlzLl9idWlsZFJlc3VsdChyZXNwb25zZSwgYm9keSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcXVlc3QuZ2V0KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlLCBib2R5KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS53cml0ZShvcHRpb25zLnVyaUNhY2hlLCBib2R5LCB0cnVlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICAvLyBzcGVjaWFsIGNhc2UgZm9yIDQwNCBiZWNhdXNlIHRoZSBTdHVkZW50IFdlYiBTZXJ2aWNlXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJucyB1Z2x5IEhUTUwgaW4gdGhlIHJlc3BvbnNlIGJvZHkuXG4gICAgICAgICAgICAgICAgYm9keSA9ICdOb3QgZm91bmQuJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmdWxmaWxsKHRoaXMuX2J1aWxkUmVzdWx0KHJlc3BvbnNlLCBib2R5KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX2J1aWxkUmVzdWx0KHJlc3BvbnNlLCBib2R5KSB7XG4gICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgIHJlc3VsdC5zdGF0dXNDb2RlID0gcmVzcG9uc2Uuc3RhdHVzQ29kZTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSAhPT0gMjAwKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzSnNvbihib2R5KSkge1xuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGJvZHk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQubWVzc2FnZSA9IEpTT04ucGFyc2UoYm9keSk7XG4gICAgICB9XG4gICAgICByZXN1bHQuZGF0YSA9IHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuZGF0YSA9IEpTT04ucGFyc2UoYm9keSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBfaXNKc29uKGRhdGEpIHtcbiAgICB0cnkge1xuICAgICAgSlNPTi5wYXJzZShkYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2U7XG4iXX0=