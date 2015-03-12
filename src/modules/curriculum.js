import _       from 'lodash';
import Service from './service';

class Curriculum extends Service {
  constructor(config) {
    super(config);
  }

  search (options, cb) {

    let opt = _.defaults(options, {
      sort: 'on',
      size: '',
      start: '',
      future: 0,
      college: '',
      dept: '',
      year: '',
      quarter: ''
    });

    let dept    = `department_abbreviation=${opt.dept}`;
    let college = `college_abbreviation=${opt.college}`;
    let year    = `year=${opt.year}`;
    let quarter = `quarter=${opt.quarter}`;
    let paging  = `page_size=${opt.size}&page_start=${opt.start}`;
    let sorting = `sort_by=${opt.sort}&future_terms=${opt.future}`;
    let query   = `${dept}&${college}&${year}&${quarter}&${paging}&${sorting}`;

    this._get(`curriculum.json?${query}`, cb);
    return;
  }
}

export default Curriculum;
