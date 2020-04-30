const qs = require('query-string');
const Service = require('./service');

class Section extends Service {
  get(opt) {
    const course = `${opt.course}/${opt.section}`;
    const query = `${opt.year},${opt.quarter},${opt.curriculum},${course}`;
    return super.get(`course/${query}.json`);
  }

  search(opt) {
    const params = {
      changed_since_date: opt.changeDate || '',
      course_number: opt.course || '',
      curriculum_abbreviation: opt.curriculum || '',
      delete_flag: opt.deleteFlag || '',
      facility_code: opt.facilityCode || '',
      future_terms: opt.future || 0,
      include_secondaries: opt.include || '',
      page_size: opt.size || '',
      page_start: opt.start || '',
      quarter: opt.quarter || '',
      reg_id: opt.regid || '',
      room_number: opt.roomNumber || '',
      search_by: opt.searchBy || '',
      sln: opt.sln || '',
      transcriptable_course: opt.transcriptable || '',
      year: opt.year || '',
    };

    const query = qs.stringify(params);

    return super.get(`section.json?${query}`);
  }
}

module.exports = Section;
