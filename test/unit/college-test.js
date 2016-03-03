import '../setup/';
import uwsws  from '../../src/index';

describe('College', function() {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('All', () => {
    it('should return many colleges', (done) => {
      let name = 'Seattle';
      uwsws.college.search(name, (err, response, data) => {
        expect(data[0].CampusShortName).to.equal(name);
        expect(data).length.above(2);
        done(err);
      });
    });
  });
});
