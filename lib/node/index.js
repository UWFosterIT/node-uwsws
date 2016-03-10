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
    config.auth = readCertificate(options.cert, options.key);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSxTQUFTLGVBQVQsR0FBOEM7TUFBckIsNkRBQU8sa0JBQWM7TUFBViw0REFBTSxrQkFBSTs7QUFDNUMsTUFBSSxTQUFTLEVBQVQsSUFBZSxRQUFRLEVBQVIsSUFDZixDQUFDLGFBQUcsVUFBSCxDQUFjLElBQWQsQ0FBRCxJQUF3QixDQUFDLGFBQUcsVUFBSCxDQUFjLEdBQWQsQ0FBRCxFQUFxQjtBQUMvQyxVQUFNLElBQUksS0FBSixrQkFBeUIsb0JBQWUseUJBQXhDLENBQU4sQ0FEK0M7R0FEakQ7O0FBS0EsU0FBTztBQUNMLFVBQU0sYUFBRyxZQUFILENBQWdCLElBQWhCLENBQU47QUFDQSxTQUFNLGFBQUcsWUFBSCxDQUFnQixHQUFoQixDQUFOO0dBRkYsQ0FONEM7Q0FBOUM7O0FBWUEsSUFBSSxRQUFRO0FBQ1Ysa0NBQVcsU0FBUztBQUNsQixRQUFJLFNBQVMsT0FBVCxDQURjO0FBRWxCLFdBQU8sSUFBUCxHQUFjLGdCQUFnQixRQUFRLElBQVIsRUFBYyxRQUFRLEdBQVIsQ0FBNUMsQ0FGa0I7O0FBSWxCLHNCQUFRLE9BQVIsQ0FBZ0IsR0FBaEIsQ0FBb0IsT0FBcEIsRUFBNkI7QUFDM0IsZUFBUztBQUNQLGtCQUFhLElBQWI7QUFDQSxlQUFhLE9BQWI7QUFDQSxlQUFhLFFBQVEsUUFBUjtBQUNiLHFCQUFhLElBQWI7T0FKRjtLQURGLEVBSmtCOztBQWFsQixXQUFPLEdBQVAsR0FBYSxrQkFBUSxPQUFSLENBQWdCLEdBQWhCLENBQW9CLE9BQXBCLENBQWIsQ0Fia0I7QUFjbEIsV0FBTyxLQUFQLEdBQWUseUJBQWUsUUFBUSxTQUFSLEVBQW1CLFFBQVEsUUFBUixDQUFqRCxDQWRrQjs7QUFnQmxCLFNBQUssSUFBTCxHQUFvQixtQkFBUyxNQUFULENBQXBCLENBaEJrQjtBQWlCbEIsU0FBSyxNQUFMLEdBQW9CLHFCQUFXLE1BQVgsQ0FBcEIsQ0FqQmtCO0FBa0JsQixTQUFLLE9BQUwsR0FBb0Isc0JBQVksTUFBWixDQUFwQixDQWxCa0I7QUFtQmxCLFNBQUssVUFBTCxHQUFvQix5QkFBZSxNQUFmLENBQXBCLENBbkJrQjtBQW9CbEIsU0FBSyxPQUFMLEdBQW9CLHNCQUFZLE1BQVosQ0FBcEIsQ0FwQmtCO0FBcUJsQixTQUFLLFVBQUwsR0FBb0IseUJBQWUsTUFBZixDQUFwQixDQXJCa0I7QUFzQmxCLFNBQUssTUFBTCxHQUFvQixxQkFBVyxNQUFYLENBQXBCLENBdEJrQjtBQXVCbEIsU0FBSyxPQUFMLEdBQW9CLHNCQUFZLE1BQVosQ0FBcEIsQ0F2QmtCO0FBd0JsQixTQUFLLE1BQUwsR0FBb0IscUJBQVcsTUFBWCxDQUFwQixDQXhCa0I7QUF5QmxCLFNBQUssVUFBTCxHQUFvQix5QkFBZSxNQUFmLENBQXBCLENBekJrQjtBQTBCbEIsU0FBSyxZQUFMLEdBQW9CLDJCQUFpQixNQUFqQixDQUFwQixDQTFCa0I7O0FBNEJsQixXQUFPLElBQVAsQ0E1QmtCO0dBRFY7Q0FBUjs7QUFpQ0osT0FBTyxPQUFQLEdBQWlCLEtBQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzICAgICAgICAgICBmcm9tICdmcyc7XG5pbXBvcnQgd2luc3RvbiAgICAgIGZyb20gJ3dpbnN0b24nO1xuaW1wb3J0IE1pY3JvQ2FjaGUgICBmcm9tICdtaWNyby1jYWNoZSc7XG5pbXBvcnQgVGVybSAgICAgICAgIGZyb20gJy4vbW9kdWxlcy90ZXJtJztcbmltcG9ydCBDYW1wdXMgICAgICAgZnJvbSAnLi9tb2R1bGVzL2NhbXB1cyc7XG5pbXBvcnQgQ29sbGVnZSAgICAgIGZyb20gJy4vbW9kdWxlcy9jb2xsZWdlJztcbmltcG9ydCBEZXBhcnRtZW50ICAgZnJvbSAnLi9tb2R1bGVzL2RlcGFydG1lbnQnO1xuaW1wb3J0IFByb2dyYW0gICAgICBmcm9tICcuL21vZHVsZXMvcHJvZ3JhbSc7XG5pbXBvcnQgQ3VycmljdWx1bSAgIGZyb20gJy4vbW9kdWxlcy9jdXJyaWN1bHVtJztcbmltcG9ydCBDb3Vyc2UgICAgICAgZnJvbSAnLi9tb2R1bGVzL2NvdXJzZSc7XG5pbXBvcnQgU2VjdGlvbiAgICAgIGZyb20gJy4vbW9kdWxlcy9zZWN0aW9uJztcbmltcG9ydCBQZXJzb24gICAgICAgZnJvbSAnLi9tb2R1bGVzL3BlcnNvbic7XG5pbXBvcnQgRW5yb2xsbWVudCAgIGZyb20gJy4vbW9kdWxlcy9lbnJvbGxtZW50JztcbmltcG9ydCBSZWdpc3RyYXRpb24gZnJvbSAnLi9tb2R1bGVzL3JlZ2lzdHJhdGlvbic7XG5cbmZ1bmN0aW9uIHJlYWRDZXJ0aWZpY2F0ZShjZXJ0ID0gJycsIGtleSA9ICcnKSB7XG4gIGlmIChjZXJ0ID09PSAnJyB8fCBrZXkgPT09ICcnIHx8XG4gICAgICAhZnMuZXhpc3RzU3luYyhjZXJ0KSB8fCAhZnMuZXhpc3RzU3luYyhrZXkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDbGllbnQgY2VydCAke2NlcnR9IG9yIGtleSAke2tleX0gY2FuIG5vdCBiZSBmb3VuZGApO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjZXJ0OiBmcy5yZWFkRmlsZVN5bmMoY2VydCksXG4gICAga2V5OiAgZnMucmVhZEZpbGVTeW5jKGtleSlcbiAgfTtcbn1cblxubGV0IFVXU1dTID0ge1xuICBpbml0aWFsaXplKG9wdGlvbnMpIHtcbiAgICBsZXQgY29uZmlnID0gb3B0aW9ucztcbiAgICBjb25maWcuYXV0aCA9IHJlYWRDZXJ0aWZpY2F0ZShvcHRpb25zLmNlcnQsIG9wdGlvbnMua2V5KTtcblxuICAgIHdpbnN0b24ubG9nZ2Vycy5hZGQoJ3V3c3dzJywge1xuICAgICAgY29uc29sZToge1xuICAgICAgICBjb2xvcml6ZTogICAgdHJ1ZSxcbiAgICAgICAgbGFiZWw6ICAgICAgICd1d3N3cycsXG4gICAgICAgIGxldmVsOiAgICAgICBvcHRpb25zLmxvZ0xldmVsLFxuICAgICAgICBwcmV0dHlQcmludDogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uZmlnLmxvZyA9IHdpbnN0b24ubG9nZ2Vycy5nZXQoJ3V3c3dzJyk7XG4gICAgY29uZmlnLmNhY2hlID0gbmV3IE1pY3JvQ2FjaGUob3B0aW9ucy5jYWNoZVBhdGgsIG9wdGlvbnMubG9nTGV2ZWwpO1xuXG4gICAgdGhpcy50ZXJtICAgICAgICAgPSBuZXcgVGVybShjb25maWcpO1xuICAgIHRoaXMuY2FtcHVzICAgICAgID0gbmV3IENhbXB1cyhjb25maWcpO1xuICAgIHRoaXMuY29sbGVnZSAgICAgID0gbmV3IENvbGxlZ2UoY29uZmlnKTtcbiAgICB0aGlzLmRlcGFydG1lbnQgICA9IG5ldyBEZXBhcnRtZW50KGNvbmZpZyk7XG4gICAgdGhpcy5wcm9ncmFtICAgICAgPSBuZXcgUHJvZ3JhbShjb25maWcpO1xuICAgIHRoaXMuY3VycmljdWx1bSAgID0gbmV3IEN1cnJpY3VsdW0oY29uZmlnKTtcbiAgICB0aGlzLmNvdXJzZSAgICAgICA9IG5ldyBDb3Vyc2UoY29uZmlnKTtcbiAgICB0aGlzLnNlY3Rpb24gICAgICA9IG5ldyBTZWN0aW9uKGNvbmZpZyk7XG4gICAgdGhpcy5wZXJzb24gICAgICAgPSBuZXcgUGVyc29uKGNvbmZpZyk7XG4gICAgdGhpcy5lbnJvbGxtZW50ICAgPSBuZXcgRW5yb2xsbWVudChjb25maWcpO1xuICAgIHRoaXMucmVnaXN0cmF0aW9uID0gbmV3IFJlZ2lzdHJhdGlvbihjb25maWcpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVVdTV1M7XG4iXX0=