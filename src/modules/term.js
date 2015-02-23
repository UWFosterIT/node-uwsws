import request from 'request';

class Term {
  constructor(config) {
    this.config = config;
  }

  next (cb) {
    this._get('term/next.json', cb);
    return;
  }

  previous (cb) {
    this._get('term/previous.json', cb);
    return;
  }

  current (cb) {
    this._get('term/current.json', cb);
    return;
  }

  search (options, cb) {
    this._get(`term/${options.year},${options.quarter}.json`, cb);
    return;
  }

  _options (endpoint) {
    return {
      uri: this.config.baseUrl + endpoint,
      agentOptions: {
        cert: this.config.cert,
        key: this.config.key
      }
    };
  }

  _get (endpoint, cb) {
    request.get(this._options(endpoint), (err, response, body) => {
      cb(err, response, JSON.parse(body));
    });
    return;
  }
}

export default Term;
