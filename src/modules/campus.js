import Service from './service';

class Campus extends Service {
  constructor(config) {
    super(config);
  }

  all() {
    return this._get('campus.json')
      .then((result) => {
        result.data = result.data.Campuses;
        return result;
      });
  }
}

export default Campus;
