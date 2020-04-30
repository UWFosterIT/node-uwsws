require('../setup');

describe('TestScore', () => {
  beforeEach(async () => {
    await uwsws.initialize(config);
  });

  describe('Get by type', () => {
    it('should return many test scores', () => {
      const options = { regid: '9136CCB8F66711D5BE060004AC494FFE' };

      return uwsws.testScore.get(options)
        .then((result) => {
          expect(result.data.TestsTaken.length).to.be.above(3);
        });
    });

    it('should return only SAT test scores', () => {
      const options = {
        regid: '9136CCB8F66711D5BE060004AC494FFE',
        testType: 'SAT',
      };

      return uwsws.testScore.get(options)
        .then((result) => {
          const tests = result.data.TestsTaken;
          expect(tests.length).to.be.above(3);
          tests.forEach((value) => {
            expect(value.TestType.Name).to.have.string('SAT');
          });
        });
    });
  });
});
