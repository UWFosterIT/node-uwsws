require('../setup');
const moment = require('moment');

describe('Term', () => {
  const keys = ['Year', 'NextTerm', 'Quarter'];

  beforeEach(async () => {
    await uwsws.initialize(config);
  });

  describe('Current', () => {
    it('should return one when it is known to exist', () => uwsws.term.current().then((result) => {
      expect(result.data).to.contain.all.keys(keys);
    }));
  });

  describe('Next', () => {
    it('should return one when it is known to exist', () => uwsws.term.next().then((result) => {
      expect(result.data).to.contain.all.keys(keys);
    }));
  });

  describe('Previous', () => {
    it('should return one when it is known to exist', () => uwsws.term.previous().then((result) => {
      expect(result.data).to.contain.all.keys(keys);
    }));
  });

  describe('Search', () => {
    it('should return matching quarter and year', () => {
      const options = {
        quarter: 'autumn',
        year: moment().year(),
      };
      return uwsws.term.search(options).then((result) => {
        expect(result.data).to.contain.all.keys(keys);
      });
    });
  });

  describe('Current and Next n', () => {
    it('should return n + 1 terms from current inclusive', () => {
      const options = { numberOfTerms: 2 };
      return uwsws.term.currentAndNext(options).then((result) => {
        expect(result.data.length).to.equal(3);
      });
    });
  });
});
