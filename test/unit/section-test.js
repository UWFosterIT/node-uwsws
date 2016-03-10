import '../setup/';

describe('Section', function () {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Get', () => {
    it('should return one that matches the query', (done) => {
      let options = {
        course:     '142',
        curriculum: 'cse',
        quarter:    'winter',
        section:    'A',
        year:       2015
      };

      uwsws.section.get(options, (err, response, result) => {
        expect(result.SectionID).to.equal('A');
        done(err);
      });
    });
  });

  describe('Search', () => {
    it('should return many that match the query', (done) => {
      let options = {
        curriculum: 'math',
        quarter:    'winter',
        year:       2015
      };

      uwsws.section.search(options, (err, response, result) => {
        expect(result.Sections).to.have.length.above(200);
        done(err);
      });
    });
  });
});
