const qs = require('query-string');
const Service = require('./service');

class Course extends Service {
  get(opt) {
    const query = `${opt.year},${opt.quarter},${opt.curriculum},${opt.course}`;

    return super.get(`course/${query}.json`);
  }

  search(opt) {
    const params = {
      changed_since_date: opt.changeDate || '',
      course_number: opt.course || '',
      course_title_contains: opt.contains || '',
      course_title_starts: opt.startsWith || '',
      curriculum_abbreviation: opt.curriculum || '',
      exclude_courses_without_sections: opt.exclude || '',
      future_terms: opt.future || 0,
      page_size: opt.size || '',
      page_start: opt.start || '',
      quarter: opt.quarter || '',
      transcriptable_course: opt.transcriptable || '',
      year: opt.year || '',
    };

    const query = qs.stringify(params);

    return super.get(`course.json?${query}`);
  }
}

module.exports = Course;
