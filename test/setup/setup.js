import path   from 'path';
import {back} from 'nock';

module.exports = function() {
  global.expect = global.chai.expect;

  before(function() {
    back.fixtures = path.join(process.cwd(), process.env.FIXTURES);
  });

  beforeEach(function() {
    this.sandbox = global.sinon.sandbox.create();
    global.stub = this.sandbox.stub.bind(this.sandbox);
    global.spy  = this.sandbox.spy.bind(this.sandbox);
  });

  afterEach(function() {
    delete global.stub;
    delete global.spy;
    this.sandbox.restore();
  });
};
