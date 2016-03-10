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
    config.cache = new _microCache2.default(options.cachePath, options.logLevel);

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

    return this;
  }
};

module.exports = UWSWS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSxTQUFTLGVBQVQsR0FBOEM7TUFBckIsNkRBQU8sa0JBQWM7TUFBViw0REFBTSxrQkFBSTs7QUFDNUMsTUFBSSxTQUFTLEVBQVQsSUFBZSxRQUFRLEVBQVIsSUFDZixDQUFDLGFBQUcsVUFBSCxDQUFjLElBQWQsQ0FBRCxJQUF3QixDQUFDLGFBQUcsVUFBSCxDQUFjLEdBQWQsQ0FBRCxFQUFxQjtBQUMvQyxVQUFNLElBQUksS0FBSixrQkFBeUIsb0JBQWUseUJBQXhDLENBQU4sQ0FEK0M7R0FEakQ7O0FBS0EsU0FBTztBQUNMLFVBQU0sYUFBRyxZQUFILENBQWdCLElBQWhCLENBQU47QUFDQSxTQUFNLGFBQUcsWUFBSCxDQUFnQixHQUFoQixDQUFOO0dBRkYsQ0FONEM7Q0FBOUM7O0FBWUEsSUFBSSxRQUFRO0FBQ1Ysa0NBQVcsU0FBUztBQUNsQixRQUFJLFNBQVMsT0FBVCxDQURjOztBQUdsQixRQUFJLE9BQU8sS0FBUCxFQUFjO0FBQ2hCLGFBQU8sSUFBUCxHQUFjLEVBQWQsQ0FEZ0I7QUFFaEIsYUFBTyxPQUFQLEdBQWlCO0FBQ2YscUNBQTJCLE9BQU8sS0FBUDtPQUQ3QixDQUZnQjtLQUFsQixNQUtPO0FBQ0wsYUFBTyxPQUFQLEdBQWlCLEVBQWpCLENBREs7QUFFTCxhQUFPLElBQVAsR0FBYyxnQkFBZ0IsUUFBUSxJQUFSLEVBQWMsUUFBUSxHQUFSLENBQTVDLENBRks7S0FMUDs7QUFVQSxzQkFBUSxPQUFSLENBQWdCLEdBQWhCLENBQW9CLE9BQXBCLEVBQTZCO0FBQzNCLGVBQVM7QUFDUCxrQkFBYSxJQUFiO0FBQ0EsZUFBYSxPQUFiO0FBQ0EsZUFBYSxRQUFRLFFBQVI7QUFDYixxQkFBYSxJQUFiO09BSkY7S0FERixFQWJrQjs7QUFzQmxCLFdBQU8sR0FBUCxHQUFhLGtCQUFRLE9BQVIsQ0FBZ0IsR0FBaEIsQ0FBb0IsT0FBcEIsQ0FBYixDQXRCa0I7QUF1QmxCLFdBQU8sS0FBUCxHQUFlLHlCQUFlLFFBQVEsU0FBUixFQUFtQixRQUFRLFFBQVIsQ0FBakQsQ0F2QmtCOztBQXlCbEIsU0FBSyxJQUFMLEdBQW9CLG1CQUFTLE1BQVQsQ0FBcEIsQ0F6QmtCO0FBMEJsQixTQUFLLE1BQUwsR0FBb0IscUJBQVcsTUFBWCxDQUFwQixDQTFCa0I7QUEyQmxCLFNBQUssT0FBTCxHQUFvQixzQkFBWSxNQUFaLENBQXBCLENBM0JrQjtBQTRCbEIsU0FBSyxVQUFMLEdBQW9CLHlCQUFlLE1BQWYsQ0FBcEIsQ0E1QmtCO0FBNkJsQixTQUFLLE9BQUwsR0FBb0Isc0JBQVksTUFBWixDQUFwQixDQTdCa0I7QUE4QmxCLFNBQUssVUFBTCxHQUFvQix5QkFBZSxNQUFmLENBQXBCLENBOUJrQjtBQStCbEIsU0FBSyxNQUFMLEdBQW9CLHFCQUFXLE1BQVgsQ0FBcEIsQ0EvQmtCO0FBZ0NsQixTQUFLLE9BQUwsR0FBb0Isc0JBQVksTUFBWixDQUFwQixDQWhDa0I7QUFpQ2xCLFNBQUssTUFBTCxHQUFvQixxQkFBVyxNQUFYLENBQXBCLENBakNrQjtBQWtDbEIsU0FBSyxVQUFMLEdBQW9CLHlCQUFlLE1BQWYsQ0FBcEIsQ0FsQ2tCO0FBbUNsQixTQUFLLFlBQUwsR0FBb0IsMkJBQWlCLE1BQWpCLENBQXBCLENBbkNrQjs7QUFxQ2xCLFdBQU8sSUFBUCxDQXJDa0I7R0FEVjtDQUFSOztBQTBDSixPQUFPLE9BQVAsR0FBaUIsS0FBakIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgICAgICAgICAgIGZyb20gJ2ZzJztcbmltcG9ydCB3aW5zdG9uICAgICAgZnJvbSAnd2luc3Rvbic7XG5pbXBvcnQgTWljcm9DYWNoZSAgIGZyb20gJ21pY3JvLWNhY2hlJztcbmltcG9ydCBUZXJtICAgICAgICAgZnJvbSAnLi9tb2R1bGVzL3Rlcm0nO1xuaW1wb3J0IENhbXB1cyAgICAgICBmcm9tICcuL21vZHVsZXMvY2FtcHVzJztcbmltcG9ydCBDb2xsZWdlICAgICAgZnJvbSAnLi9tb2R1bGVzL2NvbGxlZ2UnO1xuaW1wb3J0IERlcGFydG1lbnQgICBmcm9tICcuL21vZHVsZXMvZGVwYXJ0bWVudCc7XG5pbXBvcnQgUHJvZ3JhbSAgICAgIGZyb20gJy4vbW9kdWxlcy9wcm9ncmFtJztcbmltcG9ydCBDdXJyaWN1bHVtICAgZnJvbSAnLi9tb2R1bGVzL2N1cnJpY3VsdW0nO1xuaW1wb3J0IENvdXJzZSAgICAgICBmcm9tICcuL21vZHVsZXMvY291cnNlJztcbmltcG9ydCBTZWN0aW9uICAgICAgZnJvbSAnLi9tb2R1bGVzL3NlY3Rpb24nO1xuaW1wb3J0IFBlcnNvbiAgICAgICBmcm9tICcuL21vZHVsZXMvcGVyc29uJztcbmltcG9ydCBFbnJvbGxtZW50ICAgZnJvbSAnLi9tb2R1bGVzL2Vucm9sbG1lbnQnO1xuaW1wb3J0IFJlZ2lzdHJhdGlvbiBmcm9tICcuL21vZHVsZXMvcmVnaXN0cmF0aW9uJztcblxuZnVuY3Rpb24gcmVhZENlcnRpZmljYXRlKGNlcnQgPSAnJywga2V5ID0gJycpIHtcbiAgaWYgKGNlcnQgPT09ICcnIHx8IGtleSA9PT0gJycgfHxcbiAgICAgICFmcy5leGlzdHNTeW5jKGNlcnQpIHx8ICFmcy5leGlzdHNTeW5jKGtleSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENsaWVudCBjZXJ0ICR7Y2VydH0gb3Iga2V5ICR7a2V5fSBjYW4gbm90IGJlIGZvdW5kYCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNlcnQ6IGZzLnJlYWRGaWxlU3luYyhjZXJ0KSxcbiAgICBrZXk6ICBmcy5yZWFkRmlsZVN5bmMoa2V5KVxuICB9O1xufVxuXG5sZXQgVVdTV1MgPSB7XG4gIGluaXRpYWxpemUob3B0aW9ucykge1xuICAgIGxldCBjb25maWcgPSBvcHRpb25zO1xuXG4gICAgaWYgKGNvbmZpZy50b2tlbikge1xuICAgICAgY29uZmlnLmF1dGggPSB7fTtcbiAgICAgIGNvbmZpZy5oZWFkZXJzID0ge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtjb25maWcudG9rZW59YFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnLmhlYWRlcnMgPSB7fTtcbiAgICAgIGNvbmZpZy5hdXRoID0gcmVhZENlcnRpZmljYXRlKG9wdGlvbnMuY2VydCwgb3B0aW9ucy5rZXkpO1xuICAgIH1cblxuICAgIHdpbnN0b24ubG9nZ2Vycy5hZGQoJ3V3c3dzJywge1xuICAgICAgY29uc29sZToge1xuICAgICAgICBjb2xvcml6ZTogICAgdHJ1ZSxcbiAgICAgICAgbGFiZWw6ICAgICAgICd1d3N3cycsXG4gICAgICAgIGxldmVsOiAgICAgICBvcHRpb25zLmxvZ0xldmVsLFxuICAgICAgICBwcmV0dHlQcmludDogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uZmlnLmxvZyA9IHdpbnN0b24ubG9nZ2Vycy5nZXQoJ3V3c3dzJyk7XG4gICAgY29uZmlnLmNhY2hlID0gbmV3IE1pY3JvQ2FjaGUob3B0aW9ucy5jYWNoZVBhdGgsIG9wdGlvbnMubG9nTGV2ZWwpO1xuXG4gICAgdGhpcy50ZXJtICAgICAgICAgPSBuZXcgVGVybShjb25maWcpO1xuICAgIHRoaXMuY2FtcHVzICAgICAgID0gbmV3IENhbXB1cyhjb25maWcpO1xuICAgIHRoaXMuY29sbGVnZSAgICAgID0gbmV3IENvbGxlZ2UoY29uZmlnKTtcbiAgICB0aGlzLmRlcGFydG1lbnQgICA9IG5ldyBEZXBhcnRtZW50KGNvbmZpZyk7XG4gICAgdGhpcy5wcm9ncmFtICAgICAgPSBuZXcgUHJvZ3JhbShjb25maWcpO1xuICAgIHRoaXMuY3VycmljdWx1bSAgID0gbmV3IEN1cnJpY3VsdW0oY29uZmlnKTtcbiAgICB0aGlzLmNvdXJzZSAgICAgICA9IG5ldyBDb3Vyc2UoY29uZmlnKTtcbiAgICB0aGlzLnNlY3Rpb24gICAgICA9IG5ldyBTZWN0aW9uKGNvbmZpZyk7XG4gICAgdGhpcy5wZXJzb24gICAgICAgPSBuZXcgUGVyc29uKGNvbmZpZyk7XG4gICAgdGhpcy5lbnJvbGxtZW50ICAgPSBuZXcgRW5yb2xsbWVudChjb25maWcpO1xuICAgIHRoaXMucmVnaXN0cmF0aW9uID0gbmV3IFJlZ2lzdHJhdGlvbihjb25maWcpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVVdTV1M7XG4iXX0=