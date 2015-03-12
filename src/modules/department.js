import Service from './service';

class Department extends Service {
  constructor(config) {
    super(config);
  }

  search (options, cb) {
    let query = `college_abbreviation=${options.abrev}&sort_by={options.sort}`;
    this._get(`department.json?${query}`, (err, res, body) => {
      cb(err, res, (err ? body : body.Departments));
    });
    return;
  }
}

export default Department;
