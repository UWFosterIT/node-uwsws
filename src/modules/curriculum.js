const qs = require('query-string');
const Service = require('./service');

class Curriculum extends Service {
  search(opt) {
    const params = {
      college_abbreviation: opt.college || '',
      department_abbreviation: opt.dept || '',
      future_terms: opt.future || 0,
      quarter: opt.quarter || '',
      year: opt.year || '',
    };

    const query = qs.stringify(params);

    return super.get(`curriculum.json?${query}`);
  }
}

module.exports = Curriculum;
