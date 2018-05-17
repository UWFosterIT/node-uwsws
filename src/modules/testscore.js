let Service = require('./service');

class TestScore extends Service {
  constructor(config) {
    super(config);
  }

  get(opt) {
    if (opt.testType) {
      return this._get(`testscore/${opt.testType},${opt.regid}.json`);
    }
    return this._get(`testscore/${opt.regid}.json`);
  }
}

module.exports = TestScore;
