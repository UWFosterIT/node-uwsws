let AWS          = require('aws-sdk');
let Campus       = require('./modules/campus');
let College      = require('./modules/college');
let Course       = require('./modules/course');
let Curriculum   = require('./modules/curriculum');
let Department   = require('./modules/department');
let Enrollment   = require('./modules/enrollment');
let fs           = require('fs');
let MicroCache   = require('micro-cache');
let Person       = require('./modules/person');
let Program      = require('./modules/program');
let Registration = require('./modules/registration');
let Section      = require('./modules/section');
let Term         = require('./modules/term');
let TestScore    = require('./modules/testscore');
let winston      = require('winston');

let FileCertificate = {
  readCertificate: async (opts) => {
    if (opts.cert === '' || opts.key === '' ||
      !fs.existsSync(opts.cert) || !fs.existsSync(opts.key)) {
      throw new Error(`Client cert '${opts.cert}' or key '${opts.key}' can not be found`);
    }

    return {
      cert:               fs.readFileSync(opts.cert),
      key:                fs.readFileSync(opts.key),
      rejectUnauthorized: false
    };
  }
};

let S3Certificate = {
  readCertificate: async (opts) => {
    let s3 = new AWS.S3();
    let cert = await s3.getObject({
      Bucket: opts.certBucket,
      Key:    opts.certKey
    }).promise().catch((err) => {
      throw Error('S3 get cert error', err);
    });
    let key = await s3.getObject({
      Bucket: opts.keyBucket,
      Key:    opts.keyKey
    }).promise().catch((err) => {
      throw Error('S3 get key error', err);
    });

    return {
      cert:               cert.Body,
      key:                key.Body,
      rejectUnauthorized: false
    };
  }
};

async function readCertificate(opts) {
  let certReader;

  switch (true) {

    case opts.hasOwnProperty('file'):
      certReader = Object.create(FileCertificate);
      opts = opts.file;
      break;

    case opts.hasOwnProperty('s3'):
      certReader = Object.create(S3Certificate);
      opts = opts.s3;
      break;

    default:
      throw Error('Certificate reader not supported');
  }

  return await certReader.readCertificate(opts);
}

let UWSWS = {
  async initialize(options) {
    let config = options;

    if (config.token) {
      config.auth = {};
      config.headers = {'Authorization': `Bearer ${config.token}`};
    } else {
      config.headers = {};
      config.auth = await readCertificate(config.certInfo);
    }

    winston.loggers.add('uwsws', {
      console: {
        colorize:    true,
        label:       'uwsws',
        level:       options.logLevel,
        prettyPrint: true
      }
    });

    config.log = winston.loggers.get('uwsws');
    config.cache = new MicroCache(
      options.cachePath,
      options.logLevel,
      options.cacheExt
    );

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
    this.testScore    = new TestScore(config);

    return this;
  }
};

module.exports = UWSWS;
