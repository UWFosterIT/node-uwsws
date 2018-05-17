require('../setup/');

describe('Campus', function () {

  beforeEach(async () => {
    await uwsws.initialize(config);
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
