import chai from 'chai';
import config from './config';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import uwsws  from '../../lib/node/index';

chai.use(sinonChai);
global.expect = chai.expect;
global.config = config;
global.uwsws = uwsws;

beforeEach(function () {
  this.sandbox = sinon.sandbox.create();
  this.stub = this.sandbox.stub.bind(this.sandbox);
  this.spy  = this.sandbox.spy.bind(this.sandbox);
});

afterEach(function () {
  this.stub = void 0;
  this.spy = void 0;
  this.sandbox.restore();
});
