require('../setup');

describe('Person', () => {
  beforeEach(async () => {
    await uwsws.initialize(config);
  });

  describe('Get', () => {
    it('should return ont that matches the query', () => {
      const regid = '9136CCB8F66711D5BE060004AC494FFE';

      return uwsws.person.get(regid)
        .then((result) => {
          expect(result.data.UWNetID).to.equal('javerage');
        });
    });
  });

  describe('Search', () => {
    it('should return some that match the query', () => {
      const options = { netid: 'javerage' };

      return uwsws.person.search(options)
        .then((result) => {
          expect(result.data.Persons).to.have.length.above(0);
          expect(result.data.Persons[0].UWNetID).to.equal('javerage');
        });
    });
  });
});
