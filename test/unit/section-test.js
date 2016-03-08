import '../setup/';

describe('Section', function() {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Get', () => {
    it('should return one that matches the query', (done) => {
      let options = {
        year: 2015,
        quarter: 'winter',
        curriculum: 'cse',
        course: '142',
        section: 'A'
      };

      uwsws.section.get(options, (err, response, result) => {
        expect(result.SectionID).to.equal("A");
        done(err);
      });
    });
  });

  describe('Search',() => {
    it('should return many that match the query', (done) => {
      let options = {
        year: 2015,
        quarter: 'winter',
        curriculum: 'math'
      };

      uwsws.section.search(options, (err, response, result) => {
        expect(result.Sections).to.have.length.above(200);
        done(err);
      });
    });
  });
});
