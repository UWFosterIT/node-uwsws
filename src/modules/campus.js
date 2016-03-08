import Service from './service';

class Campus extends Service {
  constructor(config) {
    super(config);
  }

  all(cb) {
    this._get('campus.json', (err, res, body) => {
      cb(err, res, err ? body : body.Campuses);
    });

    return;
  }
}

export default Campus;
