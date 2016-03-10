import qs      from 'query-string';
import Service from './service';

class Enrollment extends Service {
  constructor(config) {
    super(config);
  }

  get(opt, cb) {
    let verbose = opt.verbose || '';
    let query   = `${opt.year},${opt.quarter},${opt.regid}`;

    this._get(`enrollment/${query}.json?verbose=${verbose}`, cb);
    return;
  }

  search(opt, cb) {
    let params = {
      changed_since_date:    opt.changeDate     || '',
      reg_id:                opt.regid          || '',
      transcriptable_course: opt.transcriptable || '',
      verbose:               opt.verbose        || ''
    };

    let query = qs.stringify(params);

    this._get(`enrollment.json?${query}`, cb);
    return;
  }
}

export default Enrollment;
