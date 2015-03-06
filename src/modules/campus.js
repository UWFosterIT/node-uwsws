import Service from './service';

class Campus extends Service {
  constructor(config) {
    super(config);
  }

  all(cb) {
    this._get('campus.json', function(err, res, body) {
      cb(err, res, body.Campuses);
    });

    return;
  }
}

export default Campus;
