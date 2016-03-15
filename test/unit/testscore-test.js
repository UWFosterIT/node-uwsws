import '../setup/';

describe('TestScore', function () {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Get by type', () => {
    it('should return many test scores', (done) => {
      let options = {
        regid: '9136CCB8F66711D5BE060004AC494FFE'
      };

      uwsws.testScore.get(options, (err, response, result) => {
        expect(result.TestsTaken.length).to.be.above(3);
        done(err);
      });
    });

    it('should return only SAT test scores', (done) => {
      let options = {
        testType: 'SAT',
        regid:    '9136CCB8F66711D5BE060004AC494FFE'
      };

      uwsws.testScore.get(options, (err, response, result) => {
        let tests = result.TestsTaken;
        expect(tests.length).to.be.above(3);
        for (var value of tests) {
          expect(value.TestType.Name).to.have.string('SAT');
        }
        done(err);
      });
    });
  });
});
