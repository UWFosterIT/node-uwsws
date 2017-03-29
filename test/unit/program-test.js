/* global uwsws, config, expect  */
import '../setup/';

describe('Program', function () {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Search', () => {
    it('should return some that match the query', () => {
      let options = {major: 'C SCI'};

      return uwsws.program.search(options)
        .then((result) => {
          expect(result.data).to.have.length.above(0);
        });
    });
  });

  describe('Get', () => {
    it('should return one', () => {
      let options = {
        major:   'C SCI',
        quarter: 'autumn',
        year:    1970
      };

      return uwsws.program.get(options)
        .then((result) => {
          expect(result.data.ID).to.equal('C SCI,0,1970,autumn');
        });
    });
  });

  describe('All', () => {
    it('should return many of them', () => {
      let options = {
        major:   'tmmba',
        quarter: 'autumn',
        year:    2015
      };

      return uwsws.program.all(options)
        .then((result) => {
          expect(result.data).to.have.length.above(0);
        });
    });
  });
});
