require('../setup/');

describe('Initializing the module with bad config info', () => {
  it('should error when given missing cert or key', () => {
    let path = __dirname.replace('/unit', '/utils/');
    let certFile = `${path}dummy.crt`;

    let invalid = {
      both: {
        certInfo: {
          file: {
            cert: 'sup',
            key:  'nope'
          }
        }
      },
      cert: {
        certInfo: {
          file: {
            cert: '',
            key:  'sup'
          }
        }
      },
      key: {
        certInfo: {
          file: {
            cert: 'nope',
            key:  ''
          }
        }
      },
      nothing: {
        certInfo: {
          file: {
            cert: '',
            key:  ''
          }
        }
      },
      withCert: {
        certInfo: {
          cert: certFile,
          key:  'sup'
        }
      },
    };

    return Promise.all([
      expect(uwsws.initialize(invalid.key)).to.be.rejected,
      expect(uwsws.initialize(invalid.cert)).to.be.rejected,
      expect(uwsws.initialize(invalid.nothing)).to.be.rejected,
      expect(uwsws.initialize(invalid.withCert)).to.be.rejected,
      expect(uwsws.initialize(invalid.both)).to.be.rejected
    ]);
  });
});

describe('Initializing the module with dummy certs', () => {
  it('should not error', async () => {
    let path = __dirname.replace('/unit', '/utils/');
    let valid = {
      certInfo: {
        file: {
          cert: `${path}/dummy.crt`,
          key:  `${path}/dummy.key`
        }
      }
    };

    return expect(uwsws.initialize(valid)).to.not.be.rejected.then((result) => {
      expect(result.term.config.auth.cert).to.not.be.undefined;
      expect(result.term.config.auth.key).to.not.be.undefined;
    });
  });
});
