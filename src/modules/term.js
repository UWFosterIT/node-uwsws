import Service from './service';

class Term extends Service {
  constructor(config) {
    super(config);
  }

  next(cb) {
    this._get('term/next.json', cb);
    return;
  }

  previous(cb) {
    this._get('term/previous.json', cb);
    return;
  }

  current() {
    return this._get('term/dcurrent.json')
      .then((result) => {
        result.term = result.data;
        delete result.data;
        return result;
      });
  }

  search(options, cb) {
    this._get(`term/${options.year},${options.quarter}.json`, cb);
    return;
  }
}

export default Term;
