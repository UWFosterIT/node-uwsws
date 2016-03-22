import qs      from 'query-string';
import Service from './service';

class Program extends Service {
  constructor(config) {
    super(config);
  }

  all(opt) {
    let params = {
      first_effective_quarter: opt.quarter || '',
      first_effective_year:    opt.year || '',
      major_abbr:              opt.major || '',
      pathway:                 opt.pathway || 0
    };

    let query = qs.stringify(params);

    return this._get(`program.json?${query}`)
      .then((result) => {
        result.data = result.data.Programs;
        return result;
      });
  }

  get(opt) {
    opt.pathway = opt.pathway || 0;
    let query = `${opt.major},${opt.pathway},${opt.year},${opt.quarter}`;

    return this._get(`program/${query}.json`);
  }

  search(opt) {
    let params = {
      first_effective_quarter: opt.quarter || '',
      first_effective_year:    opt.year || '',
      major_abbr:              opt.major || '',
      pathway:                 opt.pathway || 0,
      quarter:                 opt.quarter || '',
      year:                    opt.year || ''
    };

    let query = qs.stringify(params);

    return this._get(`program.json?${query}`)
      .then((result) => {
        result.data = result.data.Programs;
        return result;
      });
  }
}

export default Program;
