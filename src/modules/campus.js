import Service from './service';

class Campus extends Service {
  constructor(config) {
    super(config);
  }

  all() {
    return this._get('campus.json')
      .then((result) => {
        result.campus = result.data.Campuses;
        delete result.data;
        return result;
      });
  }
}

export default Campus;
