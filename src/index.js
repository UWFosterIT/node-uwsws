import fs from 'fs';
import Another from './another';
import Term from './modules/term';
import Campus from './modules/campus';

let config = {};

function readCertificate(cert = "", key = "") {
  // don't do this async, if this fails then nothing will work
  // and that is preferred when using a lib like this one
  if (cert === '' || key === '' ||
      !fs.existsSync(cert) || !fs.existsSync(key)) {
    throw new Error(`Client cert ${cert} or key ${key} can not be found`);
  }

  config.cert = fs.readFileSync(cert);
  config.key  = fs.readFileSync(key);

  return;
}

let UWSWS = {
  anotherFn: Another.anotherFn,
  mainFn() {
    return 'hello';
  },
  initialize(options) {
    readCertificate(options.cert, options.key);
    config.baseUrl = options.baseUrl;

    this.config = config;
    this.options = options;

    // add all the sub modules with any necessary config etc
    this.term   = new Term(config);
    this.campus = new Campus(config);

    return this;
  }
};

export default UWSWS;
