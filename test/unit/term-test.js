import uwsws from '../../src/index';

describe('Term', () => {
  describe('Current', () => {
    it('should return one when it is known to exist', () => {
      expect(uwsws.term.current).to.exist;
    });
  });

  describe('Next', () => {
    it('should return one when it is known to exist', () => {
      expect(uwsws.term.next).to.exist;
    });
  });

  describe('Previous', () => {
    it('should return one when it is known to exist', () => {
      expect(uwsws.term.previous).to.exist;
    });
  });

  describe('Search', () => {
    it('should return matching quarter and year', () => {
      expect(uwsws.term(2015, "autumn")).to.exist;
    });
  });
});
