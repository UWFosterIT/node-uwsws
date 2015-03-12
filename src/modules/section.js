import _       from 'lodash';
import qs      from 'query-string';
import Service from './service';

class Section extends Service {
  constructor(config) {
    super(config);
  }

  get (opt, cb) {
    let course = `${opt.course}/${opt.section}`;
    let query  = `${opt.year},${opt.quarter},${opt.curriculum},${course}`;
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
      deleteFlag: '',
      regid: '',
      searchBy: '',
      include: false,
      size: '',
      start: ''
    });

    let params = {
      year:                    opt.year,
      quarter:                 opt.quarter,
      course_number:           opt.course,
      reg_id:                  opt.regid,
      curriculum_abbreviation: opt.curriculum,
      page_size:               opt.size,
      page_start:              opt.start,
      search_by:               opt.searchBy,
      include_secondaries:     opt.include,
      delete_flag:             opt.deleteFlag
    };

    let query = qs.stringify(params);

    this._get(`section.json?${query}`, cb);
    return;
  }
}

export default Section;
