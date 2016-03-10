import '../setup/';

describe('Department', function () {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Search', () => {
    it('should return some', (done) => {
      let options = {
        abrev: 'engr'
      };

      uwsws.department.search(options, (err, response, departments) => {
        expect(departments).to.have.length.above(5);
        done(err);
      });
    });

    it('for a specific year and quarter should return some', (done) => {
      let options = {
        abrev:   'engr',
        quarter: 'winter',
        year:    2015
      };

      uwsws.department.search(options, (err, response, departments) => {
        expect(departments.length).to.equal(10);
        done(err);
      });
    });
  });

});
