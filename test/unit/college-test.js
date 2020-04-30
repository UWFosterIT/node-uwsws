require('../setup');

describe('College', () => {
  beforeEach(async () => {
    await uwsws.initialize(config);
  });

  describe('Search', () => {
    it('should return many colleges for Seattle', () => {
      const options = { name: 'Seattle' };

      return uwsws.college.search(options)
        .then((result) => {
          expect(result.data[0].CampusShortName).to.equal(options.name);
          expect(result.data).length.above(2);
        });
    });

    it('should return only spring of 2008 for Seattle', () => {
      const options = {
        name: 'Seattle',
        quarter: 'spring',
        year: 2008,
      };

      return uwsws.college.search(options)
        .then((result) => {
          result.data.forEach((college) => {
            expect(college.Year).to.equal(options.year);
            expect(college.Quarter).to.equal(options.quarter);
          });
        });
    });

    it('should return future terms of colleges for Seattle', () => {
      const options = { name: 'Seattle' };

      let currentCount = 0;

      return uwsws.college.search(options)
        .then((firstResult) => {
          currentCount = firstResult.data.length;
          options.future = 2;
          return uwsws.college.search(options)
            .then((secondResult) => {
              expect(secondResult.data.length).to.be.above(currentCount);
            });
        });
    });
  });
});
