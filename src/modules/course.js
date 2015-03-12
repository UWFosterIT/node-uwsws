import _       from 'lodash';
import Service from './service';

class Course extends Service {
  constructor(config) {
    super(config);
  }

  get (opt, cb) {
    let query = `${opt.year},${opt.quarter},${opt.curriculum},${opt.course}`;
    this._get(`course/${query}.json`, cb);
    return;
  }

  search (options, cb) {

    let opt = _.defaults(options, {
      year: '',
      quarter: '',
      future: 0,
      curriculum: '',
      course: '',
      startsWith: '',
      contains: '',
      exclude: false,
      size: '',
      start: ''
    });

    let curric    = `curriculum_abbreviation=${opt.curriculum}`;
    let year      = `year=${opt.year}`;
    let quarter   = `quarter=${opt.quarter}`;
    let paging    = `page_size=${opt.size}&page_start=${opt.start}`;
    let course    = `course_number=${opt.course}`;
    let starts    = `course_title_starts=${opt.startsWith}`;
    let contains  = `course_title_contains=${opt.contains}`;
    let excludes  = `exlude_courses_without_sections=${opt.exclude}`;

    let base   = `${curric}&${year}&${quarter}&${course}`;
    let extras = `${starts}&${contains}&${excludes}&${paging}`;
    let query  = `${base}&${extras}`;

    this._get(`course.json?${query}`, cb);
    return;
  }
}

export default Course;
