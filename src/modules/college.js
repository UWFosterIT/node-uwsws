const qs = require('query-string');
const Service = require('./service');

class College extends Service {
  search(opt) {
    const params = {
      campus_short_name: opt.name || '',
      future_terms: opt.future || 0,
      quarter: opt.quarter || '',
      year: opt.year || '',
    };

    const query = qs.stringify(params);

    return super.get(`college.json?${query}`)
      .then((result) => {
        const { Colleges: data } = result.data;
        return { data };
      });
  }
}

module.exports = College;
