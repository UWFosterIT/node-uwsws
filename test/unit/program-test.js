import {back} from 'nock';
import config from '../setup/config';
import uwsws  from '../../src/index';

describe('Program', function() {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Search', () => {
    it('should return some that match the query', (done) => {
      back('program-search.json', function (nockDone) {
        let options = {
          major: 'C SCI'
        };

        uwsws.program.search(options, (err, response, programs) => {
          nockDone();
          expect(programs).to.have.length.above(0);
          done();
        });
      });
    });
  });

  describe('Get', () => {
    it('should return one', (done) => {
      back('program-get.json', function (nockDone) {
        let options = {
          year: 1970,
          major: 'C SCI',
          quarter: 'autumn'
        };

        uwsws.program.get(options, (err, response, program) => {
          nockDone();
          expect(program.ID).to.equal('C SCI,0,1970,autumn');
          done();
        });
      });
    });
  });

  describe('All', () => {
    it('should return many of them', (done) => {
      back('program-all.json', function (nockDone) {
        uwsws.program.all((err, response, programs) => {
          nockDone();
          expect(programs).to.have.length.above(15);
          done();
        });
      });
    });
  });
});
