import qs      from 'query-string';
import Service from './service';

class Section extends Service {
  constructor(config) {
    super(config);
  }

  get(opt, cb) {
    let course = `${opt.course}/${opt.section}`;
    let query  = `${opt.year},${opt.quarter},${opt.curriculum},${course}`;
    this._get(`course/${query}.json`, cb);
    return;
  }

  search(opt, cb) {
    let params = {
      changed_since_date:      opt.changeDate     || '',
      course_number:           opt.course         || '',
      curriculum_abbreviation: opt.curriculum     || '',
      delete_flag:             opt.deleteFlag     || '',
      future_terms:            opt.future         || 0,
      include_secondaries:     opt.include        || '',
      page_size:               opt.size           || '',
      page_start:              opt.start          || '',
      quarter:                 opt.quarter        || '',
      reg_id:                  opt.regid          || '',
      search_by:               opt.searchBy       || '',
      transcriptable_course:   opt.transcriptable || '',
      year:                    opt.year           || ''
    };

    let query = qs.stringify(params);

    this._get(`section.json?${query}`, cb);
    return;
  }
}

export default Section;
