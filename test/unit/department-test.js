require('../setup');

describe('Department', () => {
  beforeEach(async () => {
    await uwsws.initialize(config);
  });

  describe('Search', () => {
    it('should return some', () => {
      const options = { abrev: 'engr' };

      return uwsws.department.search(options)
        .then((result) => {
          expect(result.data).to.have.length.above(5);
        });
    });

    it('for a specific year and quarter should return some', () => {
      const options = {
        abrev: 'engr',
        quarter: 'winter',
        year: 2015,
      };

      return uwsws.department.search(options)
        .then((result) => {
          expect(result.data.length).to.equal(10);
        });
    });
  });
});
