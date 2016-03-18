import Service from './service';

class TestScore extends Service {
  constructor(config) {
    super(config);
  }

  get(opt) {
    if (opt.testType) {
      return this._get(`testscore/${opt.testType},${opt.regid}.json`)
        .then((result) => {
          result.testscore = result.data;
          delete result.data;
          return result;
        });
    }
    return this._get(`testscore/${opt.regid}.json`)
      .then((result) => {
        result.testscore = result.data;
        delete result.data;
        return result;
      });
  }
}

export default TestScore;
