const Service = require('./service');

class Campus extends Service {
  all() {
    return super.get('campus.json')
      .then((result) => {
        const { Campuses: data } = result.data;
        return { data };
      });
  }
}

module.exports = Campus;
