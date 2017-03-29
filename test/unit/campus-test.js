/* global uwsws, config, expect  */
import '../setup/';

describe('Campus', function () {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('All', () => {
    it('should return each campus', () => {
      return uwsws.campus.all()
      .then((result) => {
        expect(result.data.length).to.be.above(2);
      });
    });
  });
});
