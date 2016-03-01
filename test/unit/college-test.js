import '../setup/';
import uwsws  from '../../src/index';

describe('College', function() {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('All', () => {
    it('should return the selected college', (done) => {
      let name = 'Bothell';
      uwsws.college.search(name, (err, response, data) => {
        expect(data.CampusShortName).to.equal(name);
        done(err);
      });
    });
  });
});
