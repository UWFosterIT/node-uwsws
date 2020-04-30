const qs = require('query-string');
const Service = require('./service');

class Department extends Service {
  search(opt) {
    const query = qs.stringify({
      college_abbreviation: opt.abrev || '',
      future_terms: opt.future || 0,
      quarter: opt.quarter || '',
      sort_by: opt.sort || '',
      year: opt.year || '',
    });

    return super.get(`department.json?${query}`)
      .then((result) => {
        const { Departments: data } = result.data;
        return { data };
      });
  }
}

module.exports = Department;
