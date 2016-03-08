import qs      from 'query-string';
import Service from './service';

class College extends Service {
  constructor(config) {
    super(config);
  }

  search(opt, cb) {

    let params = {
      campus_short_name: opt.name    || '',
      future_terms:      opt.future  || 0,
      quarter:           opt.quarter || '',
      year:              opt.year    || '',
    };

    let query = qs.stringify(params);

    this._get(`college.json?${query}`, (err, res, body) => {
      cb(err, res, body.Colleges);
    });

    return;
  }
}

export default College;
