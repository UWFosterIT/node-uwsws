const qs = require('query-string');
const Service = require('./service');

class Program extends Service {
  all(opt) {
    const params = {
      first_effective_quarter: opt.quarter || '',
      first_effective_year: opt.year || '',
      major_abbr: opt.major || '',
      pathway: opt.pathway || '',
      quarter: opt.quarter || '',
      year: opt.year || '',
    };

    const query = qs.stringify(params);

    return super.get(`program.json?${query}`)
      .then((result) => {
        const { Programs: data } = result.data;
        return { data };
      });
  }

  get(options) {
    const opt = options;
    opt.pathway = opt.pathway || '00';
    const query = `${opt.major},${opt.pathway},${opt.year},${opt.quarter}`;

    return super.get(`program/${query}.json`);
  }

  search(opt) {
    const params = {
      first_effective_quarter: opt.quarter || '',
      first_effective_year: opt.year || '',
      major_abbr: opt.major || '',
      pathway: opt.pathway || '',
      quarter: opt.quarter || '',
      year: opt.year || '',
    };

    const query = qs.stringify(params);

    return super.get(`program.json?${query}`)
      .then((result) => {
        const { Programs: data } = result.data;
        return { data };
      });
  }
}

module.exports = Program;
