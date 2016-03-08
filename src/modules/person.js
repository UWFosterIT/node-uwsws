import qs      from 'query-string';
import Service from './service';

class Person extends Service {
  constructor(config) {
    super(config);
  }

  get(regid, cb) {
    this._get(`person/${regid}.json`, cb);
    return;
  }

  search(opt, cb) {
    let params = {
      employee_id:        opt.employeeid || '',
      net_id:             opt.netid      || '',
      reg_id:             opt.regid      || '',
      student_number:     opt.studentid  || '',
      student_system_key: opt.syskey     || ''
    };

    let query = qs.stringify(params);

    this._get(`person.json?${query}`, cb);
    return;
  }
}

export default Person;
