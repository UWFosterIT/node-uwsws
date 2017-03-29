import qs      from 'query-string';
import Service from './service';

class Course extends Service {
  constructor(config) {
    super(config);
  }

  get(opt) {
    let query = `${opt.year},${opt.quarter},${opt.curriculum},${opt.course}`;

    return this._get(`course/${query}.json`);
  }

  search(opt) {
    let params = {
      changed_since_date:               opt.changeDate || '',
      course_number:                    opt.course || '',
      course_title_contains:            opt.contains || '',
      course_title_starts:              opt.startsWith || '',
      curriculum_abbreviation:          opt.curriculum || '',
      exclude_courses_without_sections: opt.exclude || '',
      future_terms:                     opt.future || 0,
      page_size:                        opt.size || '',
      page_start:                       opt.start || '',
      quarter:                          opt.quarter || '',
      transcriptable_course:            opt.transcriptable || '',
      year:                             opt.year || ''
    };

    let query = qs.stringify(params);

    return this._get(`course.json?${query}`);
  }
}

export default Course;
