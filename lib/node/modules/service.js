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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQUVNO0FBQ0osV0FESSxPQUNKLENBQVksTUFBWixFQUFvQjswQkFEaEIsU0FDZ0I7O0FBQ2xCLFNBQUssTUFBTCxHQUFlLE1BQWYsQ0FEa0I7QUFFbEIsU0FBSyxHQUFMLEdBQVcsT0FBTyxHQUFQLENBRk87QUFHbEIsU0FBSyxLQUFMLEdBQWEsT0FBTyxLQUFQLENBSEs7R0FBcEI7O2VBREk7OzZCQU9LLFVBQVU7QUFDakIsYUFBTztBQUNMLGtCQUFjLFNBQVMsT0FBVCxDQUFpQixLQUFqQixFQUF3QixFQUF4QixDQUFkO0FBQ0EsYUFBYyxLQUFLLE1BQUwsQ0FBWSxPQUFaLEdBQXNCLFFBQXRCO0FBQ2Qsc0JBQWM7QUFDWixnQkFBTSxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLElBQWpCO0FBQ04sZUFBTSxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLEdBQWpCO1NBRlI7T0FIRixDQURpQjs7Ozt5QkFXZCxVQUFVLElBQUk7Ozs7OztBQUlqQixVQUFJLFVBQVUsS0FBSyxRQUFMLENBQWMsUUFBZCxDQUFWLENBSmE7O0FBTWpCLFVBQUksS0FBSyxNQUFMLENBQVksU0FBWixLQUEwQixNQUExQixFQUFrQztBQUNwQyxhQUFLLEdBQUwsQ0FBUyxLQUFULGNBQTBCLFFBQVEsR0FBUixDQUExQixDQURvQztBQUVwQywwQkFBUSxHQUFSLENBQVksT0FBWixFQUFxQixVQUFVLEdBQVYsRUFBZSxRQUFmLEVBQXlCLElBQXpCLEVBQStCO0FBQ2xELGNBQUksU0FBUyxJQUFULENBRDhDO0FBRWxELGNBQUksQ0FBQyxHQUFELEVBQU07QUFDUixxQkFBUyxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQVQsQ0FEUTtXQUFWOztBQUlBLGFBQUcsR0FBSCxFQUFRLFFBQVIsRUFBa0IsTUFBbEIsRUFOa0Q7U0FBL0IsQ0FBckIsQ0FGb0M7T0FBdEMsTUFVTyxJQUFJLEtBQUssTUFBTCxDQUFZLFNBQVosS0FBMEIsUUFBMUIsRUFBb0M7QUFDN0MsYUFBSyxHQUFMLENBQVMsS0FBVCxpQkFBNkIsUUFBUSxHQUFSLENBQTdCLENBRDZDO0FBRTdDLFlBQUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLFFBQVEsUUFBUixDQUF2QixDQUZ5QztBQUc3QyxZQUFJLElBQUosRUFBVTtBQUNSLGFBQUcsSUFBSCxFQUFTLElBQVQsRUFBZSxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWYsRUFEUTtTQUFWLE1BRU87QUFDTCw0QkFBUSxHQUFSLENBQVksT0FBWixFQUFxQixVQUFDLEdBQUQsRUFBTSxRQUFOLEVBQWdCLElBQWhCLEVBQXlCO0FBQzVDLGdCQUFJLFNBQVMsSUFBVCxDQUR3QztBQUU1QyxnQkFBSSxDQUFDLEdBQUQsRUFBTTtBQUNSLHVCQUFTLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBVCxDQURRO2FBQVY7O0FBSUEsZUFBRyxHQUFILEVBQVEsUUFBUixFQUFrQixNQUFsQixFQU40QztXQUF6QixDQUFyQixDQURLO1NBRlA7T0FISyxNQWVBLElBQUksS0FBSyxNQUFMLENBQVksU0FBWixLQUEwQixRQUExQixFQUFvQztBQUM3QyxhQUFLLEdBQUwsQ0FBUyxLQUFULGdCQUE0QixRQUFRLEdBQVIsQ0FBNUIsQ0FENkM7QUFFN0MsWUFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsUUFBUSxRQUFSLENBQXZCLENBRnlDO0FBRzdDLFlBQUksSUFBSixFQUFVO0FBQ1IsYUFBRyxJQUFILEVBQVMsSUFBVCxFQUFlLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZixFQURRO1NBQVYsTUFFTztBQUNMLDRCQUFRLEdBQVIsQ0FBWSxPQUFaLEVBQXFCLFVBQUMsR0FBRCxFQUFNLFFBQU4sRUFBZ0IsSUFBaEIsRUFBeUI7QUFDNUMsZ0JBQUksU0FBUyxJQUFULENBRHdDO0FBRTVDLGdCQUFJLENBQUMsR0FBRCxFQUFNO0FBQ1IsdUJBQVMsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFULENBRFE7YUFBVjs7QUFJQSxrQkFBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixRQUFRLFFBQVIsRUFBa0IsSUFBbkMsRUFBeUMsSUFBekMsRUFONEM7QUFPNUMsZUFBRyxHQUFILEVBQVEsUUFBUixFQUFrQixNQUFsQixFQVA0QztXQUF6QixDQUFyQixDQURLO1NBRlA7T0FISztBQWlCUCxhQWhEaUI7Ozs7U0FsQmY7OztrQkFzRVMiLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0IGZyb20gJ3JlcXVlc3QnO1xuXG5jbGFzcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgID0gY29uZmlnO1xuICAgIHRoaXMubG9nID0gY29uZmlnLmxvZztcbiAgICB0aGlzLmNhY2hlID0gY29uZmlnLmNhY2hlO1xuICB9XG5cbiAgX29wdGlvbnMoZW5kcG9pbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXJpQ2FjaGU6ICAgICBlbmRwb2ludC5yZXBsYWNlKC9cXC8vZywgJycpLFxuICAgICAgdXJpOiAgICAgICAgICB0aGlzLmNvbmZpZy5iYXNlVXJsICsgZW5kcG9pbnQsXG4gICAgICBhZ2VudE9wdGlvbnM6IHtcbiAgICAgICAgY2VydDogdGhpcy5jb25maWcuYXV0aC5jZXJ0LFxuICAgICAgICBrZXk6ICB0aGlzLmNvbmZpZy5hdXRoLmtleVxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgX2dldChlbmRwb2ludCwgY2IpIHtcbiAgICAvLyB3aWxkICAgIG5vIGxvYWQgbm8gc2F2ZVxuICAgIC8vIGRyeXJ1biAgbG9hZCBub3Qgc2F2ZVxuICAgIC8vIHJlY29yZCAgbG9hZCBhbmQgc2F2ZVxuICAgIGxldCBvcHRpb25zID0gdGhpcy5fb3B0aW9ucyhlbmRwb2ludCk7XG5cbiAgICBpZiAodGhpcy5jb25maWcuY2FjaGVNb2RlID09PSAnd2lsZCcpIHtcbiAgICAgIHRoaXMubG9nLmRlYnVnKGB3aWxkIC0tICR7b3B0aW9ucy51cml9YCk7XG4gICAgICByZXF1ZXN0LmdldChvcHRpb25zLCBmdW5jdGlvbiAoZXJyLCByZXNwb25zZSwgYm9keSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gYm9keTtcbiAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKGJvZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2IoZXJyLCByZXNwb25zZSwgcmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWcuY2FjaGVNb2RlID09PSAnZHJ5cnVuJykge1xuICAgICAgdGhpcy5sb2cuZGVidWcoYGRyeXJ1biBmb3IgJHtvcHRpb25zLnVyaX1gKTtcbiAgICAgIGxldCBib2R5ID0gdGhpcy5jYWNoZS5yZWFkKG9wdGlvbnMudXJpQ2FjaGUpO1xuICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgY2IobnVsbCwgbnVsbCwgSlNPTi5wYXJzZShib2R5KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXF1ZXN0LmdldChvcHRpb25zLCAoZXJyLCByZXNwb25zZSwgYm9keSkgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQgPSBib2R5O1xuICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKGJvZHkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNiKGVyciwgcmVzcG9uc2UsIHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWcuY2FjaGVNb2RlID09PSAncmVjb3JkJykge1xuICAgICAgdGhpcy5sb2cuZGVidWcoYHJlY29yZCAtLSAke29wdGlvbnMudXJpfWApO1xuICAgICAgbGV0IGJvZHkgPSB0aGlzLmNhY2hlLnJlYWQob3B0aW9ucy51cmlDYWNoZSk7XG4gICAgICBpZiAoYm9keSkge1xuICAgICAgICBjYihudWxsLCBudWxsLCBKU09OLnBhcnNlKGJvZHkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcXVlc3QuZ2V0KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlLCBib2R5KSA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdCA9IGJvZHk7XG4gICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UoYm9keSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5jYWNoZS53cml0ZShvcHRpb25zLnVyaUNhY2hlLCBib2R5LCB0cnVlKTtcbiAgICAgICAgICBjYihlcnIsIHJlc3BvbnNlLCByZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2U7XG4iXX0=