require('../setup');

describe('Enrollment', () => {
  beforeEach(async () => {
    await uwsws.initialize(config);
  });

  const dummy = '9136CCB8F66711D5BE060004AC494FFE';

  describe('Get', () => {
    it('should return some enrollments', () => {
      const options = {
        quarter: 'autumn',
        regid: dummy,
        year: 1996,
      };

      return uwsws.enrollment.get(options)
        .then((result) => {
          expect(result.data.Registrations).to.have.length.above(2);
        });
    });
  });

  describe('Search', () => {
    it('should return some that match the query', () => {
      const options = { regid: dummy };

      return uwsws.enrollment.search(options)
        .then((result) => {
          expect(result.data.Enrollments).to.have.length.above(20);
        });
    });
  });
});
