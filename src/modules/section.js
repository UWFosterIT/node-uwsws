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
      future_terms:            opt.future || 0,
      include_secondaries:     opt.include || '',
      page_size:               opt.size || '',
      page_start:              opt.start || '',
      quarter:                 opt.quarter || '',
      reg_id:                  opt.regid || '',
      search_by:               opt.searchBy || '',
      transcriptable_course:   opt.transcriptable || '',
      year:                    opt.year || ''
    };

    let query = qs.stringify(params);

    return this._get(`section.json?${query}`);
  }
}

export default Section;
