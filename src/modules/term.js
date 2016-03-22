import Service from './service';

class Term extends Service {
  constructor(config) {
    super(config);
  }

  next() {
    return this._get('term/next.json');
  }

  previous() {
    return this._get('term/previous.json');
  }

  current() {
    return this._get('term/current.json');
  }

  search(options) {
    return this._get(`term/${options.year},${options.quarter}.json`);
  }
}

export default Term;
