let qs      = require('query-string');
let Service = require('./service');

class Curriculum extends Service {
  constructor(config) {
    super(config);
  }

  search(opt) {

    let params = {
      college_abbreviation:    opt.college || '',
      department_abbreviation: opt.dept || '',
      future_terms:            opt.future || 0,
      quarter:                 opt.quarter || '',
      year:                    opt.year || ''
    };

    let query = qs.stringify(params);

    return this._get(`curriculum.json?${query}`);
  }
}

module.exports = Curriculum;
