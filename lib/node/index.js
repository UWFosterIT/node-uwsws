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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsU0FBUyxlQUFULEdBQThDO0FBQUEsTUFBckIsSUFBcUIseURBQWQsRUFBYztBQUFBLE1BQVYsR0FBVSx5REFBSixFQUFJOztBQUM1QyxNQUFJLFNBQVMsRUFBVCxJQUFlLFFBQVEsRUFBdkIsSUFDQSxDQUFDLGFBQUcsVUFBSCxDQUFjLElBQWQsQ0FERCxJQUN3QixDQUFDLGFBQUcsVUFBSCxDQUFjLEdBQWQsQ0FEN0IsRUFDaUQ7QUFDL0MsVUFBTSxJQUFJLEtBQUosa0JBQXlCLElBQXpCLGdCQUF3QyxHQUF4Qyx1QkFBTjtBQUNEOztBQUVELFNBQU87QUFDTCxVQUFNLGFBQUcsWUFBSCxDQUFnQixJQUFoQixDQUREO0FBRUwsU0FBTSxhQUFHLFlBQUgsQ0FBZ0IsR0FBaEI7QUFGRCxHQUFQO0FBSUQ7O0FBRUQsSUFBSSxRQUFRO0FBQ1YsWUFEVSxzQkFDQyxPQURELEVBQ1U7QUFDbEIsUUFBSSxTQUFTLE9BQWI7O0FBRUEsUUFBSSxPQUFPLEtBQVgsRUFBa0I7QUFDaEIsYUFBTyxJQUFQLEdBQWMsRUFBZDtBQUNBLGFBQU8sT0FBUCxHQUFpQjtBQUNmLHFDQUEyQixPQUFPO0FBRG5CLE9BQWpCO0FBR0QsS0FMRCxNQUtPO0FBQ0wsYUFBTyxPQUFQLEdBQWlCLEVBQWpCO0FBQ0EsYUFBTyxJQUFQLEdBQWMsZ0JBQWdCLFFBQVEsSUFBeEIsRUFBOEIsUUFBUSxHQUF0QyxDQUFkO0FBQ0Q7O0FBRUQsc0JBQVEsT0FBUixDQUFnQixHQUFoQixDQUFvQixPQUFwQixFQUE2QjtBQUMzQixlQUFTO0FBQ1Asa0JBQWEsSUFETjtBQUVQLGVBQWEsT0FGTjtBQUdQLGVBQWEsUUFBUSxRQUhkO0FBSVAscUJBQWE7QUFKTjtBQURrQixLQUE3Qjs7QUFTQSxXQUFPLEdBQVAsR0FBYSxrQkFBUSxPQUFSLENBQWdCLEdBQWhCLENBQW9CLE9BQXBCLENBQWI7QUFDQSxXQUFPLEtBQVAsR0FBZSx5QkFDYixRQUFRLFNBREssRUFFYixRQUFRLFFBRkssRUFHYixRQUFRLFFBSEssQ0FBZjs7QUFNQSxTQUFLLElBQUwsR0FBb0IsbUJBQVMsTUFBVCxDQUFwQjtBQUNBLFNBQUssTUFBTCxHQUFvQixxQkFBVyxNQUFYLENBQXBCO0FBQ0EsU0FBSyxPQUFMLEdBQW9CLHNCQUFZLE1BQVosQ0FBcEI7QUFDQSxTQUFLLFVBQUwsR0FBb0IseUJBQWUsTUFBZixDQUFwQjtBQUNBLFNBQUssT0FBTCxHQUFvQixzQkFBWSxNQUFaLENBQXBCO0FBQ0EsU0FBSyxVQUFMLEdBQW9CLHlCQUFlLE1BQWYsQ0FBcEI7QUFDQSxTQUFLLE1BQUwsR0FBb0IscUJBQVcsTUFBWCxDQUFwQjtBQUNBLFNBQUssT0FBTCxHQUFvQixzQkFBWSxNQUFaLENBQXBCO0FBQ0EsU0FBSyxNQUFMLEdBQW9CLHFCQUFXLE1BQVgsQ0FBcEI7QUFDQSxTQUFLLFVBQUwsR0FBb0IseUJBQWUsTUFBZixDQUFwQjtBQUNBLFNBQUssWUFBTCxHQUFvQiwyQkFBaUIsTUFBakIsQ0FBcEI7QUFDQSxTQUFLLFNBQUwsR0FBb0Isd0JBQWMsTUFBZCxDQUFwQjs7QUFFQSxXQUFPLElBQVA7QUFDRDtBQTVDUyxDQUFaOztBQStDQSxPQUFPLE9BQVAsR0FBaUIsS0FBakIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgICAgICAgICAgIGZyb20gJ2ZzJztcbmltcG9ydCB3aW5zdG9uICAgICAgZnJvbSAnd2luc3Rvbic7XG5pbXBvcnQgTWljcm9DYWNoZSAgIGZyb20gJ21pY3JvLWNhY2hlJztcbmltcG9ydCBUZXJtICAgICAgICAgZnJvbSAnLi9tb2R1bGVzL3Rlcm0nO1xuaW1wb3J0IENhbXB1cyAgICAgICBmcm9tICcuL21vZHVsZXMvY2FtcHVzJztcbmltcG9ydCBDb2xsZWdlICAgICAgZnJvbSAnLi9tb2R1bGVzL2NvbGxlZ2UnO1xuaW1wb3J0IERlcGFydG1lbnQgICBmcm9tICcuL21vZHVsZXMvZGVwYXJ0bWVudCc7XG5pbXBvcnQgUHJvZ3JhbSAgICAgIGZyb20gJy4vbW9kdWxlcy9wcm9ncmFtJztcbmltcG9ydCBDdXJyaWN1bHVtICAgZnJvbSAnLi9tb2R1bGVzL2N1cnJpY3VsdW0nO1xuaW1wb3J0IENvdXJzZSAgICAgICBmcm9tICcuL21vZHVsZXMvY291cnNlJztcbmltcG9ydCBTZWN0aW9uICAgICAgZnJvbSAnLi9tb2R1bGVzL3NlY3Rpb24nO1xuaW1wb3J0IFBlcnNvbiAgICAgICBmcm9tICcuL21vZHVsZXMvcGVyc29uJztcbmltcG9ydCBFbnJvbGxtZW50ICAgZnJvbSAnLi9tb2R1bGVzL2Vucm9sbG1lbnQnO1xuaW1wb3J0IFJlZ2lzdHJhdGlvbiBmcm9tICcuL21vZHVsZXMvcmVnaXN0cmF0aW9uJztcbmltcG9ydCBUZXN0U2NvcmUgICAgZnJvbSAnLi9tb2R1bGVzL3Rlc3RzY29yZSc7XG5cbmZ1bmN0aW9uIHJlYWRDZXJ0aWZpY2F0ZShjZXJ0ID0gJycsIGtleSA9ICcnKSB7XG4gIGlmIChjZXJ0ID09PSAnJyB8fCBrZXkgPT09ICcnIHx8XG4gICAgICAhZnMuZXhpc3RzU3luYyhjZXJ0KSB8fCAhZnMuZXhpc3RzU3luYyhrZXkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDbGllbnQgY2VydCAke2NlcnR9IG9yIGtleSAke2tleX0gY2FuIG5vdCBiZSBmb3VuZGApO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjZXJ0OiBmcy5yZWFkRmlsZVN5bmMoY2VydCksXG4gICAga2V5OiAgZnMucmVhZEZpbGVTeW5jKGtleSlcbiAgfTtcbn1cblxubGV0IFVXU1dTID0ge1xuICBpbml0aWFsaXplKG9wdGlvbnMpIHtcbiAgICBsZXQgY29uZmlnID0gb3B0aW9ucztcblxuICAgIGlmIChjb25maWcudG9rZW4pIHtcbiAgICAgIGNvbmZpZy5hdXRoID0ge307XG4gICAgICBjb25maWcuaGVhZGVycyA9IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7Y29uZmlnLnRva2VufWBcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZy5oZWFkZXJzID0ge307XG4gICAgICBjb25maWcuYXV0aCA9IHJlYWRDZXJ0aWZpY2F0ZShvcHRpb25zLmNlcnQsIG9wdGlvbnMua2V5KTtcbiAgICB9XG5cbiAgICB3aW5zdG9uLmxvZ2dlcnMuYWRkKCd1d3N3cycsIHtcbiAgICAgIGNvbnNvbGU6IHtcbiAgICAgICAgY29sb3JpemU6ICAgIHRydWUsXG4gICAgICAgIGxhYmVsOiAgICAgICAndXdzd3MnLFxuICAgICAgICBsZXZlbDogICAgICAgb3B0aW9ucy5sb2dMZXZlbCxcbiAgICAgICAgcHJldHR5UHJpbnQ6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbmZpZy5sb2cgPSB3aW5zdG9uLmxvZ2dlcnMuZ2V0KCd1d3N3cycpO1xuICAgIGNvbmZpZy5jYWNoZSA9IG5ldyBNaWNyb0NhY2hlKFxuICAgICAgb3B0aW9ucy5jYWNoZVBhdGgsXG4gICAgICBvcHRpb25zLmxvZ0xldmVsLFxuICAgICAgb3B0aW9ucy5jYWNoZUV4dFxuICAgICk7XG5cbiAgICB0aGlzLnRlcm0gICAgICAgICA9IG5ldyBUZXJtKGNvbmZpZyk7XG4gICAgdGhpcy5jYW1wdXMgICAgICAgPSBuZXcgQ2FtcHVzKGNvbmZpZyk7XG4gICAgdGhpcy5jb2xsZWdlICAgICAgPSBuZXcgQ29sbGVnZShjb25maWcpO1xuICAgIHRoaXMuZGVwYXJ0bWVudCAgID0gbmV3IERlcGFydG1lbnQoY29uZmlnKTtcbiAgICB0aGlzLnByb2dyYW0gICAgICA9IG5ldyBQcm9ncmFtKGNvbmZpZyk7XG4gICAgdGhpcy5jdXJyaWN1bHVtICAgPSBuZXcgQ3VycmljdWx1bShjb25maWcpO1xuICAgIHRoaXMuY291cnNlICAgICAgID0gbmV3IENvdXJzZShjb25maWcpO1xuICAgIHRoaXMuc2VjdGlvbiAgICAgID0gbmV3IFNlY3Rpb24oY29uZmlnKTtcbiAgICB0aGlzLnBlcnNvbiAgICAgICA9IG5ldyBQZXJzb24oY29uZmlnKTtcbiAgICB0aGlzLmVucm9sbG1lbnQgICA9IG5ldyBFbnJvbGxtZW50KGNvbmZpZyk7XG4gICAgdGhpcy5yZWdpc3RyYXRpb24gPSBuZXcgUmVnaXN0cmF0aW9uKGNvbmZpZyk7XG4gICAgdGhpcy50ZXN0U2NvcmUgICAgPSBuZXcgVGVzdFNjb3JlKGNvbmZpZyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBVV1NXUztcbiJdfQ==