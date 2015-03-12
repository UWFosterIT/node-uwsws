import {back} from 'nock';
import config from '../setup/config';
import uwsws  from '../../src/index';

describe('College', function() {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('All', () => {
    it('should return the selected college', (done) => {
      back('college.json', (nockDone) => {
        let name = 'Bothell';
        uwsws.college.search(name, (err, response, data) => {
          nockDone();
          expect(data.CampusShortName).to.equal(name);
          done();
        });
      });
    });
  });
});
