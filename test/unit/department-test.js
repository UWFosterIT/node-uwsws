import '../setup/';

describe('Department', function () {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Search', () => {
    it('should return some', () => {
      let options = {
        abrev: 'engr'
      };

      return uwsws.department.search(options)
        .then((result) => {
          expect(result.department).to.have.length.above(5);
        });
    });

    it('for a specific year and quarter should return some', () => {
      let options = {
        abrev:   'engr',
        quarter: 'winter',
        year:    2015
      };

      return uwsws.department.search(options)
        .then((result) => {
          expect(result.department.length).to.equal(10);
        });
    });
  });

});
