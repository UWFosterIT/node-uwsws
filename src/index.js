import fs         from 'fs';
import Term       from './modules/term';
import Campus     from './modules/campus';
import College    from './modules/college';
import Department from './modules/department';
import Program    from './modules/program';
import Curriculum from './modules/curriculum';
import Course     from './modules/course';

function readCertificate(cert = "", key = "") {
  // don't do this async, if this fails then nothing will work
  // and that is preferred when using a lib like this one
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
    let config = readCertificate(options.cert, options.key);
    config.baseUrl = options.baseUrl;

    this.config  = config;
    this.options = options;

    // add all the sub modules with any necessary config etc
    this.term       = new Term(config);
    this.campus     = new Campus(config);
    this.college    = new College(config);
    this.department = new Department(config);
    this.program    = new Program(config);
    this.curriculum = new Curriculum(config);
    this.course     = new Course(config);

    return this;
  }
};

export default UWSWS;
