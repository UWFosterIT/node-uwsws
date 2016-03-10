import '../setup/';

describe('Curriculum', function () {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Search by dept', () => {
    it('should return some that match the query', (done) => {
      let options = {
        dept:    'cse',
        quarter: 'winter',
        year:    2015
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
        college: 'b a',
        quarter: 'winter',
        year:    2015
      };

      uwsws.curriculum.search(options, (err, response, result) => {
        expect(result.Curricula).to.have.length.above(4);
        done(err);
      });
    });
  });
});
