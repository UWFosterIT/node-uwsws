import Service from './service';

class College extends Service {
  constructor(config) {
    super(config);
  }

  search(name, cb) {
    let query = `campus_short_name=${name}`;

    this._get(`college.json?${query}`, (err, res, body) => {
      // why would there ever be more than one I don't know
      cb(err, res, body.Colleges[0]);
    });

    return;
  }
}

export default College;
