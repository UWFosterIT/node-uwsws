import '../setup/';

describe('Course', function () {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Get', () => {
    it('should return some that match the query', (done) => {
      let options = {
        course:     '142',
        curriculum: 'cse',
        quarter:    'winter',
        year:       2015
      };

      uwsws.course.get(options, (err, response, result) => {
        expect(result.CourseNumber).to.equal('142');
        done(err);
      });
    });
  });

  describe('Search', () => {
    it('should return some that match the query', (done) => {
      let options = {
        curriculum: 'math',
        quarter:    'winter',
        year:       2015
      };

      uwsws.course.search(options, (err, response, result) => {
        expect(result.Courses).to.have.length.above(7);
        done(err);
      });
    });
  });
});
