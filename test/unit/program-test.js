import config from '../setup/config';
import uwsws  from '../../src/index';

describe('Program', function() {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Search', () => {
    it('should return some that match the query', (done) => {
      let options = {
        major: 'C SCI'
      };

      uwsws.program.search(options, (err, response, programs) => {
        expect(programs).to.have.length.above(0);
        done(err);
      });
    });
  });

  describe('Get', () => {
    it('should return one', (done) => {
      let options = {
        year: 1970,
        major: 'C SCI',
        quarter: 'autumn'
      };

      uwsws.program.get(options, (err, response, program) => {
        expect(program.ID).to.equal('C SCI,0,1970,autumn');
        done(err);
      });
    });
  });

  describe('All', () => {
    it('should return many of them', (done) => {
      let options = {
        year: 2015,
        quarter: 'autumn',
        major: 'tmmba'
      };

      uwsws.program.all(options, (err, response, programs) => {
        expect(programs).to.have.length.above(0);
        done(err);
      });
    });
  });
});
