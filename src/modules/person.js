import qs      from 'query-string';
import Service from './service';

class Person extends Service {
  constructor(config) {
    super(config);
  }

  get(regid) {
    return this._get(`person/${regid}.json`);
  }

  search(opt) {
    let params = {
      employee_id:        opt.employeeid || '',
      net_id:             opt.netid || '',
      reg_id:             opt.regid || '',
      student_number:     opt.studentid || '',
      student_system_key: opt.syskey || ''
    };

    let query = qs.stringify(params);

    return this._get(`person.json?${query}`);
  }
}

export default Person;
