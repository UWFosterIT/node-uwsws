const qs = require('query-string');
const Service = require('./service');

class Enrollment extends Service {
  get(opt) {
    const verbose = opt.verbose || '';
    const query = `${opt.year},${opt.quarter},${opt.regid}`;

    return super.get(`enrollment/${query}.json?verbose=${verbose}`);
  }

  search(opt) {
    const params = {
      changed_since_date: opt.changeDate || '',
      reg_id: opt.regid || '',
      transcriptable_course: opt.transcriptable || '',
      verbose: opt.verbose || '',
    };

    const query = qs.stringify(params);

    return super.get(`enrollment.json?${query}`);
  }
}

module.exports = Enrollment;
