let qs      = require('query-string');
let Service = require('./service');

class Department extends Service {
  constructor(config) {
    super(config);
  }

  search(opt) {
    let query = qs.stringify({
      college_abbreviation: opt.abrev || '',
      future_terms:         opt.future || 0,
      quarter:              opt.quarter || '',
      sort_by:              opt.sort || '',
      year:                 opt.year || ''
    });

    return this._get(`department.json?${query}`)
      .then((result) => {
        result.data = result.data.Departments;
        return result;
      });
  }
}

module.exports = Department;
