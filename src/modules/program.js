import Service from './service';

class Program extends Service {
  constructor(config) {
    super(config);
  }

  all (cb) {
    this._get('program.json', (err, res, body) => {
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
    opt.pathway = opt.pathway || 0;
    let query = `?major_abbr=${opt.major}&pathway=${opt.pathway}&
      year=${opt.year}&quarter=${opt.quarter}`;

    this._get(`program.json${query}`, (err, res, body) => {
      cb(err, res, (err ? body : body.Programs));
    });
    return;
  }
}

export default Program;
