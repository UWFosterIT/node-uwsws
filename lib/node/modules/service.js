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
              _this.cache.write(options.uriCache, body, true);
            }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQUVNO0FBQ0osV0FESSxPQUNKLENBQVksTUFBWixFQUFvQjswQkFEaEIsU0FDZ0I7O0FBQ2xCLFNBQUssTUFBTCxHQUFlLE1BQWYsQ0FEa0I7QUFFbEIsU0FBSyxHQUFMLEdBQVcsT0FBTyxHQUFQLENBRk87QUFHbEIsU0FBSyxLQUFMLEdBQWEsT0FBTyxLQUFQLENBSEs7R0FBcEI7O2VBREk7OzZCQU9LLFVBQVU7QUFDakIsYUFBTztBQUNMLHNCQUFjLEtBQUssTUFBTCxDQUFZLElBQVo7QUFDZCxpQkFBYyxLQUFLLE1BQUwsQ0FBWSxPQUFaO0FBQ2Qsa0JBQWMsU0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXdCLEVBQXhCLENBQWQ7QUFDQSxhQUFjLEtBQUssTUFBTCxDQUFZLE9BQVosR0FBc0IsUUFBdEI7T0FKaEIsQ0FEaUI7Ozs7eUJBU2QsVUFBVSxJQUFJOzs7Ozs7QUFJakIsVUFBSSxVQUFVLEtBQUssUUFBTCxDQUFjLFFBQWQsQ0FBVixDQUphOztBQU1qQixVQUFJLEtBQUssTUFBTCxDQUFZLFNBQVosS0FBMEIsTUFBMUIsRUFBa0M7QUFDcEMsYUFBSyxHQUFMLENBQVMsS0FBVCxjQUEwQixRQUFRLEdBQVIsQ0FBMUIsQ0FEb0M7QUFFcEMsMEJBQVEsR0FBUixDQUFZLE9BQVosRUFBcUIsVUFBVSxHQUFWLEVBQWUsUUFBZixFQUF5QixJQUF6QixFQUErQjtBQUNsRCxjQUFJLFNBQVMsSUFBVCxDQUQ4QztBQUVsRCxjQUFJLENBQUMsR0FBRCxFQUFNO0FBQ1IscUJBQVMsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFULENBRFE7V0FBVjs7QUFJQSxhQUFHLEdBQUgsRUFBUSxRQUFSLEVBQWtCLE1BQWxCLEVBTmtEO1NBQS9CLENBQXJCLENBRm9DO09BQXRDLE1BVU8sSUFBSSxLQUFLLE1BQUwsQ0FBWSxTQUFaLEtBQTBCLFFBQTFCLEVBQW9DO0FBQzdDLGFBQUssR0FBTCxDQUFTLEtBQVQsaUJBQTZCLFFBQVEsR0FBUixDQUE3QixDQUQ2QztBQUU3QyxZQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixRQUFRLFFBQVIsQ0FBdkIsQ0FGeUM7QUFHN0MsWUFBSSxJQUFKLEVBQVU7QUFDUixhQUFHLElBQUgsRUFBUyxJQUFULEVBQWUsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFmLEVBRFE7U0FBVixNQUVPO0FBQ0wsNEJBQVEsR0FBUixDQUFZLE9BQVosRUFBcUIsVUFBQyxHQUFELEVBQU0sUUFBTixFQUFnQixJQUFoQixFQUF5QjtBQUM1QyxnQkFBSSxTQUFTLElBQVQsQ0FEd0M7QUFFNUMsZ0JBQUksQ0FBQyxHQUFELEVBQU07QUFDUix1QkFBUyxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQVQsQ0FEUTthQUFWOztBQUlBLGVBQUcsR0FBSCxFQUFRLFFBQVIsRUFBa0IsTUFBbEIsRUFONEM7V0FBekIsQ0FBckIsQ0FESztTQUZQO09BSEssTUFlQSxJQUFJLEtBQUssTUFBTCxDQUFZLFNBQVosS0FBMEIsUUFBMUIsRUFBb0M7QUFDN0MsYUFBSyxHQUFMLENBQVMsS0FBVCxnQkFBNEIsUUFBUSxHQUFSLENBQTVCLENBRDZDO0FBRTdDLFlBQUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLFFBQVEsUUFBUixDQUF2QixDQUZ5QztBQUc3QyxZQUFJLElBQUosRUFBVTtBQUNSLGFBQUcsSUFBSCxFQUFTLElBQVQsRUFBZSxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWYsRUFEUTtTQUFWLE1BRU87QUFDTCw0QkFBUSxHQUFSLENBQVksT0FBWixFQUFxQixVQUFDLEdBQUQsRUFBTSxRQUFOLEVBQWdCLElBQWhCLEVBQXlCO0FBQzVDLGdCQUFJLFNBQVMsSUFBVCxDQUR3QztBQUU1QyxnQkFBSSxDQUFDLEdBQUQsRUFBTTtBQUNSLHVCQUFTLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBVCxDQURRO0FBRVIsb0JBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsUUFBUSxRQUFSLEVBQWtCLElBQW5DLEVBQXlDLElBQXpDLEVBRlE7YUFBVjs7QUFLQSxlQUFHLEdBQUgsRUFBUSxRQUFSLEVBQWtCLE1BQWxCLEVBUDRDO1dBQXpCLENBQXJCLENBREs7U0FGUDtPQUhLO0FBaUJQLGFBaERpQjs7OztTQWhCZjs7O2tCQW9FUyIsImZpbGUiOiJzZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlcXVlc3QgZnJvbSAncmVxdWVzdCc7XG5cbmNsYXNzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyAgPSBjb25maWc7XG4gICAgdGhpcy5sb2cgPSBjb25maWcubG9nO1xuICAgIHRoaXMuY2FjaGUgPSBjb25maWcuY2FjaGU7XG4gIH1cblxuICBfb3B0aW9ucyhlbmRwb2ludCkge1xuICAgIHJldHVybiB7XG4gICAgICBhZ2VudE9wdGlvbnM6IHRoaXMuY29uZmlnLmF1dGgsXG4gICAgICBoZWFkZXJzOiAgICAgIHRoaXMuY29uZmlnLmhlYWRlcnMsXG4gICAgICB1cmlDYWNoZTogICAgIGVuZHBvaW50LnJlcGxhY2UoL1xcLy9nLCAnJyksXG4gICAgICB1cmk6ICAgICAgICAgIHRoaXMuY29uZmlnLmJhc2VVcmwgKyBlbmRwb2ludFxuICAgIH07XG4gIH1cblxuICBfZ2V0KGVuZHBvaW50LCBjYikge1xuICAgIC8vIHdpbGQgICAgbm8gbG9hZCBubyBzYXZlXG4gICAgLy8gZHJ5cnVuICBsb2FkIG5vdCBzYXZlXG4gICAgLy8gcmVjb3JkICBsb2FkIGFuZCBzYXZlXG4gICAgbGV0IG9wdGlvbnMgPSB0aGlzLl9vcHRpb25zKGVuZHBvaW50KTtcblxuICAgIGlmICh0aGlzLmNvbmZpZy5jYWNoZU1vZGUgPT09ICd3aWxkJykge1xuICAgICAgdGhpcy5sb2cuZGVidWcoYHdpbGQgLS0gJHtvcHRpb25zLnVyaX1gKTtcbiAgICAgIHJlcXVlc3QuZ2V0KG9wdGlvbnMsIGZ1bmN0aW9uIChlcnIsIHJlc3BvbnNlLCBib2R5KSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBib2R5O1xuICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UoYm9keSk7XG4gICAgICAgIH1cblxuICAgICAgICBjYihlcnIsIHJlc3BvbnNlLCByZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZy5jYWNoZU1vZGUgPT09ICdkcnlydW4nKSB7XG4gICAgICB0aGlzLmxvZy5kZWJ1ZyhgZHJ5cnVuIGZvciAke29wdGlvbnMudXJpfWApO1xuICAgICAgbGV0IGJvZHkgPSB0aGlzLmNhY2hlLnJlYWQob3B0aW9ucy51cmlDYWNoZSk7XG4gICAgICBpZiAoYm9keSkge1xuICAgICAgICBjYihudWxsLCBudWxsLCBKU09OLnBhcnNlKGJvZHkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcXVlc3QuZ2V0KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlLCBib2R5KSA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdCA9IGJvZHk7XG4gICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UoYm9keSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2IoZXJyLCByZXNwb25zZSwgcmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZy5jYWNoZU1vZGUgPT09ICdyZWNvcmQnKSB7XG4gICAgICB0aGlzLmxvZy5kZWJ1ZyhgcmVjb3JkIC0tICR7b3B0aW9ucy51cml9YCk7XG4gICAgICBsZXQgYm9keSA9IHRoaXMuY2FjaGUucmVhZChvcHRpb25zLnVyaUNhY2hlKTtcbiAgICAgIGlmIChib2R5KSB7XG4gICAgICAgIGNiKG51bGwsIG51bGwsIEpTT04ucGFyc2UoYm9keSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVxdWVzdC5nZXQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UsIGJvZHkpID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gYm9keTtcbiAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShib2R5KTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUud3JpdGUob3B0aW9ucy51cmlDYWNoZSwgYm9keSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2IoZXJyLCByZXNwb25zZSwgcmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlO1xuIl19