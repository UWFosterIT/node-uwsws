const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const log4Js = require('log4js');
const config = require('./config');
const uwsws = require('../../src/index');

const logger = log4Js.getLogger();
logger.level = config.logLevel || 'info';
logger.info('Starting test run');

chai.use(sinonChai);
chai.use(chaiAsPromised);
global.expect = chai.expect;
global.config = config;
global.uwsws = uwsws;

beforeEach(function setup() {
  this.sandbox = sinon.createSandbox();
  this.stub = this.sandbox.stub.bind(this.sandbox);
  this.spy = this.sandbox.spy.bind(this.sandbox);
});

afterEach(function teardown() {
  this.stub = undefined;
  this.spy = undefined;
  this.sandbox.restore();
});
