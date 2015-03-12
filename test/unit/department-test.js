import {back} from 'nock';
import config from '../setup/config';
import uwsws  from '../../src/index';

describe('Department', function() {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Search', () => {
    it('should return some', (done) => {
      back('department-search.json', (nockDone) => {
        let options = {abrev: 'engr'};
        uwsws.department.search(options, (err, response, departments) => {
          nockDone();
          expect(departments).to.have.length.above(5);
          done(err);
        });
      });
    });
  });

});
