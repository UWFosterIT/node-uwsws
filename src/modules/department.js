import qs      from 'query-string';
import Service from './service';

class Department extends Service {
  constructor(config) {
    super(config);
  }

  search (opt, cb) {
    let query = qs.stringify({
      college_abbreviation: opt.abrev || '',
      sort_by:              opt.sort  || ''
    });

    this._get(`department.json?${query}`, (err, res, body) => {
      cb(err, res, (err ? body : body.Departments));
    });
    return;
  }
}

export default Department;
