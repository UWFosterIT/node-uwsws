import config from './config';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import bunyan from 'bunyan';
import prettyStream from 'bunyan-prettystream';

chai.use(sinonChai);
global.expect = chai.expect;
global.config = config;


let prettyStdOut = new prettyStream();
prettyStdOut.pipe(process.stdout);
config.log = bunyan.createLogger({
  name: "uwsws",
  streams: [{
    level: 'debug',
    type: 'raw',
    stream: prettyStdOut
  }]
});

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
