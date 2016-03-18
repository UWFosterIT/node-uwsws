import '../setup/';

describe('Enrollment', function () {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  let dummy = '9136CCB8F66711D5BE060004AC494FFE';

  describe('Get', () => {
    it('should return some enrollments', () => {
      let options = {
        quarter: 'autumn',
        regid:   dummy,
        year:    1996
      };

      return uwsws.enrollment.get(options)
        .then((result) => {
          expect(result.enrollment.Registrations).to.have.length.above(2);
        });
    });
  });

  describe('Search', () => {
    it('should return some that match the query', () => {
      let options = {
        regid: dummy
      };

      return uwsws.enrollment.search(options)
        .then((result) => {
          expect(result.enrollment.Enrollments).to.have.length.above(20);
        });
    });
  });
});
