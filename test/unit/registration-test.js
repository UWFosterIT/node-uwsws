import {back} from 'nock';
import config from '../setup/config';
import uwsws  from '../../src/index';

describe('Registration', function() {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Search by person',() => {
    it('should return many', (done) => {
      back('enrollment-search-person.json', (nockDone) => {

        let options = {
          regid: '9136CCB8F66711D5BE060004AC494FFE'
        };

        uwsws.registration.search(options, (err, response, result) => {
          nockDone();
          expect(result.Registrations).to.have.length.above(20);
          done(err);
        });
      });
    });
  });
});
