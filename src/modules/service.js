import request from 'request';

class Service {
  constructor(config) {
    this.config = config;
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
      let result = body;
      if (!err) { result = JSON.parse(body); }

      cb(err, response, result);
    });
    return;
  }
}

export default Service;
