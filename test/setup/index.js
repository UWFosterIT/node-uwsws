import config from './config';
import uwsws  from '../../lib/node/index';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
global.expect = chai.expect;
global.config = config;
global.uwsws = uwsws;

beforeEach(function() {
  this.sandbox = sinon.sandbox.create();
  this.stub = this.sandbox.stub.bind(this.sandbox);
  this.spy  = this.sandbox.spy.bind(this.sandbox);
});

afterEach(function() {
  this.stub = undefined;
  this.spy = undefined;
  this.sandbox.restore();
});
