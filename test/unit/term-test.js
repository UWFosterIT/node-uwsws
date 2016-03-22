import '../setup/';
import moment from 'moment';

describe('Term', function () {

  var keys = ['Year', 'NextTerm', 'Quarter'];

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Current', () => {
    it('should return one when it is known to exist', () => {
      return uwsws.term.current().then((result) => {
        expect(result.data).to.contain.all.keys(keys);
      });
    });
  });

  describe('Next', function () {
    it('should return one when it is known to exist', () => {
      return uwsws.term.next().then((result) => {
        expect(result.data).to.contain.all.keys(keys);
      });
    });
  });

  describe('Previous', () => {
    it('should return one when it is known to exist', () => {
      return uwsws.term.previous().then((result)  => {
        expect(result.data).to.contain.all.keys(keys);
      });
    });
  });

  describe('Search', () => {
    it('should return matching quarter and year', () => {
      var options = {year: moment().year(), quarter: 'autumn'};
      return uwsws.term.search(options).then((result) => {
        expect(result.data).to.contain.all.keys(keys);
      });
    });
  });
});
