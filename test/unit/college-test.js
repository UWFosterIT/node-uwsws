import '../setup/';

describe('College', function () {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Search', () => {
    it('should return many colleges for Seattle', (done) => {
      let options = {
        name: 'Seattle'
      };

      uwsws.college.search(options, (err, response, data) => {
        expect(data[0].CampusShortName).to.equal(options.name);
        expect(data).length.above(2);
        done(err);
      });
    });

    it('should return only spring of 2008 for Seattle', (done) => {
      let options = {
        name:    'Seattle',
        quarter: 'spring',
        year:    2008
      };

      uwsws.college.search(options, (err, response, data) => {
        for (var college of data) {
          expect(college.Year).to.equal(options.year);
          expect(college.Quarter).to.equal(options.quarter);
        }
        done(err);
      });
    });

    it('should return future terms of colleges for Seattle', (done) => {
      let options = {
        name: 'Seattle',
      };

      let currentCount = 0;
      uwsws.college.search(options, (err, response, data) => {
        currentCount = data.length;
        options.future = 2;
        uwsws.college.search(options, (err, response, data) => {
          expect(data.length).to.be.above(currentCount);
          done(err);
        });
      });
    });
  });
});
