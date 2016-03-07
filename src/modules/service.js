import request from 'request';

class Service {
  constructor(config) {
    this.config  = config;
    this.log = config.log;
    this.cache = config.cache;
  }

  _options (endpoint) {
    return {
      uriCache: endpoint.replace(/\//g, ''),
      uri: this.config.baseUrl + endpoint,
      agentOptions: {
        cert: this.config.auth.cert,
        key: this.config.auth.key
      },
    };
  }

  _get (endpoint, cb) {
    // wild    no load no save
    // dryrun  load not save
    // record  load and save
    let options = this._options(endpoint);

    if (this.config.cacheMode === 'wild') {
      this.log.trace(`wild -- ${options.uri}`);
      request.get(options, function (err, response, body) {
        let result = body;
        if (!err) { result = JSON.parse(body); }

        cb(err, response, result);
      });
    } else if (this.config.cacheMode === 'dryrun') {
      this.log.trace(`dryrun for ${options.uri}`);
      let body = this.cache.read(options.uriCache);
      if (body) {
        cb(null, null, JSON.parse(body));
      } else {
        request.get(options, (err, response, body) => {
          let result = body;
          if (!err) { result = JSON.parse(body); }

          cb(err, response, result);
        });
      }
    } else if (this.config.cacheMode === 'record') {
      this.log.trace(`record -- ${options.uri}`);
      let body = this.cache.read(options.uriCache);
      if (body) {
        cb(null, null, JSON.parse(body));
      } else {
        request.get(options, (err, response, body) => {
          let result = body;
          if (!err) { result = JSON.parse(body); }

          this.cache.write(options.uriCache, body, true);
          cb(err, response, result);
        });
      }
    }
    return;
  }
}

export default Service;
