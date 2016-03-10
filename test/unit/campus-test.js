import '../setup/';

describe('Campus', function () {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('All', () => {
    it('should return each campus', (done) => {
      uwsws.campus.all((err, response, data) => {
        expect(data.length).to.be.above(2);
        done(err);
      });
    });
  });
});
