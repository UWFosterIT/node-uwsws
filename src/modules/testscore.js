const Service = require('./service');

class TestScore extends Service {
  get(opt) {
    if (opt.testType) {
      return super.get(`testscore/${opt.testType},${opt.regid}.json`);
    }
    return super.get(`testscore/${opt.regid}.json`);
  }
}

module.exports = TestScore;
