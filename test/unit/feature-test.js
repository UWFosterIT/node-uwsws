import '../setup/';
import uwsws from '../../src/index';

describe('Initializing the module', () => {
  it('should error when given missing cert or key', () => {
    let path     = __dirname.replace('/unit', '/utils/');
    let certFile = path + 'dummy.crt';

    let invalid = {
      key:      { key: '', cert: 'nope' },
      cert:     { key: 'sup', cert: '' },
      nothing:  { key: '', cert: '' },
      withCert: { key: 'sup', cert: certFile },
      both:     { key: 'nope', cert: 'sup'}
    };

    expect(function() {uwsws.initialize(invalid.key);} ).to.throw(Error);
    expect(function() {uwsws.initialize(invalid.cert);} ).to.throw(Error);
    expect(function() {uwsws.initialize(invalid.nothing);} ).to.throw(Error);
    expect(function() {uwsws.initialize(invalid.withCert);} ).to.throw(Error);
    expect(function() {uwsws.initialize(invalid.both);} ).to.throw(Error);
  });
});

describe('Initializing the module', () => {
  it('should not error', () => {
    let path = __dirname.replace('/unit', '/utils/');
    let valid = {
      cert: path + 'dummy.crt',
      key: path + 'dummy.key'
    };

    let result = null;
    let service = function() {
      result = uwsws.initialize(valid);
    };

    expect(service).to.not.throw(Error);
    expect(result.cert).to.not.be.null;
    expect(result.key).to.not.be.null;
  });
});
