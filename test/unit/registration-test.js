import '../setup/';
import uwsws  from '../../src/index';

describe('Registration', function() {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Search by person',() => {
    it('should return many', (done) => {
      let options = {
        regid: '9136CCB8F66711D5BE060004AC494FFE'
      };

      uwsws.registration.search(options, (err, response, result) => {
        expect(result.Registrations).to.have.length.above(20);
        done(err);
      });
    });
  });
});
