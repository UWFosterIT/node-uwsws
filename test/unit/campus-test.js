require('../setup');

describe('Campus', () => {
  beforeEach(async () => {
    await uwsws.initialize(config);
  });

  describe('All', () => {
    it('should return each campus', () => uwsws.campus.all()
      .then((result) => {
        expect(result.data.length).to.be.above(2);
      }));
  });
});
