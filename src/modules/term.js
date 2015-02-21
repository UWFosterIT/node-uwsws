import request from 'request';

class Term {
  constructor(config) {
    this.config = config;
  }

  next (callback) {
    // get the next UW Term from the web service using the 'request' module
    var options = {
        url: this.config.baseUrl + 'term/next',
        agentOptions: {
            cert: this.config.cert,
            key: this.config.key
        }
    };

    request.get(options, function(error, response, body) {
      callback(error, response, body);
    });
  }

  previous () {
    return false;
  }

  current () {
    return false;
  }

  search (year, term) {
    return {year: year, quarter: term};
  }
}

export default Term;
