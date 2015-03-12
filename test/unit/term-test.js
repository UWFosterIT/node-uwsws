import moment from 'moment';
import {back} from 'nock';
import config from '../setup/config';
import uwsws  from '../../src/index';

describe('Term', function() {

  var keys = ['Year', 'NextTerm', 'Quarter'];

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Current', () => {
    it('should return one when it is known to exist', (done) => {
      back('term-current.json', (nockDone) => {
        uwsws.term.current( (err, response, body) => {
          nockDone();
          expect(body).to.contain.all.keys(keys);
          done();
        });
      });
    });
  });

  describe('Next', function() {
    it('should return one when it is known to exist', (done) => {
      back('term-next.json', (nockDone) => {
        uwsws.term.next( (err, response, body) => {
          nockDone();
          expect(body).to.contain.all.keys(keys);
          done();
        });
      });
    });
  });

  describe('Previous', () => {
    it('should return one when it is known to exist', (done) => {
      back('term-prev.json', (nockDone) => {
        uwsws.term.previous( (err, response, body) => {
          nockDone();
          expect(body).to.contain.all.keys(keys);
          done();
        });
      });
    });
  });

  describe('Search', () => {
    it('should return matching quarter and year', (done) => {
      back('term-search.json', function (nockDone) {
        var options = {year: moment().year(), quarter: 'autumn'};
        uwsws.term.search(options, (err, response, body) => {
          nockDone();
          expect(body).to.contain.all.keys(keys);
          done();
        });
      });
    });
  });
});
