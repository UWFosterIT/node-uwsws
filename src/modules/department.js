import qs      from 'query-string';
import Service from './service';

class Department extends Service {
  constructor(config) {
    super(config);
  }

  search(opt) {
    let query = qs.stringify({
      college_abbreviation: opt.abrev || '',
      future_terms:         opt.future || 0,
      quarter:              opt.quarter || '',
      sort_by:              opt.sort || '',
      year:                 opt.year || ''
    });

    return this._get(`department.json?${query}`)
      .then((result) => {
        result.department = result.data.Departments;
        delete result.data;
        return result;
      });
  }
}

export default Department;
