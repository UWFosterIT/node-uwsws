import config from '../setup/config';
import uwsws  from '../../src/index';

describe('Course', function() {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Get', () => {
    it('should return some that match the query', (done) => {
      let options = {
        year: 2015,
        quarter: 'winter',
        curriculum: 'cse',
        course: '142'
      };

      uwsws.course.get(options, (err, response, result) => {
        expect(result.CourseNumber).to.equal("142");
        done(err);
      });
    });
  });

  describe('Search',() => {
    it('should return some that match the query', (done) => {
      let options = {
        year: 2015,
        quarter: 'winter',
        curriculum: 'math'
      };

      uwsws.course.search(options, (err, response, result) => {
        expect(result.Courses).to.have.length.above(7);
        done(err);
      });
    });
  });
});
