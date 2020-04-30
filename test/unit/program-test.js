require('../setup');

describe('Program', () => {
  beforeEach(async () => {
    await uwsws.initialize(config);
  });

  describe('Search', () => {
    it('should return some that match the query', () => {
      const options = {
        major: 'C SCI',
        quarter: 'spring',
        year: '2018',
      };

      return uwsws.program.search(options)
        .then((result) => {
          expect(result.data).to.have.length.above(0);
        });
    });
  });

  describe('Get', () => {
    it('should return one', () => {
      const options = {
        major: 'C SCI',
        quarter: 'spring',
        year: '2018',
      };

      return uwsws.program.get(options)
        .then((result) => {
          expect(result.data.Href).to.equal('/student/v5/Program/C%20SCI,00,2018,spring.json');
        });
    });
  });

  describe('All', () => {
    it('should return many of them', () => {
      const options = {
        major: 'tmmba',
        quarter: 'spring',
        year: '2015',
      };

      return uwsws.program.all(options)
        .then((result) => {
          expect(result.data).to.have.length.above(0);
        });
    });
  });
});
