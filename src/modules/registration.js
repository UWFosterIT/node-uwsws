const qs = require('query-string');
const Service = require('./service');

class Registration extends Service {
  // forcing verbose and just the one endpoint per their notes at the wiki
  // https://wiki.cac.washington.edu/display/SWS/Registration+Search+Resource+v5
  search(opt) {
    const params = {
      changed_since_date: opt.changeDate || '',
      course_number: opt.course || '',
      curriculum_abbreviation: opt.curriculum || '',
      instructor_reg_id: opt.instructor || '',
      is_active: opt.active || '',
      page_size: opt.size || '',
      page_start: opt.start || '',
      quarter: opt.quarter || '',
      reg_id: opt.regid || '',
      section_id: opt.section || '',
      transcriptable_course: opt.transcriptable || '',
      verbose: true,
      year: opt.year || '',
    };

    const query = qs.stringify(params);

    return super.get(`registration.json?${query}`);
  }
}

module.exports = Registration;
