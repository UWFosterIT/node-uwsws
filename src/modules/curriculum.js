import qs      from 'query-string';
import Service from './service';

class Curriculum extends Service {
  constructor(config) {
    super(config);
  }

  search(opt, cb) {

    let params = {
      college_abbreviation:    opt.college || '',
      course_number:           opt.course  || '',
      department_abbreviation: opt.dept    || '',
      future_terms:            opt.future  || 0,
      page_size:               opt.size    || '',
      page_start:              opt.start   || '',
      quarter:                 opt.quarter || '',
      sort_by:                 opt.sort    || '',
      year:                    opt.year    || '',
    };

    let query = qs.stringify(params);

    this._get(`curriculum.json?${query}`, cb);
    return;
  }
}

export default Curriculum;
