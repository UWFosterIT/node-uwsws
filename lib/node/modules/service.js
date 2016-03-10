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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQUVNO0FBQ0osV0FESSxPQUNKLENBQVksTUFBWixFQUFvQjswQkFEaEIsU0FDZ0I7O0FBQ2xCLFNBQUssTUFBTCxHQUFlLE1BQWYsQ0FEa0I7QUFFbEIsU0FBSyxHQUFMLEdBQVcsT0FBTyxHQUFQLENBRk87QUFHbEIsU0FBSyxLQUFMLEdBQWEsT0FBTyxLQUFQLENBSEs7R0FBcEI7O2VBREk7OzZCQU9LLFVBQVU7QUFDakIsYUFBTztBQUNMLHNCQUFjLEtBQUssTUFBTCxDQUFZLElBQVo7QUFDZCxpQkFBYyxLQUFLLE1BQUwsQ0FBWSxPQUFaO0FBQ2Qsa0JBQWMsU0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXdCLEVBQXhCLENBQWQ7QUFDQSxhQUFjLEtBQUssTUFBTCxDQUFZLE9BQVosR0FBc0IsUUFBdEI7T0FKaEIsQ0FEaUI7Ozs7eUJBU2QsVUFBVSxJQUFJOzs7Ozs7QUFJakIsVUFBSSxVQUFVLEtBQUssUUFBTCxDQUFjLFFBQWQsQ0FBVixDQUphOztBQU1qQixVQUFJLEtBQUssTUFBTCxDQUFZLFNBQVosS0FBMEIsTUFBMUIsRUFBa0M7QUFDcEMsYUFBSyxHQUFMLENBQVMsS0FBVCxjQUEwQixRQUFRLEdBQVIsQ0FBMUIsQ0FEb0M7QUFFcEMsMEJBQVEsR0FBUixDQUFZLE9BQVosRUFBcUIsVUFBVSxHQUFWLEVBQWUsUUFBZixFQUF5QixJQUF6QixFQUErQjtBQUNsRCxjQUFJLFNBQVMsSUFBVCxDQUQ4QztBQUVsRCxjQUFJLENBQUMsR0FBRCxFQUFNO0FBQ1IscUJBQVMsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFULENBRFE7V0FBVjs7QUFJQSxhQUFHLEdBQUgsRUFBUSxRQUFSLEVBQWtCLE1BQWxCLEVBTmtEO1NBQS9CLENBQXJCLENBRm9DO09BQXRDLE1BVU8sSUFBSSxLQUFLLE1BQUwsQ0FBWSxTQUFaLEtBQTBCLFFBQTFCLEVBQW9DO0FBQzdDLGFBQUssR0FBTCxDQUFTLEtBQVQsaUJBQTZCLFFBQVEsR0FBUixDQUE3QixDQUQ2QztBQUU3QyxZQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixRQUFRLFFBQVIsQ0FBdkIsQ0FGeUM7QUFHN0MsWUFBSSxJQUFKLEVBQVU7QUFDUixhQUFHLElBQUgsRUFBUyxJQUFULEVBQWUsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFmLEVBRFE7U0FBVixNQUVPO0FBQ0wsNEJBQVEsR0FBUixDQUFZLE9BQVosRUFBcUIsVUFBQyxHQUFELEVBQU0sUUFBTixFQUFnQixJQUFoQixFQUF5QjtBQUM1QyxnQkFBSSxTQUFTLElBQVQsQ0FEd0M7QUFFNUMsZ0JBQUksQ0FBQyxHQUFELEVBQU07QUFDUix1QkFBUyxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQVQsQ0FEUTthQUFWOztBQUlBLGVBQUcsR0FBSCxFQUFRLFFBQVIsRUFBa0IsTUFBbEIsRUFONEM7V0FBekIsQ0FBckIsQ0FESztTQUZQO09BSEssTUFlQSxJQUFJLEtBQUssTUFBTCxDQUFZLFNBQVosS0FBMEIsUUFBMUIsRUFBb0M7QUFDN0MsYUFBSyxHQUFMLENBQVMsS0FBVCxnQkFBNEIsUUFBUSxHQUFSLENBQTVCLENBRDZDO0FBRTdDLFlBQUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLFFBQVEsUUFBUixDQUF2QixDQUZ5QztBQUc3QyxZQUFJLElBQUosRUFBVTtBQUNSLGFBQUcsSUFBSCxFQUFTLElBQVQsRUFBZSxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWYsRUFEUTtTQUFWLE1BRU87QUFDTCw0QkFBUSxHQUFSLENBQVksT0FBWixFQUFxQixVQUFDLEdBQUQsRUFBTSxRQUFOLEVBQWdCLElBQWhCLEVBQXlCO0FBQzVDLGdCQUFJLFNBQVMsSUFBVCxDQUR3QztBQUU1QyxnQkFBSSxDQUFDLEdBQUQsRUFBTTtBQUNSLHVCQUFTLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBVCxDQURRO2FBQVY7O0FBSUEsa0JBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsUUFBUSxRQUFSLEVBQWtCLElBQW5DLEVBQXlDLElBQXpDLEVBTjRDO0FBTzVDLGVBQUcsR0FBSCxFQUFRLFFBQVIsRUFBa0IsTUFBbEIsRUFQNEM7V0FBekIsQ0FBckIsQ0FESztTQUZQO09BSEs7QUFpQlAsYUFoRGlCOzs7O1NBaEJmOzs7a0JBb0VTIiwiZmlsZSI6InNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tICdyZXF1ZXN0JztcblxuY2xhc3MgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnICA9IGNvbmZpZztcbiAgICB0aGlzLmxvZyA9IGNvbmZpZy5sb2c7XG4gICAgdGhpcy5jYWNoZSA9IGNvbmZpZy5jYWNoZTtcbiAgfVxuXG4gIF9vcHRpb25zKGVuZHBvaW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFnZW50T3B0aW9uczogdGhpcy5jb25maWcuYXV0aCxcbiAgICAgIGhlYWRlcnM6ICAgICAgdGhpcy5jb25maWcuaGVhZGVycyxcbiAgICAgIHVyaUNhY2hlOiAgICAgZW5kcG9pbnQucmVwbGFjZSgvXFwvL2csICcnKSxcbiAgICAgIHVyaTogICAgICAgICAgdGhpcy5jb25maWcuYmFzZVVybCArIGVuZHBvaW50XG4gICAgfTtcbiAgfVxuXG4gIF9nZXQoZW5kcG9pbnQsIGNiKSB7XG4gICAgLy8gd2lsZCAgICBubyBsb2FkIG5vIHNhdmVcbiAgICAvLyBkcnlydW4gIGxvYWQgbm90IHNhdmVcbiAgICAvLyByZWNvcmQgIGxvYWQgYW5kIHNhdmVcbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMuX29wdGlvbnMoZW5kcG9pbnQpO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLmNhY2hlTW9kZSA9PT0gJ3dpbGQnKSB7XG4gICAgICB0aGlzLmxvZy5kZWJ1Zyhgd2lsZCAtLSAke29wdGlvbnMudXJpfWApO1xuICAgICAgcmVxdWVzdC5nZXQob3B0aW9ucywgZnVuY3Rpb24gKGVyciwgcmVzcG9uc2UsIGJvZHkpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGJvZHk7XG4gICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShib2R5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNiKGVyciwgcmVzcG9uc2UsIHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlnLmNhY2hlTW9kZSA9PT0gJ2RyeXJ1bicpIHtcbiAgICAgIHRoaXMubG9nLmRlYnVnKGBkcnlydW4gZm9yICR7b3B0aW9ucy51cml9YCk7XG4gICAgICBsZXQgYm9keSA9IHRoaXMuY2FjaGUucmVhZChvcHRpb25zLnVyaUNhY2hlKTtcbiAgICAgIGlmIChib2R5KSB7XG4gICAgICAgIGNiKG51bGwsIG51bGwsIEpTT04ucGFyc2UoYm9keSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVxdWVzdC5nZXQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UsIGJvZHkpID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gYm9keTtcbiAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShib2R5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYihlcnIsIHJlc3BvbnNlLCByZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlnLmNhY2hlTW9kZSA9PT0gJ3JlY29yZCcpIHtcbiAgICAgIHRoaXMubG9nLmRlYnVnKGByZWNvcmQgLS0gJHtvcHRpb25zLnVyaX1gKTtcbiAgICAgIGxldCBib2R5ID0gdGhpcy5jYWNoZS5yZWFkKG9wdGlvbnMudXJpQ2FjaGUpO1xuICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgY2IobnVsbCwgbnVsbCwgSlNPTi5wYXJzZShib2R5KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXF1ZXN0LmdldChvcHRpb25zLCAoZXJyLCByZXNwb25zZSwgYm9keSkgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQgPSBib2R5O1xuICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKGJvZHkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuY2FjaGUud3JpdGUob3B0aW9ucy51cmlDYWNoZSwgYm9keSwgdHJ1ZSk7XG4gICAgICAgICAgY2IoZXJyLCByZXNwb25zZSwgcmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlO1xuIl19