const qs = require('query-string');
const Service = require('./service');

class Person extends Service {
  get(regid) {
    return super.get(`person/${regid}.json`);
  }

  search(opt) {
    const params = {
      employee_id: opt.employeeid || '',
      net_id: opt.netid || '',
      reg_id: opt.regid || '',
      student_number: opt.studentid || '',
      student_system_key: opt.syskey || '',
    };

    const query = qs.stringify(params);

    return super.get(`person.json?${query}`);
  }
}

module.exports = Person;
