require('../setup');

describe('Section', () => {
  beforeEach(async () => {
    await uwsws.initialize(config);
  });

  describe('Get', () => {
    it('should return one that matches the query', () => {
      const options = {
        course: '142',
        curriculum: 'cse',
        quarter: 'winter',
        section: 'A',
        year: 2015,
      };

      return uwsws.section.get(options)
        .then((result) => {
          expect(result.data.SectionID).to.equal('A');
        });
    });
  });

  describe('Search', () => {
    it('should return many that match the query', () => {
      const options = {
        curriculum: 'math',
        quarter: 'winter',
        year: 2015,
      };

      return uwsws.section.search(options)
        .then((result) => {
          expect(result.data.Sections).to.have.length.above(200);
        });
    });
  });
});
