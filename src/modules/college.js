import qs      from 'query-string';
import Service from './service';

class College extends Service {
  constructor(config) {
    super(config);
  }

  search(opt) {

    let params = {
      campus_short_name: opt.name || '',
      future_terms:      opt.future || 0,
      quarter:           opt.quarter || '',
      year:              opt.year || ''
    };

    let query = qs.stringify(params);

    return this._get(`college.json?${query}`)
      .then((result) => {
        result.data = result.data.Colleges;
        return result;
      });
  }
}

export default College;
