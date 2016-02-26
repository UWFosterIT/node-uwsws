import qs      from 'query-string';
import Service from './service';

class Program extends Service {
  constructor(config) {
    super(config);
  }

  all (opt, cb) {
    let params = {
      first_effective_quarter: opt.quarter || '',
      first_effective_year:    opt.year    || '',
      major_abbr:              opt.major   || '',
      pathway:                 opt.pathway || 0
    };

    let query = qs.stringify(params);

    this._get(`program.json.?${query}`, (err, res, body) => {
      cb(err, res, (err ? body : body.Programs));
    });
    return;
  }

  get (opt, cb) {
    opt.pathway = opt.pathway || 0;
    let query   = `${opt.major},${opt.pathway},${opt.year},${opt.quarter}`;

    this._get(`program/${query}.json`, cb);
    return;
  }

  search (opt, cb) {
    let params = {
      first_effective_quarter: opt.quarter || '',
      first_effective_year:    opt.year    || '',
      major_abbr:              opt.major   || '',
      pathway:                 opt.pathway || 0,
      quarter:                 opt.quarter || '',
      year:                    opt.year    || ''
    };

    let query = qs.stringify(params);

    this._get(`program.json?${query}`, (err, res, body) => {
      cb(err, res, (err ? body : body.Programs));
    });
    return;
  }
}

export default Program;
