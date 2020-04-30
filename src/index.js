const AWS = require('aws-sdk');
const fs = require('fs');
const MicroCache = require('micro-cache');
const log4js = require('@log4js-node/log4js-api');
const _ = require('lodash');
const Campus = require('./modules/campus');
const College = require('./modules/college');
const Course = require('./modules/course');
const Curriculum = require('./modules/curriculum');
const Department = require('./modules/department');
const Enrollment = require('./modules/enrollment');
const Major = require('./modules/major');
const Person = require('./modules/person');
const Program = require('./modules/program');
const Registration = require('./modules/registration');
const Section = require('./modules/section');
const Term = require('./modules/term');
const TestScore = require('./modules/testscore');

const FileCertificate = {
  readCertificate: async (opts) => {
    if (opts.cert === '' || opts.key === ''
      // eslint-disable-next-line security/detect-non-literal-fs-filename
      || !fs.existsSync(opts.cert) || !fs.existsSync(opts.key)) {
      throw new Error(`Client cert '${opts.cert}' or key '${opts.key}' can not be found`);
    }

    return {
      // eslint-disable-next-line security/detect-non-literal-fs-filename
      cert: fs.readFileSync(opts.cert),
      // eslint-disable-next-line security/detect-non-literal-fs-filename
      key: fs.readFileSync(opts.key),
      rejectUnauthorized: false,
    };
  },
};

const S3Certificate = {
  readCertificate: async (opts) => {
    const s3 = new AWS.S3();
    const cert = await s3.getObject({
      Bucket: opts.certBucket,
      Key: opts.certKey,
    }).promise().catch((err) => {
      throw Error('S3 get cert error', err);
    });
    const key = await s3.getObject({
      Bucket: opts.keyBucket,
      Key: opts.keyKey,
    }).promise().catch((err) => {
      throw Error('S3 get key error', err);
    });

    return {
      cert: cert.Body,
      key: key.Body,
      rejectUnauthorized: false,
    };
  },
};

async function readCertificate(options) {
  let certReader;
  let opts = options;

  switch (true) {
    case _.has(opts, 'file'):
      certReader = Object.create(FileCertificate);
      opts = opts.file;
      break;

    case _.has(opts, 's3'):
      certReader = Object.create(S3Certificate);
      opts = opts.s3;
      break;

    default:
      throw Error('Certificate reader not supported');
  }

  return certReader.readCertificate(opts);
}

const UWSWS = {
  async initialize(options) {
    const config = { ...options };

    if (config.token) {
      config.auth = {};
      config.headers = { Authorization: `Bearer ${config.token}` };
    } else {
      config.headers = {};
      config.auth = await readCertificate(config.certInfo);
    }

    config.cache = new MicroCache(
      options.cachePath,
      options.logLevel,
      options.cacheExt,
    );

    config.log = log4js.getLogger('node-uwsws');

    this.term = new Term(config);
    this.campus = new Campus(config);
    this.college = new College(config);
    this.department = new Department(config);
    this.major = new Major(config);
    this.program = new Program(config);
    this.curriculum = new Curriculum(config);
    this.course = new Course(config);
    this.section = new Section(config);
    this.person = new Person(config);
    this.enrollment = new Enrollment(config);
    this.registration = new Registration(config);
    this.testScore = new TestScore(config);

    return this;
  },
};

module.exports = UWSWS;
