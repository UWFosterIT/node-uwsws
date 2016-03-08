import '../setup/';

describe('College', function() {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('All', () => {
    it('should return many colleges', (done) => {
      let options = {
        name: 'Seattle'
      };

      uwsws.college.search(options, (err, response, data) => {
        expect(data[0].CampusShortName).to.equal(options.name);
        expect(data).length.above(2);
        done(err);
      });
    });
  });
});
