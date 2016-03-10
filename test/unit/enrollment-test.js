import '../setup/';

describe('Enrollment', function () {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  let dummy = '9136CCB8F66711D5BE060004AC494FFE';

  describe('Get', () => {
    it('should return some enrollments', (done) => {
      let options = {
        quarter: 'autumn',
        regid:   dummy,
        year:    1996
      };

      uwsws.enrollment.get(options, (err, response, person) => {
        expect(person.Registrations).to.have.length.above(2);
        done(err);
      });
    });
  });

  describe('Search', () => {
    it('should return some that match the query', (done) => {
      let options = {
        regid: dummy
      };

      uwsws.enrollment.search(options, (err, response, result) => {
        expect(result.Enrollments).to.have.length.above(20);
        done(err);
      });
    });
  });
});
