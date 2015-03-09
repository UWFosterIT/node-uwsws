import moment     from 'moment';
import path       from 'path';
import {back}     from 'nock';
import uwsws      from '../../src/index';

describe('Term', function() {

  before(() => {
    back.fixtures = path.join(process.cwd(), process.env.FIXTURES);
  });

  this.timeout(3000);
  var keys = ['Year', 'NextTerm', 'Quarter'];

  beforeEach(() => {

    let config = {
      baseUrl: 'https://ws.admin.washington.edu/student/v5/',
      cert: '/home/marc/.keys/milesm.bschool.pem',
      key: '/home/marc/.keys/ItsAllGood.key'
    };

    uwsws.initialize(config);
  });

  describe('Current', () => {
    it('should return one when it is known to exist', (done) => {
      back('term-current.json', function (nockDone) {
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
      back('term-next.json', function (nockDone) {
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
      back('term-prev.json', function (nockDone) {
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
