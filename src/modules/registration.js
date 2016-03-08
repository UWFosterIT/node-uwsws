import qs      from 'query-string';
import Service from './service';

class Registration extends Service {
  constructor(config) {
    super(config);
  }

  // forcing verbose and just the one endpoint per their notes at the wiki
  // https://wiki.cac.washington.edu/display/SWS/Registration+Search+Resource+v5
  search(opt, cb) {
    let params = {
      course_number:           opt.course     || '',
      curriculum_abbreviation: opt.curriculum || '',
      instructor_reg_id:       opt.instructor || '',
      is_active:               opt.active     || '',
      page_size:               opt.size       || '',
      page_start:              opt.start      || '',
      quarter:                 opt.quarter    || '',
      reg_id:                  opt.regid      || '',
      section_id:              opt.section    || '',
      verbose:                 true,
      year:                    opt.year       || ''
    };

    let query = qs.stringify(params);

    this._get(`registration.json?${query}`, cb);
    return;
  }
}

export default Registration;
