import config from '../setup/config';
import uwsws  from '../../src/index';

describe('Campus', function() {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('All', () => {
    it('should return each campus', (done) => {
      console.log('getting campus');
      uwsws.campus.all( (err, response, data) => {
        expect(data.length).to.be.above(2);
        console.log('got campus');
        done(err);
      });
    });
  });
});
