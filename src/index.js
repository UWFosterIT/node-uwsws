import fs from 'fs';
import Another from './another';
import Term from './modules/term';

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
}

const UWSWS = {
  anotherFn: Another.anotherFn,
  multiply: Another.multiply,
  mainFn() {
    return 'hello';
  },
  initialize(options) {
    readCertificate(options.cert, options.key);
    config.baseUrl = options.baseUrl;

    // add all the sub modules with any necessary config etc
    this.term = new Term(config);

    return config;
  }
};

export default UWSWS;
