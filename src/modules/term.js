import Service from './service';

class Term extends Service {
  constructor(config) {
    super(config);
  }

  next() {
    return this._get('term/next.json')
      .then((result) => {
        result.term = result.data;
        delete result.data;
        return result;
      });
  }

  previous() {
    return this._get('term/previous.json')
      .then((result) => {
        result.term = result.data;
        delete result.data;
        return result;
      });
  }

  current() {
    return this._get('term/current.json')
      .then((result) => {
        result.term = result.data;
        delete result.data;
        return result;
      });
  }

  search(options) {
    return this._get(`term/${options.year},${options.quarter}.json`)
      .then((result) => {
        result.term = result.data;
        delete result.data;
        return result;
      });
  }
}

export default Term;
