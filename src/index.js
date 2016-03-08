import fs           from 'fs';
import winston      from 'winston';
import MicroCache   from 'micro-cache';
import Term         from './modules/term';
import Campus       from './modules/campus';
import College      from './modules/college';
import Department   from './modules/department';
import Program      from './modules/program';
import Curriculum   from './modules/curriculum';
import Course       from './modules/course';
import Section      from './modules/section';
import Person       from './modules/person';
import Enrollment   from './modules/enrollment';
import Registration from './modules/registration';

function readCertificate(cert = "", key = "") {
  if (cert === '' || key === '' ||
      !fs.existsSync(cert) || !fs.existsSync(key)) {
    throw new Error(`Client cert ${cert} or key ${key} can not be found`);
  }

  return {
    cert: fs.readFileSync(cert),
    key: fs.readFileSync(key)
  };
}

let UWSWS = {
  initialize(options) {
    let config = options;
    config.auth = readCertificate(options.cert, options.key);

    winston.loggers.add('uwsws', {
      console: {
        colorize: true,
        label:    'uwsws',
        level:    options.logLevel,
        prettyPrint: true
      }
    });

    config.log = winston.loggers.get('uwsws');
    config.cache = new MicroCache(options.cachePath, options.logLevel);

    this.term         = new Term(config);
    this.campus       = new Campus(config);
    this.college      = new College(config);
    this.department   = new Department(config);
    this.program      = new Program(config);
    this.curriculum   = new Curriculum(config);
    this.course       = new Course(config);
    this.section      = new Section(config);
    this.person       = new Person(config);
    this.enrollment   = new Enrollment(config);
    this.registration = new Registration(config);

    return this;
  }
};

module.exports = UWSWS;
