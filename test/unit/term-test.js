import moment from 'moment';
import uwsws from '../../src/index';

describe('Term', function() {

  this.timeout(3000);
  var keys = ['Year', 'NextTerm', 'Quarter'];

  beforeEach(function() {

    let config = {
      baseUrl: 'https://ws.admin.washington.edu/student/v5/',
      cert: '/home/marc/.keys/milesm.bschool.pem',
      key: '/home/marc/.keys/ItsAllGood.key'
    };

    uwsws.initialize(config);
  });

  describe('Current', () => {
    it('should return one when it is known to exist', (done) => {
      uwsws.term.current( (err, response, body) => {
        expect(body).to.contain.all.keys(keys);
        done();
      });
    });
  });

  describe('Next', function() {
    it('should return one when it is known to exist', (done) => {
      uwsws.term.next( (err, response, body) => {
        expect(body).to.contain.all.keys(keys);
        done();
      });
    });
  });

  describe('Previous', () => {
    it('should return one when it is known to exist', (done) => {
      uwsws.term.previous( (err, response, body) => {
        expect(body).to.contain.all.keys(keys);
        done();
      });
    });
  });

  describe('Search', () => {
    it('should return matching quarter and year', (done) => {
      var options = {year: moment().year(), quarter: 'autumn'};
      uwsws.term.search(options, (err, response, body) => {
        expect(body).to.contain.all.keys(keys);
        done();
      });
    });
  });
});
