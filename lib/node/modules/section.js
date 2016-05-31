'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _service = require('./service');

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section = function (_Service) {
  (0, _inherits3.default)(Section, _Service);

  function Section(config) {
    (0, _classCallCheck3.default)(this, Section);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Section).call(this, config));
  }

  (0, _createClass3.default)(Section, [{
    key: 'get',
    value: function get(opt) {
      var course = opt.course + '/' + opt.section;
      var query = opt.year + ',' + opt.quarter + ',' + opt.curriculum + ',' + course;
      return this._get('course/' + query + '.json');
    }
  }, {
    key: 'search',
    value: function search(opt) {
      var params = {
        changed_since_date: opt.changeDate || '',
        course_number: opt.course || '',
        curriculum_abbreviation: opt.curriculum || '',
        delete_flag: opt.deleteFlag || '',
        future_terms: opt.future || 0,
        include_secondaries: opt.include || '',
        page_size: opt.size || '',
        page_start: opt.start || '',
        quarter: opt.quarter || '',
        reg_id: opt.regid || '',
        search_by: opt.searchBy || '',
        transcriptable_course: opt.transcriptable || '',
        year: opt.year || ''
      };

      var query = _queryString2.default.stringify(params);

      return this._get('section.json?' + query);
    }
  }]);
  return Section;
}(_service2.default);

exports.default = Section;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3NlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFFTSxPOzs7QUFDSixtQkFBWSxNQUFaLEVBQW9CO0FBQUE7QUFBQSw0R0FDWixNQURZO0FBRW5COzs7O3dCQUVHLEcsRUFBSztBQUNQLFVBQUksU0FBWSxJQUFJLE1BQWhCLFNBQTBCLElBQUksT0FBbEM7QUFDQSxVQUFJLFFBQVcsSUFBSSxJQUFmLFNBQXVCLElBQUksT0FBM0IsU0FBc0MsSUFBSSxVQUExQyxTQUF3RCxNQUE1RDtBQUNBLGFBQU8sS0FBSyxJQUFMLGFBQW9CLEtBQXBCLFdBQVA7QUFDRDs7OzJCQUVNLEcsRUFBSztBQUNWLFVBQUksU0FBUztBQUNYLDRCQUF5QixJQUFJLFVBQUosSUFBa0IsRUFEaEM7QUFFWCx1QkFBeUIsSUFBSSxNQUFKLElBQWMsRUFGNUI7QUFHWCxpQ0FBeUIsSUFBSSxVQUFKLElBQWtCLEVBSGhDO0FBSVgscUJBQXlCLElBQUksVUFBSixJQUFrQixFQUpoQztBQUtYLHNCQUF5QixJQUFJLE1BQUosSUFBYyxDQUw1QjtBQU1YLDZCQUF5QixJQUFJLE9BQUosSUFBZSxFQU43QjtBQU9YLG1CQUF5QixJQUFJLElBQUosSUFBWSxFQVAxQjtBQVFYLG9CQUF5QixJQUFJLEtBQUosSUFBYSxFQVIzQjtBQVNYLGlCQUF5QixJQUFJLE9BQUosSUFBZSxFQVQ3QjtBQVVYLGdCQUF5QixJQUFJLEtBQUosSUFBYSxFQVYzQjtBQVdYLG1CQUF5QixJQUFJLFFBQUosSUFBZ0IsRUFYOUI7QUFZWCwrQkFBeUIsSUFBSSxjQUFKLElBQXNCLEVBWnBDO0FBYVgsY0FBeUIsSUFBSSxJQUFKLElBQVk7QUFiMUIsT0FBYjs7QUFnQkEsVUFBSSxRQUFRLHNCQUFHLFNBQUgsQ0FBYSxNQUFiLENBQVo7O0FBRUEsYUFBTyxLQUFLLElBQUwsbUJBQTBCLEtBQTFCLENBQVA7QUFDRDs7Ozs7a0JBR1ksTyIsImZpbGUiOiJzZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzICAgICAgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIFNlY3Rpb24gZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIGdldChvcHQpIHtcbiAgICBsZXQgY291cnNlID0gYCR7b3B0LmNvdXJzZX0vJHtvcHQuc2VjdGlvbn1gO1xuICAgIGxldCBxdWVyeSA9IGAke29wdC55ZWFyfSwke29wdC5xdWFydGVyfSwke29wdC5jdXJyaWN1bHVtfSwke2NvdXJzZX1gO1xuICAgIHJldHVybiB0aGlzLl9nZXQoYGNvdXJzZS8ke3F1ZXJ5fS5qc29uYCk7XG4gIH1cblxuICBzZWFyY2gob3B0KSB7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIGNoYW5nZWRfc2luY2VfZGF0ZTogICAgICBvcHQuY2hhbmdlRGF0ZSB8fCAnJyxcbiAgICAgIGNvdXJzZV9udW1iZXI6ICAgICAgICAgICBvcHQuY291cnNlIHx8ICcnLFxuICAgICAgY3VycmljdWx1bV9hYmJyZXZpYXRpb246IG9wdC5jdXJyaWN1bHVtIHx8ICcnLFxuICAgICAgZGVsZXRlX2ZsYWc6ICAgICAgICAgICAgIG9wdC5kZWxldGVGbGFnIHx8ICcnLFxuICAgICAgZnV0dXJlX3Rlcm1zOiAgICAgICAgICAgIG9wdC5mdXR1cmUgfHwgMCxcbiAgICAgIGluY2x1ZGVfc2Vjb25kYXJpZXM6ICAgICBvcHQuaW5jbHVkZSB8fCAnJyxcbiAgICAgIHBhZ2Vfc2l6ZTogICAgICAgICAgICAgICBvcHQuc2l6ZSB8fCAnJyxcbiAgICAgIHBhZ2Vfc3RhcnQ6ICAgICAgICAgICAgICBvcHQuc3RhcnQgfHwgJycsXG4gICAgICBxdWFydGVyOiAgICAgICAgICAgICAgICAgb3B0LnF1YXJ0ZXIgfHwgJycsXG4gICAgICByZWdfaWQ6ICAgICAgICAgICAgICAgICAgb3B0LnJlZ2lkIHx8ICcnLFxuICAgICAgc2VhcmNoX2J5OiAgICAgICAgICAgICAgIG9wdC5zZWFyY2hCeSB8fCAnJyxcbiAgICAgIHRyYW5zY3JpcHRhYmxlX2NvdXJzZTogICBvcHQudHJhbnNjcmlwdGFibGUgfHwgJycsXG4gICAgICB5ZWFyOiAgICAgICAgICAgICAgICAgICAgb3B0LnllYXIgfHwgJydcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBzZWN0aW9uLmpzb24/JHtxdWVyeX1gKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIl19