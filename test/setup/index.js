let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let config = require('./config');
let sinon = require('sinon');
let sinonChai = require('sinon-chai');
let uwsws  = require('../../src/index');

chai.use(sinonChai);
chai.use(chaiAsPromised);
global.expect = chai.expect;
global.config = config;
global.uwsws = uwsws;

beforeEach(function () {
  this.sandbox = sinon.createSandbox();
  this.stub = this.sandbox.stub.bind(this.sandbox);
  this.spy  = this.sandbox.spy.bind(this.sandbox);
});

afterEach(function () {
  this.stub = void 0;
  this.spy = void 0;
  this.sandbox.restore();
});
