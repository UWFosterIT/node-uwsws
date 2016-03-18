import qs      from 'query-string';
import Service from './service';

class Enrollment extends Service {
  constructor(config) {
    super(config);
  }

  get(opt) {
    let verbose = opt.verbose || '';
    let query = `${opt.year},${opt.quarter},${opt.regid}`;

    return this._get(`enrollment/${query}.json?verbose=${verbose}`)
      .then((result) => {
        result.enrollment = result.data;
        delete result.data;
        return result;
      });
  }

  search(opt) {
    let params = {
      changed_since_date:    opt.changeDate || '',
      reg_id:                opt.regid || '',
      transcriptable_course: opt.transcriptable || '',
      verbose:               opt.verbose || ''
    };

    let query = qs.stringify(params);

    return this._get(`enrollment.json?${query}`)
      .then((result) => {
        result.enrollment = result.data;
        delete result.data;
        return result;
      });
  }
}

export default Enrollment;
