'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _microCache = require('micro-cache');

var _microCache2 = _interopRequireDefault(_microCache);

var _term = require('./modules/term');

var _term2 = _interopRequireDefault(_term);

var _campus = require('./modules/campus');

var _campus2 = _interopRequireDefault(_campus);

var _college = require('./modules/college');

var _college2 = _interopRequireDefault(_college);

var _department = require('./modules/department');

var _department2 = _interopRequireDefault(_department);

var _program = require('./modules/program');

var _program2 = _interopRequireDefault(_program);

var _curriculum = require('./modules/curriculum');

var _curriculum2 = _interopRequireDefault(_curriculum);

var _course = require('./modules/course');

var _course2 = _interopRequireDefault(_course);

var _section = require('./modules/section');

var _section2 = _interopRequireDefault(_section);

var _person = require('./modules/person');

var _person2 = _interopRequireDefault(_person);

var _enrollment = require('./modules/enrollment');

var _enrollment2 = _interopRequireDefault(_enrollment);

var _registration = require('./modules/registration');

var _registration2 = _interopRequireDefault(_registration);

var _testscore = require('./modules/testscore');

var _testscore2 = _interopRequireDefault(_testscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readCertificate() {
  var cert = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var key = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  if (cert === '' || key === '' || !_fs2.default.existsSync(cert) || !_fs2.default.existsSync(key)) {
    throw new Error('Client cert ' + cert + ' or key ' + key + ' can not be found');
  }

  return {
    cert: _fs2.default.readFileSync(cert),
    key: _fs2.default.readFileSync(key)
  };
}

var UWSWS = {
  initialize: function initialize(options) {
    var config = options;

    if (config.token) {
      config.auth = {};
      config.headers = {
        'Authorization': 'Bearer ' + config.token
      };
    } else {
      config.headers = {};
      config.auth = readCertificate(options.cert, options.key);
    }

    _winston2.default.loggers.add('uwsws', {
      console: {
        colorize: true,
        label: 'uwsws',
        level: options.logLevel,
        prettyPrint: true
      }
    });

    config.log = _winston2.default.loggers.get('uwsws');
    config.cache = new _microCache2.default(options.cachePath, options.logLevel, options.cacheExt);

    this.term = new _term2.default(config);
    this.campus = new _campus2.default(config);
    this.college = new _college2.default(config);
    this.department = new _department2.default(config);
    this.program = new _program2.default(config);
    this.curriculum = new _curriculum2.default(config);
    this.course = new _course2.default(config);
    this.section = new _section2.default(config);
    this.person = new _person2.default(config);
    this.enrollment = new _enrollment2.default(config);
    this.registration = new _registration2.default(config);
    this.testScore = new _testscore2.default(config);

    return this;
  }
};

module.exports = UWSWS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLFNBQVMsZUFBVCxHQUE4QztNQUFyQiw2REFBTyxrQkFBYztNQUFWLDREQUFNLGtCQUFJOztBQUM1QyxNQUFJLFNBQVMsRUFBVCxJQUFlLFFBQVEsRUFBUixJQUNmLENBQUMsYUFBRyxVQUFILENBQWMsSUFBZCxDQUFELElBQXdCLENBQUMsYUFBRyxVQUFILENBQWMsR0FBZCxDQUFELEVBQXFCO0FBQy9DLFVBQU0sSUFBSSxLQUFKLGtCQUF5QixvQkFBZSx5QkFBeEMsQ0FBTixDQUQrQztHQURqRDs7QUFLQSxTQUFPO0FBQ0wsVUFBTSxhQUFHLFlBQUgsQ0FBZ0IsSUFBaEIsQ0FBTjtBQUNBLFNBQU0sYUFBRyxZQUFILENBQWdCLEdBQWhCLENBQU47R0FGRixDQU40QztDQUE5Qzs7QUFZQSxJQUFJLFFBQVE7QUFDVixrQ0FBVyxTQUFTO0FBQ2xCLFFBQUksU0FBUyxPQUFULENBRGM7O0FBR2xCLFFBQUksT0FBTyxLQUFQLEVBQWM7QUFDaEIsYUFBTyxJQUFQLEdBQWMsRUFBZCxDQURnQjtBQUVoQixhQUFPLE9BQVAsR0FBaUI7QUFDZixxQ0FBMkIsT0FBTyxLQUFQO09BRDdCLENBRmdCO0tBQWxCLE1BS087QUFDTCxhQUFPLE9BQVAsR0FBaUIsRUFBakIsQ0FESztBQUVMLGFBQU8sSUFBUCxHQUFjLGdCQUFnQixRQUFRLElBQVIsRUFBYyxRQUFRLEdBQVIsQ0FBNUMsQ0FGSztLQUxQOztBQVVBLHNCQUFRLE9BQVIsQ0FBZ0IsR0FBaEIsQ0FBb0IsT0FBcEIsRUFBNkI7QUFDM0IsZUFBUztBQUNQLGtCQUFhLElBQWI7QUFDQSxlQUFhLE9BQWI7QUFDQSxlQUFhLFFBQVEsUUFBUjtBQUNiLHFCQUFhLElBQWI7T0FKRjtLQURGLEVBYmtCOztBQXNCbEIsV0FBTyxHQUFQLEdBQWEsa0JBQVEsT0FBUixDQUFnQixHQUFoQixDQUFvQixPQUFwQixDQUFiLENBdEJrQjtBQXVCbEIsV0FBTyxLQUFQLEdBQWUseUJBQ2IsUUFBUSxTQUFSLEVBQ0EsUUFBUSxRQUFSLEVBQ0EsUUFBUSxRQUFSLENBSEYsQ0F2QmtCOztBQTZCbEIsU0FBSyxJQUFMLEdBQW9CLG1CQUFTLE1BQVQsQ0FBcEIsQ0E3QmtCO0FBOEJsQixTQUFLLE1BQUwsR0FBb0IscUJBQVcsTUFBWCxDQUFwQixDQTlCa0I7QUErQmxCLFNBQUssT0FBTCxHQUFvQixzQkFBWSxNQUFaLENBQXBCLENBL0JrQjtBQWdDbEIsU0FBSyxVQUFMLEdBQW9CLHlCQUFlLE1BQWYsQ0FBcEIsQ0FoQ2tCO0FBaUNsQixTQUFLLE9BQUwsR0FBb0Isc0JBQVksTUFBWixDQUFwQixDQWpDa0I7QUFrQ2xCLFNBQUssVUFBTCxHQUFvQix5QkFBZSxNQUFmLENBQXBCLENBbENrQjtBQW1DbEIsU0FBSyxNQUFMLEdBQW9CLHFCQUFXLE1BQVgsQ0FBcEIsQ0FuQ2tCO0FBb0NsQixTQUFLLE9BQUwsR0FBb0Isc0JBQVksTUFBWixDQUFwQixDQXBDa0I7QUFxQ2xCLFNBQUssTUFBTCxHQUFvQixxQkFBVyxNQUFYLENBQXBCLENBckNrQjtBQXNDbEIsU0FBSyxVQUFMLEdBQW9CLHlCQUFlLE1BQWYsQ0FBcEIsQ0F0Q2tCO0FBdUNsQixTQUFLLFlBQUwsR0FBb0IsMkJBQWlCLE1BQWpCLENBQXBCLENBdkNrQjtBQXdDbEIsU0FBSyxTQUFMLEdBQW9CLHdCQUFjLE1BQWQsQ0FBcEIsQ0F4Q2tCOztBQTBDbEIsV0FBTyxJQUFQLENBMUNrQjtHQURWO0NBQVI7O0FBK0NKLE9BQU8sT0FBUCxHQUFpQixLQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyAgICAgICAgICAgZnJvbSAnZnMnO1xuaW1wb3J0IHdpbnN0b24gICAgICBmcm9tICd3aW5zdG9uJztcbmltcG9ydCBNaWNyb0NhY2hlICAgZnJvbSAnbWljcm8tY2FjaGUnO1xuaW1wb3J0IFRlcm0gICAgICAgICBmcm9tICcuL21vZHVsZXMvdGVybSc7XG5pbXBvcnQgQ2FtcHVzICAgICAgIGZyb20gJy4vbW9kdWxlcy9jYW1wdXMnO1xuaW1wb3J0IENvbGxlZ2UgICAgICBmcm9tICcuL21vZHVsZXMvY29sbGVnZSc7XG5pbXBvcnQgRGVwYXJ0bWVudCAgIGZyb20gJy4vbW9kdWxlcy9kZXBhcnRtZW50JztcbmltcG9ydCBQcm9ncmFtICAgICAgZnJvbSAnLi9tb2R1bGVzL3Byb2dyYW0nO1xuaW1wb3J0IEN1cnJpY3VsdW0gICBmcm9tICcuL21vZHVsZXMvY3VycmljdWx1bSc7XG5pbXBvcnQgQ291cnNlICAgICAgIGZyb20gJy4vbW9kdWxlcy9jb3Vyc2UnO1xuaW1wb3J0IFNlY3Rpb24gICAgICBmcm9tICcuL21vZHVsZXMvc2VjdGlvbic7XG5pbXBvcnQgUGVyc29uICAgICAgIGZyb20gJy4vbW9kdWxlcy9wZXJzb24nO1xuaW1wb3J0IEVucm9sbG1lbnQgICBmcm9tICcuL21vZHVsZXMvZW5yb2xsbWVudCc7XG5pbXBvcnQgUmVnaXN0cmF0aW9uIGZyb20gJy4vbW9kdWxlcy9yZWdpc3RyYXRpb24nO1xuaW1wb3J0IFRlc3RTY29yZSAgICBmcm9tICcuL21vZHVsZXMvdGVzdHNjb3JlJztcblxuZnVuY3Rpb24gcmVhZENlcnRpZmljYXRlKGNlcnQgPSAnJywga2V5ID0gJycpIHtcbiAgaWYgKGNlcnQgPT09ICcnIHx8IGtleSA9PT0gJycgfHxcbiAgICAgICFmcy5leGlzdHNTeW5jKGNlcnQpIHx8ICFmcy5leGlzdHNTeW5jKGtleSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENsaWVudCBjZXJ0ICR7Y2VydH0gb3Iga2V5ICR7a2V5fSBjYW4gbm90IGJlIGZvdW5kYCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNlcnQ6IGZzLnJlYWRGaWxlU3luYyhjZXJ0KSxcbiAgICBrZXk6ICBmcy5yZWFkRmlsZVN5bmMoa2V5KVxuICB9O1xufVxuXG5sZXQgVVdTV1MgPSB7XG4gIGluaXRpYWxpemUob3B0aW9ucykge1xuICAgIGxldCBjb25maWcgPSBvcHRpb25zO1xuXG4gICAgaWYgKGNvbmZpZy50b2tlbikge1xuICAgICAgY29uZmlnLmF1dGggPSB7fTtcbiAgICAgIGNvbmZpZy5oZWFkZXJzID0ge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtjb25maWcudG9rZW59YFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnLmhlYWRlcnMgPSB7fTtcbiAgICAgIGNvbmZpZy5hdXRoID0gcmVhZENlcnRpZmljYXRlKG9wdGlvbnMuY2VydCwgb3B0aW9ucy5rZXkpO1xuICAgIH1cblxuICAgIHdpbnN0b24ubG9nZ2Vycy5hZGQoJ3V3c3dzJywge1xuICAgICAgY29uc29sZToge1xuICAgICAgICBjb2xvcml6ZTogICAgdHJ1ZSxcbiAgICAgICAgbGFiZWw6ICAgICAgICd1d3N3cycsXG4gICAgICAgIGxldmVsOiAgICAgICBvcHRpb25zLmxvZ0xldmVsLFxuICAgICAgICBwcmV0dHlQcmludDogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uZmlnLmxvZyA9IHdpbnN0b24ubG9nZ2Vycy5nZXQoJ3V3c3dzJyk7XG4gICAgY29uZmlnLmNhY2hlID0gbmV3IE1pY3JvQ2FjaGUoXG4gICAgICBvcHRpb25zLmNhY2hlUGF0aCxcbiAgICAgIG9wdGlvbnMubG9nTGV2ZWwsXG4gICAgICBvcHRpb25zLmNhY2hlRXh0XG4gICAgKTtcblxuICAgIHRoaXMudGVybSAgICAgICAgID0gbmV3IFRlcm0oY29uZmlnKTtcbiAgICB0aGlzLmNhbXB1cyAgICAgICA9IG5ldyBDYW1wdXMoY29uZmlnKTtcbiAgICB0aGlzLmNvbGxlZ2UgICAgICA9IG5ldyBDb2xsZWdlKGNvbmZpZyk7XG4gICAgdGhpcy5kZXBhcnRtZW50ICAgPSBuZXcgRGVwYXJ0bWVudChjb25maWcpO1xuICAgIHRoaXMucHJvZ3JhbSAgICAgID0gbmV3IFByb2dyYW0oY29uZmlnKTtcbiAgICB0aGlzLmN1cnJpY3VsdW0gICA9IG5ldyBDdXJyaWN1bHVtKGNvbmZpZyk7XG4gICAgdGhpcy5jb3Vyc2UgICAgICAgPSBuZXcgQ291cnNlKGNvbmZpZyk7XG4gICAgdGhpcy5zZWN0aW9uICAgICAgPSBuZXcgU2VjdGlvbihjb25maWcpO1xuICAgIHRoaXMucGVyc29uICAgICAgID0gbmV3IFBlcnNvbihjb25maWcpO1xuICAgIHRoaXMuZW5yb2xsbWVudCAgID0gbmV3IEVucm9sbG1lbnQoY29uZmlnKTtcbiAgICB0aGlzLnJlZ2lzdHJhdGlvbiA9IG5ldyBSZWdpc3RyYXRpb24oY29uZmlnKTtcbiAgICB0aGlzLnRlc3RTY29yZSAgICA9IG5ldyBUZXN0U2NvcmUoY29uZmlnKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVXU1dTO1xuIl19