import {back} from 'nock';
import config from '../setup/config';
import uwsws  from '../../src/index';

describe('Campus', function() {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('All', () => {
    it('should return each campus', (done) => {
      back('campus.json', function (nockDone) {
        uwsws.campus.all( (err, response, data) => {
          nockDone();
          expect(data.length).to.be.above(2);
          done();
        });
      });
    });
  });
});
