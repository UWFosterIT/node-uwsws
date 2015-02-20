import uwsws from '../../src/index';

describe('Term', () => {
  let path   = __dirname.replace('/unit', '/utils/');
  let config = {
    baseUrl: 'https://ucswseval1.cac.washington.edu/student/v5/',
    cert: path + 'dummy.crt',
    key: path + 'dummy.key'
  };

  uwsws.initialize(config);

  describe('Current', () => {
    it('should return one when it is known to exist', () => {
      expect(uwsws.term.current()).to.be.true;
    });
  });

  describe('Next', () => {
    it('should return one when it is known to exist', () => {
      expect(uwsws.term.next()).to.be.true;
    });
  });

  describe('Previous', () => {
    it('should return one when it is known to exist', () => {
      expect(uwsws.term.previous()).to.be.true;
    });
  });

  describe('Search', () => {
    it('should return matching quarter and year', () => {
      expect(uwsws.term.search(2015, "autumn")).to.be.true;
    });
  });
});
