import '../setup/';

describe('College', function () {
  this.timeout(7000);

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Search', () => {
    it('should return many colleges for Seattle', () => {
      let options = {
        name: 'Seattle'
      };

      return uwsws.college.search(options)
        .then((result) => {
          expect(result.college[0].CampusShortName).to.equal(options.name);
          expect(result.college).length.above(2);
        });
    });

    it('should return only spring of 2008 for Seattle', () => {
      let options = {
        name:    'Seattle',
        quarter: 'spring',
        year:    2008
      };

      return uwsws.college.search(options)
        .then((result) => {
          for (var college of result.college) {
            expect(college.Year).to.equal(options.year);
            expect(college.Quarter).to.equal(options.quarter);
          }
        });
    });

    it('should return future terms of colleges for Seattle', () => {
      let options = {
        name: 'Seattle'
      };

      let currentCount = 0;
      uwsws.college.search(options)
        .then((result) => {
          currentCount = result.college.length;
          options.future = 2;
          return uwsws.college.search(options)
            .then((result) => {
              expect(result.college.length).to.be.above(currentCount);
            });
        });
    });
  });
});
