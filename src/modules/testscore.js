import qs      from 'query-string';
import Service from './service';

class TestScore extends Service {
  constructor(config) {
    super(config);
  }

  get(opt, cb) {
    if (opt.testType) {
      this._get(`testscore/${opt.testType},${opt.regid}.json`, cb);
    } else {
      this._get(`testscore/${opt.regid}.json`, cb);
    }

    return;
  }
}

export default TestScore;
