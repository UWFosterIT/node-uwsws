require('../setup/');

describe('Course', function () {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Get', () => {
    it('should return some that match the query', () => {
      let options = {
        course:     '142',
        curriculum: 'cse',
        quarter:    'winter',
        year:       2015
      };

      return uwsws.course.get(options)
        .then((result) => {
          expect(result.data.CourseNumber).to.equal('142');
        });
    });
  });

  describe('Search', () => {
    it('should return some that match the query', () => {
      let options = {
        curriculum: 'math',
        quarter:    'winter',
        year:       2015
      };

      return uwsws.course.search(options)
        .then((result) => {
          expect(result.data.Courses).to.have.length.above(7);
        });
    });
  });
});
