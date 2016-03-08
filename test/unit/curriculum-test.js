import '../setup/';

describe('Curriculum', function() {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Search by dept', () => {
    it('should return some that match the query', (done) => {
      // depending on the options used you can get very large
      // results that you will need to "page" through using...
      // result.Curricula.
      //    "Next": null,
      //    "PageSize": null,
      //    "PageStart": null,
      //    "Previous": null,
      //    "TotalCount": 3

      let options = {
        year: 2015,
        quarter: 'winter',
        dept: 'cse'
      };

      uwsws.curriculum.search(options, (err, response, result) => {
        expect(result.Curricula).to.have.length.above(2);
        done(err);
      });
    });
  });

  describe('search by college', () => {
    it('should return some that match the query', (done) => {
      let options = {
        year: 2015,
        quarter: 'winter',
        college: 'b a'
      };

      uwsws.curriculum.search(options, (err, response, result) => {
        expect(result.Curricula).to.have.length.above(4);
        done(err);
      });
    });
  });
});
