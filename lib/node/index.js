'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

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
  var cert = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
  var key = arguments.length <= 1 || arguments[1] === undefined ? "" : arguments[1];

  // don't do this async, if this fails then nothing will work
  // and that is preferred when using a lib like this one
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
    var config = readCertificate(options.cert, options.key);
    config.baseUrl = options.baseUrl;
    config.cacheMode = options.cacheMode;
    config.cachePath = options.cachePath;

    this.config = config;
    this.options = options;

    // add all the sub modules with any necessary config etc
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