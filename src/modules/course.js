import qs      from 'query-string';
import Service from './service';

class Course extends Service {
  constructor(config) {
    super(config);
  }

  get(opt, cb) {
    let query = `${opt.year},${opt.quarter},${opt.curriculum},${opt.course}`;
    this._get(`course/${query}.json`, cb);
    return;
  }

  search(opt, cb) {
    let params = {
      course_number:                  opt.course     || '',
      course_title_contains:          opt.contains   || '',
      course_title_starts:            opt.startsWith || '',
      curriculum_abbreviation:        opt.curriculum || '',
      exlude_coures_without_sections: opt.exclude    || '',
      future_terms:                   opt.future     || 0,
      page_size:                      opt.size       || '',
      page_start:                     opt.start      || '',
      quarter:                        opt.quarter    || '',
      year:                           opt.year       || ''
    };

    let query = qs.stringify(params);

    this._get(`course.json?${query}`, cb);
    return;
  }
}

export default Course;
