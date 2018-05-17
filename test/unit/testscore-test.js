require('../setup/');

describe('TestScore', function () {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Get by type', () => {
    it('should return many test scores', () => {
      let options = {regid: '9136CCB8F66711D5BE060004AC494FFE'};

      return uwsws.testScore.get(options)
        .then((result) => {
          expect(result.data.TestsTaken.length).to.be.above(3);
        });
    });

    it('should return only SAT test scores', () => {
      let options = {
        regid:    '9136CCB8F66711D5BE060004AC494FFE',
        testType: 'SAT',
      };

      return uwsws.testScore.get(options)
        .then((result) => {
          let tests = result.data.TestsTaken;
          expect(tests.length).to.be.above(3);
          for (var value of tests) {
            expect(value.TestType.Name).to.have.string('SAT');
          }
        });
    });
  });
});
