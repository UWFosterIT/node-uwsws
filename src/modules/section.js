import qs      from 'query-string';
import Service from './service';

class Section extends Service {
  constructor(config) {
    super(config);
  }

  get(opt) {
    let course = `${opt.course}/${opt.section}`;
    let query = `${opt.year},${opt.quarter},${opt.curriculum},${course}`;
    return this._get(`course/${query}.json`);
  }

  search(opt) {
    let params = {
      changed_since_date:      opt.changeDate || '',
      course_number:           opt.course || '',
      curriculum_abbreviation: opt.curriculum || '',
      delete_flag:             opt.deleteFlag || '',
      facility_code:           opt.facilityCode || '',
      future_terms:            opt.future || 0,
      include_secondaries:     opt.include || '',
      page_size:               opt.size || '',
      page_start:              opt.start || '',
      quarter:                 opt.quarter || '',
      reg_id:                  opt.regid || '',
      room_number:             opt.roomNumber || '',
      search_by:               opt.searchBy || '',
      sln:                     opt.sln || '',
      transcriptable_course:   opt.transcriptable || '',
      year:                    opt.year || ''
    };

    let query = qs.stringify(params);

    return this._get(`section.json?${query}`);
  }
}

export default Section;
