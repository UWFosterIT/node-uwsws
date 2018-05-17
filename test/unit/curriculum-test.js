require('../setup/');

describe('Curriculum', function () {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Search by dept', () => {
    it('should return some that match the query', () => {
      let options = {
        dept:    'cse',
        quarter: 'winter',
        year:    2015
      };

      return uwsws.curriculum.search(options)
        .then((result) => {
          expect(result.data.Curricula).to.have.length.above(2);
        });
    });
  });

  describe('search by college', () => {
    it('should return some that match the query', () => {
      let options = {
        college: 'b a',
        quarter: 'winter',
        year:    2015
      };

      return uwsws.curriculum.search(options)
        .then((result) => {
          expect(result.data.Curricula).to.have.length.above(4);
        });
    });
  });
});
