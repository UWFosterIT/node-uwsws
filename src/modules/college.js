import qs      from 'query-string';
import Service from './service';

class College extends Service {
  constructor(config) {
    super(config);
  }

  search(name, cb) {
    let query = qs.stringify( {campus_short_name: name} );

    this._get(`college.json?${query}`, (err, res, body) => {
      cb(err, res, body.Colleges);
    });

    return;
  }
}

export default College;
