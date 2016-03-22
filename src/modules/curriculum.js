import qs      from 'query-string';
import Service from './service';

class Curriculum extends Service {
  constructor(config) {
    super(config);
  }

  search(opt) {

    let params = {
      college_abbreviation:    opt.college || '',
      department_abbreviation: opt.dept || '',
      future_terms:            opt.future || 0,
      quarter:                 opt.quarter || '',
      year:                    opt.year || ''
    };

    let query = qs.stringify(params);

    return this._get(`curriculum.json?${query}`);
  }
}

export default Curriculum;
