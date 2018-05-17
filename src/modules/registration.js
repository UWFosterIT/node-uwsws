let qs      = require('query-string');
let Service = require('./service');

class Registration extends Service {
  constructor(config) {
    super(config);
  }

  // forcing verbose and just the one endpoint per their notes at the wiki
  // https://wiki.cac.washington.edu/display/SWS/Registration+Search+Resource+v5
  search(opt) {
    let params = {
      changed_since_date:      opt.changeDate     || '',
      course_number:           opt.course         || '',
      curriculum_abbreviation: opt.curriculum     || '',
      instructor_reg_id:       opt.instructor     || '',
      is_active:               opt.active         || '',
      page_size:               opt.size           || '',
      page_start:              opt.start          || '',
      quarter:                 opt.quarter        || '',
      reg_id:                  opt.regid          || '',
      section_id:              opt.section        || '',
      transcriptable_course:   opt.transcriptable || '',
      verbose:                 true,
      year:                    opt.year           || ''
    };

    let query = qs.stringify(params);

    return this._get(`registration.json?${query}`);
  }
}

module.exports = Registration;
