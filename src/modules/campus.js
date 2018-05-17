let Service = require('./service');

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

module.exports = Campus;
