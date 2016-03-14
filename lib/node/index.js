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

    return this;
  }
};

module.exports = UWSWS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSxTQUFTLGVBQVQsR0FBOEM7TUFBckIsNkRBQU8sa0JBQWM7TUFBViw0REFBTSxrQkFBSTs7QUFDNUMsTUFBSSxTQUFTLEVBQVQsSUFBZSxRQUFRLEVBQVIsSUFDZixDQUFDLGFBQUcsVUFBSCxDQUFjLElBQWQsQ0FBRCxJQUF3QixDQUFDLGFBQUcsVUFBSCxDQUFjLEdBQWQsQ0FBRCxFQUFxQjtBQUMvQyxVQUFNLElBQUksS0FBSixrQkFBeUIsb0JBQWUseUJBQXhDLENBQU4sQ0FEK0M7R0FEakQ7O0FBS0EsU0FBTztBQUNMLFVBQU0sYUFBRyxZQUFILENBQWdCLElBQWhCLENBQU47QUFDQSxTQUFNLGFBQUcsWUFBSCxDQUFnQixHQUFoQixDQUFOO0dBRkYsQ0FONEM7Q0FBOUM7O0FBWUEsSUFBSSxRQUFRO0FBQ1Ysa0NBQVcsU0FBUztBQUNsQixRQUFJLFNBQVMsT0FBVCxDQURjOztBQUdsQixRQUFJLE9BQU8sS0FBUCxFQUFjO0FBQ2hCLGFBQU8sSUFBUCxHQUFjLEVBQWQsQ0FEZ0I7QUFFaEIsYUFBTyxPQUFQLEdBQWlCO0FBQ2YscUNBQTJCLE9BQU8sS0FBUDtPQUQ3QixDQUZnQjtLQUFsQixNQUtPO0FBQ0wsYUFBTyxPQUFQLEdBQWlCLEVBQWpCLENBREs7QUFFTCxhQUFPLElBQVAsR0FBYyxnQkFBZ0IsUUFBUSxJQUFSLEVBQWMsUUFBUSxHQUFSLENBQTVDLENBRks7S0FMUDs7QUFVQSxzQkFBUSxPQUFSLENBQWdCLEdBQWhCLENBQW9CLE9BQXBCLEVBQTZCO0FBQzNCLGVBQVM7QUFDUCxrQkFBYSxJQUFiO0FBQ0EsZUFBYSxPQUFiO0FBQ0EsZUFBYSxRQUFRLFFBQVI7QUFDYixxQkFBYSxJQUFiO09BSkY7S0FERixFQWJrQjs7QUFzQmxCLFdBQU8sR0FBUCxHQUFhLGtCQUFRLE9BQVIsQ0FBZ0IsR0FBaEIsQ0FBb0IsT0FBcEIsQ0FBYixDQXRCa0I7QUF1QmxCLFdBQU8sS0FBUCxHQUFlLHlCQUNiLFFBQVEsU0FBUixFQUNBLFFBQVEsUUFBUixFQUNBLFFBQVEsUUFBUixDQUhGLENBdkJrQjs7QUE2QmxCLFNBQUssSUFBTCxHQUFvQixtQkFBUyxNQUFULENBQXBCLENBN0JrQjtBQThCbEIsU0FBSyxNQUFMLEdBQW9CLHFCQUFXLE1BQVgsQ0FBcEIsQ0E5QmtCO0FBK0JsQixTQUFLLE9BQUwsR0FBb0Isc0JBQVksTUFBWixDQUFwQixDQS9Ca0I7QUFnQ2xCLFNBQUssVUFBTCxHQUFvQix5QkFBZSxNQUFmLENBQXBCLENBaENrQjtBQWlDbEIsU0FBSyxPQUFMLEdBQW9CLHNCQUFZLE1BQVosQ0FBcEIsQ0FqQ2tCO0FBa0NsQixTQUFLLFVBQUwsR0FBb0IseUJBQWUsTUFBZixDQUFwQixDQWxDa0I7QUFtQ2xCLFNBQUssTUFBTCxHQUFvQixxQkFBVyxNQUFYLENBQXBCLENBbkNrQjtBQW9DbEIsU0FBSyxPQUFMLEdBQW9CLHNCQUFZLE1BQVosQ0FBcEIsQ0FwQ2tCO0FBcUNsQixTQUFLLE1BQUwsR0FBb0IscUJBQVcsTUFBWCxDQUFwQixDQXJDa0I7QUFzQ2xCLFNBQUssVUFBTCxHQUFvQix5QkFBZSxNQUFmLENBQXBCLENBdENrQjtBQXVDbEIsU0FBSyxZQUFMLEdBQW9CLDJCQUFpQixNQUFqQixDQUFwQixDQXZDa0I7O0FBeUNsQixXQUFPLElBQVAsQ0F6Q2tCO0dBRFY7Q0FBUjs7QUE4Q0osT0FBTyxPQUFQLEdBQWlCLEtBQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzICAgICAgICAgICBmcm9tICdmcyc7XG5pbXBvcnQgd2luc3RvbiAgICAgIGZyb20gJ3dpbnN0b24nO1xuaW1wb3J0IE1pY3JvQ2FjaGUgICBmcm9tICdtaWNyby1jYWNoZSc7XG5pbXBvcnQgVGVybSAgICAgICAgIGZyb20gJy4vbW9kdWxlcy90ZXJtJztcbmltcG9ydCBDYW1wdXMgICAgICAgZnJvbSAnLi9tb2R1bGVzL2NhbXB1cyc7XG5pbXBvcnQgQ29sbGVnZSAgICAgIGZyb20gJy4vbW9kdWxlcy9jb2xsZWdlJztcbmltcG9ydCBEZXBhcnRtZW50ICAgZnJvbSAnLi9tb2R1bGVzL2RlcGFydG1lbnQnO1xuaW1wb3J0IFByb2dyYW0gICAgICBmcm9tICcuL21vZHVsZXMvcHJvZ3JhbSc7XG5pbXBvcnQgQ3VycmljdWx1bSAgIGZyb20gJy4vbW9kdWxlcy9jdXJyaWN1bHVtJztcbmltcG9ydCBDb3Vyc2UgICAgICAgZnJvbSAnLi9tb2R1bGVzL2NvdXJzZSc7XG5pbXBvcnQgU2VjdGlvbiAgICAgIGZyb20gJy4vbW9kdWxlcy9zZWN0aW9uJztcbmltcG9ydCBQZXJzb24gICAgICAgZnJvbSAnLi9tb2R1bGVzL3BlcnNvbic7XG5pbXBvcnQgRW5yb2xsbWVudCAgIGZyb20gJy4vbW9kdWxlcy9lbnJvbGxtZW50JztcbmltcG9ydCBSZWdpc3RyYXRpb24gZnJvbSAnLi9tb2R1bGVzL3JlZ2lzdHJhdGlvbic7XG5cbmZ1bmN0aW9uIHJlYWRDZXJ0aWZpY2F0ZShjZXJ0ID0gJycsIGtleSA9ICcnKSB7XG4gIGlmIChjZXJ0ID09PSAnJyB8fCBrZXkgPT09ICcnIHx8XG4gICAgICAhZnMuZXhpc3RzU3luYyhjZXJ0KSB8fCAhZnMuZXhpc3RzU3luYyhrZXkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDbGllbnQgY2VydCAke2NlcnR9IG9yIGtleSAke2tleX0gY2FuIG5vdCBiZSBmb3VuZGApO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjZXJ0OiBmcy5yZWFkRmlsZVN5bmMoY2VydCksXG4gICAga2V5OiAgZnMucmVhZEZpbGVTeW5jKGtleSlcbiAgfTtcbn1cblxubGV0IFVXU1dTID0ge1xuICBpbml0aWFsaXplKG9wdGlvbnMpIHtcbiAgICBsZXQgY29uZmlnID0gb3B0aW9ucztcblxuICAgIGlmIChjb25maWcudG9rZW4pIHtcbiAgICAgIGNvbmZpZy5hdXRoID0ge307XG4gICAgICBjb25maWcuaGVhZGVycyA9IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7Y29uZmlnLnRva2VufWBcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZy5oZWFkZXJzID0ge307XG4gICAgICBjb25maWcuYXV0aCA9IHJlYWRDZXJ0aWZpY2F0ZShvcHRpb25zLmNlcnQsIG9wdGlvbnMua2V5KTtcbiAgICB9XG5cbiAgICB3aW5zdG9uLmxvZ2dlcnMuYWRkKCd1d3N3cycsIHtcbiAgICAgIGNvbnNvbGU6IHtcbiAgICAgICAgY29sb3JpemU6ICAgIHRydWUsXG4gICAgICAgIGxhYmVsOiAgICAgICAndXdzd3MnLFxuICAgICAgICBsZXZlbDogICAgICAgb3B0aW9ucy5sb2dMZXZlbCxcbiAgICAgICAgcHJldHR5UHJpbnQ6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbmZpZy5sb2cgPSB3aW5zdG9uLmxvZ2dlcnMuZ2V0KCd1d3N3cycpO1xuICAgIGNvbmZpZy5jYWNoZSA9IG5ldyBNaWNyb0NhY2hlKFxuICAgICAgb3B0aW9ucy5jYWNoZVBhdGgsXG4gICAgICBvcHRpb25zLmxvZ0xldmVsLFxuICAgICAgb3B0aW9ucy5jYWNoZUV4dFxuICAgICk7XG5cbiAgICB0aGlzLnRlcm0gICAgICAgICA9IG5ldyBUZXJtKGNvbmZpZyk7XG4gICAgdGhpcy5jYW1wdXMgICAgICAgPSBuZXcgQ2FtcHVzKGNvbmZpZyk7XG4gICAgdGhpcy5jb2xsZWdlICAgICAgPSBuZXcgQ29sbGVnZShjb25maWcpO1xuICAgIHRoaXMuZGVwYXJ0bWVudCAgID0gbmV3IERlcGFydG1lbnQoY29uZmlnKTtcbiAgICB0aGlzLnByb2dyYW0gICAgICA9IG5ldyBQcm9ncmFtKGNvbmZpZyk7XG4gICAgdGhpcy5jdXJyaWN1bHVtICAgPSBuZXcgQ3VycmljdWx1bShjb25maWcpO1xuICAgIHRoaXMuY291cnNlICAgICAgID0gbmV3IENvdXJzZShjb25maWcpO1xuICAgIHRoaXMuc2VjdGlvbiAgICAgID0gbmV3IFNlY3Rpb24oY29uZmlnKTtcbiAgICB0aGlzLnBlcnNvbiAgICAgICA9IG5ldyBQZXJzb24oY29uZmlnKTtcbiAgICB0aGlzLmVucm9sbG1lbnQgICA9IG5ldyBFbnJvbGxtZW50KGNvbmZpZyk7XG4gICAgdGhpcy5yZWdpc3RyYXRpb24gPSBuZXcgUmVnaXN0cmF0aW9uKGNvbmZpZyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBVV1NXUztcbiJdfQ==