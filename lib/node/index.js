'use strict';

var _campus = require('./modules/campus');

var _campus2 = _interopRequireDefault(_campus);

var _college = require('./modules/college');

var _college2 = _interopRequireDefault(_college);

var _course = require('./modules/course');

var _course2 = _interopRequireDefault(_course);

var _curriculum = require('./modules/curriculum');

var _curriculum2 = _interopRequireDefault(_curriculum);

var _department = require('./modules/department');

var _department2 = _interopRequireDefault(_department);

var _enrollment = require('./modules/enrollment');

var _enrollment2 = _interopRequireDefault(_enrollment);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _microCache = require('micro-cache');

var _microCache2 = _interopRequireDefault(_microCache);

var _person = require('./modules/person');

var _person2 = _interopRequireDefault(_person);

var _program = require('./modules/program');

var _program2 = _interopRequireDefault(_program);

var _registration = require('./modules/registration');

var _registration2 = _interopRequireDefault(_registration);

var _section = require('./modules/section');

var _section2 = _interopRequireDefault(_section);

var _term = require('./modules/term');

var _term2 = _interopRequireDefault(_term);

var _testscore = require('./modules/testscore');

var _testscore2 = _interopRequireDefault(_testscore);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readCertificate() {
  var cert = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

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
      config.headers = { 'Authorization': 'Bearer ' + config.token };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWFkQ2VydGlmaWNhdGUiLCJjZXJ0Iiwia2V5IiwiZXhpc3RzU3luYyIsIkVycm9yIiwicmVhZEZpbGVTeW5jIiwiVVdTV1MiLCJpbml0aWFsaXplIiwib3B0aW9ucyIsImNvbmZpZyIsInRva2VuIiwiYXV0aCIsImhlYWRlcnMiLCJsb2dnZXJzIiwiYWRkIiwiY29uc29sZSIsImNvbG9yaXplIiwibGFiZWwiLCJsZXZlbCIsImxvZ0xldmVsIiwicHJldHR5UHJpbnQiLCJsb2ciLCJnZXQiLCJjYWNoZSIsImNhY2hlUGF0aCIsImNhY2hlRXh0IiwidGVybSIsImNhbXB1cyIsImNvbGxlZ2UiLCJkZXBhcnRtZW50IiwicHJvZ3JhbSIsImN1cnJpY3VsdW0iLCJjb3Vyc2UiLCJzZWN0aW9uIiwicGVyc29uIiwiZW5yb2xsbWVudCIsInJlZ2lzdHJhdGlvbiIsInRlc3RTY29yZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxTQUFTQSxlQUFULEdBQThDO0FBQUEsTUFBckJDLElBQXFCLHVFQUFkLEVBQWM7QUFBQSxNQUFWQyxHQUFVLHVFQUFKLEVBQUk7O0FBQzVDLE1BQUlELFNBQVMsRUFBVCxJQUFlQyxRQUFRLEVBQXZCLElBQ0EsQ0FBQyxhQUFHQyxVQUFILENBQWNGLElBQWQsQ0FERCxJQUN3QixDQUFDLGFBQUdFLFVBQUgsQ0FBY0QsR0FBZCxDQUQ3QixFQUNpRDtBQUMvQyxVQUFNLElBQUlFLEtBQUosa0JBQXlCSCxJQUF6QixnQkFBd0NDLEdBQXhDLHVCQUFOO0FBQ0Q7O0FBRUQsU0FBTztBQUNMRCxVQUFNLGFBQUdJLFlBQUgsQ0FBZ0JKLElBQWhCLENBREQ7QUFFTEMsU0FBTSxhQUFHRyxZQUFILENBQWdCSCxHQUFoQjtBQUZELEdBQVA7QUFJRDs7QUFFRCxJQUFJSSxRQUFRO0FBQ1ZDLFlBRFUsc0JBQ0NDLE9BREQsRUFDVTtBQUNsQixRQUFJQyxTQUFTRCxPQUFiOztBQUVBLFFBQUlDLE9BQU9DLEtBQVgsRUFBa0I7QUFDaEJELGFBQU9FLElBQVAsR0FBYyxFQUFkO0FBQ0FGLGFBQU9HLE9BQVAsR0FBaUIsRUFBQyw2QkFBMkJILE9BQU9DLEtBQW5DLEVBQWpCO0FBQ0QsS0FIRCxNQUdPO0FBQ0xELGFBQU9HLE9BQVAsR0FBaUIsRUFBakI7QUFDQUgsYUFBT0UsSUFBUCxHQUFjWCxnQkFBZ0JRLFFBQVFQLElBQXhCLEVBQThCTyxRQUFRTixHQUF0QyxDQUFkO0FBQ0Q7O0FBRUQsc0JBQVFXLE9BQVIsQ0FBZ0JDLEdBQWhCLENBQW9CLE9BQXBCLEVBQTZCO0FBQzNCQyxlQUFTO0FBQ1BDLGtCQUFhLElBRE47QUFFUEMsZUFBYSxPQUZOO0FBR1BDLGVBQWFWLFFBQVFXLFFBSGQ7QUFJUEMscUJBQWE7QUFKTjtBQURrQixLQUE3Qjs7QUFTQVgsV0FBT1ksR0FBUCxHQUFhLGtCQUFRUixPQUFSLENBQWdCUyxHQUFoQixDQUFvQixPQUFwQixDQUFiO0FBQ0FiLFdBQU9jLEtBQVAsR0FBZSx5QkFDYmYsUUFBUWdCLFNBREssRUFFYmhCLFFBQVFXLFFBRkssRUFHYlgsUUFBUWlCLFFBSEssQ0FBZjs7QUFNQSxTQUFLQyxJQUFMLEdBQW9CLG1CQUFTakIsTUFBVCxDQUFwQjtBQUNBLFNBQUtrQixNQUFMLEdBQW9CLHFCQUFXbEIsTUFBWCxDQUFwQjtBQUNBLFNBQUttQixPQUFMLEdBQW9CLHNCQUFZbkIsTUFBWixDQUFwQjtBQUNBLFNBQUtvQixVQUFMLEdBQW9CLHlCQUFlcEIsTUFBZixDQUFwQjtBQUNBLFNBQUtxQixPQUFMLEdBQW9CLHNCQUFZckIsTUFBWixDQUFwQjtBQUNBLFNBQUtzQixVQUFMLEdBQW9CLHlCQUFldEIsTUFBZixDQUFwQjtBQUNBLFNBQUt1QixNQUFMLEdBQW9CLHFCQUFXdkIsTUFBWCxDQUFwQjtBQUNBLFNBQUt3QixPQUFMLEdBQW9CLHNCQUFZeEIsTUFBWixDQUFwQjtBQUNBLFNBQUt5QixNQUFMLEdBQW9CLHFCQUFXekIsTUFBWCxDQUFwQjtBQUNBLFNBQUswQixVQUFMLEdBQW9CLHlCQUFlMUIsTUFBZixDQUFwQjtBQUNBLFNBQUsyQixZQUFMLEdBQW9CLDJCQUFpQjNCLE1BQWpCLENBQXBCO0FBQ0EsU0FBSzRCLFNBQUwsR0FBb0Isd0JBQWM1QixNQUFkLENBQXBCOztBQUVBLFdBQU8sSUFBUDtBQUNEO0FBMUNTLENBQVo7O0FBNkNBNkIsT0FBT0MsT0FBUCxHQUFpQmpDLEtBQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbXB1cyAgICAgICBmcm9tICcuL21vZHVsZXMvY2FtcHVzJztcbmltcG9ydCBDb2xsZWdlICAgICAgZnJvbSAnLi9tb2R1bGVzL2NvbGxlZ2UnO1xuaW1wb3J0IENvdXJzZSAgICAgICBmcm9tICcuL21vZHVsZXMvY291cnNlJztcbmltcG9ydCBDdXJyaWN1bHVtICAgZnJvbSAnLi9tb2R1bGVzL2N1cnJpY3VsdW0nO1xuaW1wb3J0IERlcGFydG1lbnQgICBmcm9tICcuL21vZHVsZXMvZGVwYXJ0bWVudCc7XG5pbXBvcnQgRW5yb2xsbWVudCAgIGZyb20gJy4vbW9kdWxlcy9lbnJvbGxtZW50JztcbmltcG9ydCBmcyAgICAgICAgICAgZnJvbSAnZnMnO1xuaW1wb3J0IE1pY3JvQ2FjaGUgICBmcm9tICdtaWNyby1jYWNoZSc7XG5pbXBvcnQgUGVyc29uICAgICAgIGZyb20gJy4vbW9kdWxlcy9wZXJzb24nO1xuaW1wb3J0IFByb2dyYW0gICAgICBmcm9tICcuL21vZHVsZXMvcHJvZ3JhbSc7XG5pbXBvcnQgUmVnaXN0cmF0aW9uIGZyb20gJy4vbW9kdWxlcy9yZWdpc3RyYXRpb24nO1xuaW1wb3J0IFNlY3Rpb24gICAgICBmcm9tICcuL21vZHVsZXMvc2VjdGlvbic7XG5pbXBvcnQgVGVybSAgICAgICAgIGZyb20gJy4vbW9kdWxlcy90ZXJtJztcbmltcG9ydCBUZXN0U2NvcmUgICAgZnJvbSAnLi9tb2R1bGVzL3Rlc3RzY29yZSc7XG5pbXBvcnQgd2luc3RvbiAgICAgIGZyb20gJ3dpbnN0b24nO1xuXG5mdW5jdGlvbiByZWFkQ2VydGlmaWNhdGUoY2VydCA9ICcnLCBrZXkgPSAnJykge1xuICBpZiAoY2VydCA9PT0gJycgfHwga2V5ID09PSAnJyB8fFxuICAgICAgIWZzLmV4aXN0c1N5bmMoY2VydCkgfHwgIWZzLmV4aXN0c1N5bmMoa2V5KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgQ2xpZW50IGNlcnQgJHtjZXJ0fSBvciBrZXkgJHtrZXl9IGNhbiBub3QgYmUgZm91bmRgKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2VydDogZnMucmVhZEZpbGVTeW5jKGNlcnQpLFxuICAgIGtleTogIGZzLnJlYWRGaWxlU3luYyhrZXkpXG4gIH07XG59XG5cbmxldCBVV1NXUyA9IHtcbiAgaW5pdGlhbGl6ZShvcHRpb25zKSB7XG4gICAgbGV0IGNvbmZpZyA9IG9wdGlvbnM7XG5cbiAgICBpZiAoY29uZmlnLnRva2VuKSB7XG4gICAgICBjb25maWcuYXV0aCA9IHt9O1xuICAgICAgY29uZmlnLmhlYWRlcnMgPSB7J0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7Y29uZmlnLnRva2VufWB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcuaGVhZGVycyA9IHt9O1xuICAgICAgY29uZmlnLmF1dGggPSByZWFkQ2VydGlmaWNhdGUob3B0aW9ucy5jZXJ0LCBvcHRpb25zLmtleSk7XG4gICAgfVxuXG4gICAgd2luc3Rvbi5sb2dnZXJzLmFkZCgndXdzd3MnLCB7XG4gICAgICBjb25zb2xlOiB7XG4gICAgICAgIGNvbG9yaXplOiAgICB0cnVlLFxuICAgICAgICBsYWJlbDogICAgICAgJ3V3c3dzJyxcbiAgICAgICAgbGV2ZWw6ICAgICAgIG9wdGlvbnMubG9nTGV2ZWwsXG4gICAgICAgIHByZXR0eVByaW50OiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25maWcubG9nID0gd2luc3Rvbi5sb2dnZXJzLmdldCgndXdzd3MnKTtcbiAgICBjb25maWcuY2FjaGUgPSBuZXcgTWljcm9DYWNoZShcbiAgICAgIG9wdGlvbnMuY2FjaGVQYXRoLFxuICAgICAgb3B0aW9ucy5sb2dMZXZlbCxcbiAgICAgIG9wdGlvbnMuY2FjaGVFeHRcbiAgICApO1xuXG4gICAgdGhpcy50ZXJtICAgICAgICAgPSBuZXcgVGVybShjb25maWcpO1xuICAgIHRoaXMuY2FtcHVzICAgICAgID0gbmV3IENhbXB1cyhjb25maWcpO1xuICAgIHRoaXMuY29sbGVnZSAgICAgID0gbmV3IENvbGxlZ2UoY29uZmlnKTtcbiAgICB0aGlzLmRlcGFydG1lbnQgICA9IG5ldyBEZXBhcnRtZW50KGNvbmZpZyk7XG4gICAgdGhpcy5wcm9ncmFtICAgICAgPSBuZXcgUHJvZ3JhbShjb25maWcpO1xuICAgIHRoaXMuY3VycmljdWx1bSAgID0gbmV3IEN1cnJpY3VsdW0oY29uZmlnKTtcbiAgICB0aGlzLmNvdXJzZSAgICAgICA9IG5ldyBDb3Vyc2UoY29uZmlnKTtcbiAgICB0aGlzLnNlY3Rpb24gICAgICA9IG5ldyBTZWN0aW9uKGNvbmZpZyk7XG4gICAgdGhpcy5wZXJzb24gICAgICAgPSBuZXcgUGVyc29uKGNvbmZpZyk7XG4gICAgdGhpcy5lbnJvbGxtZW50ICAgPSBuZXcgRW5yb2xsbWVudChjb25maWcpO1xuICAgIHRoaXMucmVnaXN0cmF0aW9uID0gbmV3IFJlZ2lzdHJhdGlvbihjb25maWcpO1xuICAgIHRoaXMudGVzdFNjb3JlICAgID0gbmV3IFRlc3RTY29yZShjb25maWcpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVVdTV1M7XG4iXX0=