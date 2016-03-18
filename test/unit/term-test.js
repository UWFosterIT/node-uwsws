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
        console.log('result',result);
        expect(result.term).to.contain.all.keys(keys);
      })
    });
  });

/*  describe('Next', function () {
    it('should return one when it is known to exist', (done) => {
      uwsws.term.next((err, response, body) => {
        expect(body).to.contain.all.keys(keys);
        done(err);
      });
    });
  });

  describe('Previous', () => {
    it('should return one when it is known to exist', (done) => {
      uwsws.term.previous((err, response, body) => {
        expect(body).to.contain.all.keys(keys);
        done(err);
      });
    });
  });

  describe('Search', () => {
    it('should return matching quarter and year', (done) => {
      var options = {year: moment().year(), quarter: 'autumn'};
      uwsws.term.search(options, (err, response, body) => {
        expect(body).to.contain.all.keys(keys);
        done(err);
      });
    });
  });*/
});
