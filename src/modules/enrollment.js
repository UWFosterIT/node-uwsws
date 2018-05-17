let qs      = require('query-string');
let Service = require('./service');

class Enrollment extends Service {
  constructor(config) {
    super(config);
  }

  get(opt) {
    let verbose = opt.verbose || '';
    let query = `${opt.year},${opt.quarter},${opt.regid}`;

    return this._get(`enrollment/${query}.json?verbose=${verbose}`);
  }

  search(opt) {
    let params = {
      changed_since_date:    opt.changeDate || '',
      reg_id:                opt.regid || '',
      transcriptable_course: opt.transcriptable || '',
      verbose:               opt.verbose || ''
    };

    let query = qs.stringify(params);

    return this._get(`enrollment.json?${query}`);
  }
}

module.exports = Enrollment;
