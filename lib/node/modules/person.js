'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _service = require('./service');

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Person = function (_Service) {
  _inherits(Person, _Service);

  function Person(config) {
    _classCallCheck(this, Person);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Person).call(this, config));
  }

  _createClass(Person, [{
    key: 'get',
    value: function get(regid, cb) {
      this._get('person/' + regid + '.json', cb);
      return;
    }
  }, {
    key: 'search',
    value: function search(opt, cb) {
      var params = {
        employee_id: opt.employeeid || '',
        net_id: opt.netid || '',
        reg_id: opt.regid || '',
        student_number: opt.studentid || '',
        student_system_key: opt.syskey || ''
      };

      var query = _queryString2.default.stringify(params);

      this._get('person.json?' + query, cb);
      return;
    }
  }]);

  return Person;
}(_service2.default);

exports.default = Person;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3BlcnNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHTTs7O0FBQ0osV0FESSxNQUNKLENBQVksTUFBWixFQUFvQjswQkFEaEIsUUFDZ0I7O2tFQURoQixtQkFFSSxTQURZO0dBQXBCOztlQURJOzt3QkFLQSxPQUFPLElBQUk7QUFDYixXQUFLLElBQUwsYUFBb0IsZUFBcEIsRUFBa0MsRUFBbEMsRUFEYTtBQUViLGFBRmE7Ozs7MkJBS1IsS0FBSyxJQUFJO0FBQ2QsVUFBSSxTQUFTO0FBQ1gscUJBQW9CLElBQUksVUFBSixJQUFrQixFQUFsQjtBQUNwQixnQkFBb0IsSUFBSSxLQUFKLElBQWtCLEVBQWxCO0FBQ3BCLGdCQUFvQixJQUFJLEtBQUosSUFBa0IsRUFBbEI7QUFDcEIsd0JBQW9CLElBQUksU0FBSixJQUFrQixFQUFsQjtBQUNwQiw0QkFBb0IsSUFBSSxNQUFKLElBQWtCLEVBQWxCO09BTGxCLENBRFU7O0FBU2QsVUFBSSxRQUFRLHNCQUFHLFNBQUgsQ0FBYSxNQUFiLENBQVIsQ0FUVTs7QUFXZCxXQUFLLElBQUwsa0JBQXlCLEtBQXpCLEVBQWtDLEVBQWxDLEVBWGM7QUFZZCxhQVpjOzs7O1NBVlo7OztrQkEwQlMiLCJmaWxlIjoicGVyc29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzICAgICAgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIFBlcnNvbiBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgZ2V0KHJlZ2lkLCBjYikge1xuICAgIHRoaXMuX2dldChgcGVyc29uLyR7cmVnaWR9Lmpzb25gLCBjYik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc2VhcmNoKG9wdCwgY2IpIHtcbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgZW1wbG95ZWVfaWQ6ICAgICAgICBvcHQuZW1wbG95ZWVpZCB8fCAnJyxcbiAgICAgIG5ldF9pZDogICAgICAgICAgICAgb3B0Lm5ldGlkICAgICAgfHwgJycsXG4gICAgICByZWdfaWQ6ICAgICAgICAgICAgIG9wdC5yZWdpZCAgICAgIHx8ICcnLFxuICAgICAgc3R1ZGVudF9udW1iZXI6ICAgICBvcHQuc3R1ZGVudGlkICB8fCAnJyxcbiAgICAgIHN0dWRlbnRfc3lzdGVtX2tleTogb3B0LnN5c2tleSAgICAgfHwgJydcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICB0aGlzLl9nZXQoYHBlcnNvbi5qc29uPyR7cXVlcnl9YCwgY2IpO1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZXJzb247XG4iXX0=