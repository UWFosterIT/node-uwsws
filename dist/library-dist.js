var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require("fs"), require("request")) : typeof define === "function" && define.amd ? define(["fs", "request"], factory) : global.UWSWS = factory(global.fs, global.request);
})(this, function (fs, request) {
  "use strict";

  //
  // Always be sure to define variables.
  // Never export directly, as 6to5 strips
  // all import and export lines.
  //

  var Another = {
    anotherFn: function () {
      return "ok";
    },
    multiply: function (a, b) {
      return a * b;
    }
  };

  var Term = (function () {
    function Term(config) {
      _classCallCheck(this, Term);

      this.config = config;
    }

    _prototypeProperties(Term, null, {
      next: {
        value: function next(callback) {
          // get the next UW Term from the web service using the 'request' module
          var options = {
            url: this.config.baseUrl + "term/next",
            agentOptions: {
              cert: this.config.cert,
              key: this.config.key
            }
          };

          request.get(options, function (error, response, body) {
            callback(error, response, body);
          });
        },
        writable: true,
        configurable: true
      },
      previous: {
        value: function previous() {
          return false;
        },
        writable: true,
        configurable: true
      },
      current: {
        value: function current() {
          return false;
        },
        writable: true,
        configurable: true
      },
      search: {
        value: function search(year, term) {
          return { year: year, quarter: term };
        },
        writable: true,
        configurable: true
      }
    });

    return Term;
  })();

  var index__config = {};

  function readCertificate() {
    var cert = arguments[0] === undefined ? "" : arguments[0];
    var key = arguments[1] === undefined ? "" : arguments[1];
    // don't do this async, if this fails then nothing will work
    // and that is preferred when using a lib like this one
    if (cert === "" || key === "" || !fs.existsSync(cert) || !fs.existsSync(key)) {
      throw new Error("Client cert " + cert + " or key " + key + " can not be found");
    }

    index__config.cert = fs.readFileSync(cert);
    index__config.key = fs.readFileSync(key);
  }

  var index__UWSWS = {
    anotherFn: Another.anotherFn,
    multiply: Another.multiply,
    mainFn: function mainFn() {
      return "hello";
    },
    initialize: function initialize(options) {
      readCertificate(options.cert, options.key);
      index__config.baseUrl = options.baseUrl;

      this.config = index__config;
      this.options = options;

      // add all the sub modules with any necessary config etc
      this.term = new Term(index__config);

      return this;
    }
  };

  var index = index__UWSWS;

  return index;
});
//# sourceMappingURL=./library-dist.js.map