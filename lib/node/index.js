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
//# sourceMappingURL=data:application/json;base64,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bXBvcnQgd2luc3RvbiAgICAgIGZyb20gJ3dpbnN0b24nO1xuaW1wb3J0IE1pY3JvQ2FjaGUgICBmcm9tICdtaWNyby1jYWNoZSc7XG5pbXBvcnQgVGVybSAgICAgICAgIGZyb20gJy4vbW9kdWxlcy90ZXJtJztcbmltcG9ydCBDYW1wdXMgICAgICAgZnJvbSAnLi9tb2R1bGVzL2NhbXB1cyc7XG5pbXBvcnQgQ29sbGVnZSAgICAgIGZyb20gJy4vbW9kdWxlcy9jb2xsZWdlJztcbmltcG9ydCBEZXBhcnRtZW50ICAgZnJvbSAnLi9tb2R1bGVzL2RlcGFydG1lbnQnO1xuaW1wb3J0IFByb2dyYW0gICAgICBmcm9tICcuL21vZHVsZXMvcHJvZ3JhbSc7XG5pbXBvcnQgQ3VycmljdWx1bSAgIGZyb20gJy4vbW9kdWxlcy9jdXJyaWN1bHVtJztcbmltcG9ydCBDb3Vyc2UgICAgICAgZnJvbSAnLi9tb2R1bGVzL2NvdXJzZSc7XG5pbXBvcnQgU2VjdGlvbiAgICAgIGZyb20gJy4vbW9kdWxlcy9zZWN0aW9uJztcbmltcG9ydCBQZXJzb24gICAgICAgZnJvbSAnLi9tb2R1bGVzL3BlcnNvbic7XG5pbXBvcnQgRW5yb2xsbWVudCAgIGZyb20gJy4vbW9kdWxlcy9lbnJvbGxtZW50JztcbmltcG9ydCBSZWdpc3RyYXRpb24gZnJvbSAnLi9tb2R1bGVzL3JlZ2lzdHJhdGlvbic7XG5pbXBvcnQgVGVzdFNjb3JlICAgIGZyb20gJy4vbW9kdWxlcy90ZXN0c2NvcmUnO1xuXG5mdW5jdGlvbiByZWFkQ2VydGlmaWNhdGUoY2VydCA9ICcnLCBrZXkgPSAnJykge1xuICBpZiAoY2VydCA9PT0gJycgfHwga2V5ID09PSAnJyB8fFxuICAgICAgIWZzLmV4aXN0c1N5bmMoY2VydCkgfHwgIWZzLmV4aXN0c1N5bmMoa2V5KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgQ2xpZW50IGNlcnQgJHtjZXJ0fSBvciBrZXkgJHtrZXl9IGNhbiBub3QgYmUgZm91bmRgKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2VydDogZnMucmVhZEZpbGVTeW5jKGNlcnQpLFxuICAgIGtleTogIGZzLnJlYWRGaWxlU3luYyhrZXkpXG4gIH07XG59XG5cbmxldCBVV1NXUyA9IHtcbiAgaW5pdGlhbGl6ZShvcHRpb25zKSB7XG4gICAgbGV0IGNvbmZpZyA9IG9wdGlvbnM7XG5cbiAgICBpZiAoY29uZmlnLnRva2VuKSB7XG4gICAgICBjb25maWcuYXV0aCA9IHt9O1xuICAgICAgY29uZmlnLmhlYWRlcnMgPSB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2NvbmZpZy50b2tlbn1gXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcuaGVhZGVycyA9IHt9O1xuICAgICAgY29uZmlnLmF1dGggPSByZWFkQ2VydGlmaWNhdGUob3B0aW9ucy5jZXJ0LCBvcHRpb25zLmtleSk7XG4gICAgfVxuXG4gICAgd2luc3Rvbi5sb2dnZXJzLmFkZCgndXdzd3MnLCB7XG4gICAgICBjb25zb2xlOiB7XG4gICAgICAgIGNvbG9yaXplOiAgICB0cnVlLFxuICAgICAgICBsYWJlbDogICAgICAgJ3V3c3dzJyxcbiAgICAgICAgbGV2ZWw6ICAgICAgIG9wdGlvbnMubG9nTGV2ZWwsXG4gICAgICAgIHByZXR0eVByaW50OiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25maWcubG9nID0gd2luc3Rvbi5sb2dnZXJzLmdldCgndXdzd3MnKTtcbiAgICBjb25maWcuY2FjaGUgPSBuZXcgTWljcm9DYWNoZShcbiAgICAgIG9wdGlvbnMuY2FjaGVQYXRoLFxuICAgICAgb3B0aW9ucy5sb2dMZXZlbCxcbiAgICAgIG9wdGlvbnMuY2FjaGVFeHRcbiAgICApO1xuXG4gICAgdGhpcy50ZXJtICAgICAgICAgPSBuZXcgVGVybShjb25maWcpO1xuICAgIHRoaXMuY2FtcHVzICAgICAgID0gbmV3IENhbXB1cyhjb25maWcpO1xuICAgIHRoaXMuY29sbGVnZSAgICAgID0gbmV3IENvbGxlZ2UoY29uZmlnKTtcbiAgICB0aGlzLmRlcGFydG1lbnQgICA9IG5ldyBEZXBhcnRtZW50KGNvbmZpZyk7XG4gICAgdGhpcy5wcm9ncmFtICAgICAgPSBuZXcgUHJvZ3JhbShjb25maWcpO1xuICAgIHRoaXMuY3VycmljdWx1bSAgID0gbmV3IEN1cnJpY3VsdW0oY29uZmlnKTtcbiAgICB0aGlzLmNvdXJzZSAgICAgICA9IG5ldyBDb3Vyc2UoY29uZmlnKTtcbiAgICB0aGlzLnNlY3Rpb24gICAgICA9IG5ldyBTZWN0aW9uKGNvbmZpZyk7XG4gICAgdGhpcy5wZXJzb24gICAgICAgPSBuZXcgUGVyc29uKGNvbmZpZyk7XG4gICAgdGhpcy5lbnJvbGxtZW50ICAgPSBuZXcgRW5yb2xsbWVudChjb25maWcpO1xuICAgIHRoaXMucmVnaXN0cmF0aW9uID0gbmV3IFJlZ2lzdHJhdGlvbihjb25maWcpO1xuICAgIHRoaXMudGVzdFNjb3JlICAgID0gbmV3IFRlc3RTY29yZShjb25maWcpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVVdTV1M7XG4iXX0=