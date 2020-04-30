const qs = require('query-string');
const Service = require('./service');

class Major extends Service {
  search(opt) {
    const params = {
      campus: opt.campus || '',
      degree_level: opt.degreeLevel || '',
      degree_type: opt.degreeType || '',
      major_abbreviation: opt.majorAbbreviation || '',
      page_size: opt.size || '',
      page_start: opt.start || '',
      pathway: opt.pathway || '',
      quarter: opt.quarter || '',
      year: opt.year || '',
    };

    const query = qs.stringify(params);

    return super.get(`majorstudents.json?${query}`);
  }
}

module.exports = Major;
