require('../setup');

describe('Registration', () => {
  beforeEach(async () => {
    await uwsws.initialize(config);
  });

  describe('Search by person', () => {
    it('should return many', () => {
      const options = { regid: '9136CCB8F66711D5BE060004AC494FFE' };

      return uwsws.registration.search(options)
        .then((result) => {
          expect(result.data.Registrations).to.have.length.above(20);
        });
    });
  });
});
