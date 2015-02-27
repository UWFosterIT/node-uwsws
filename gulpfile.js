var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  replaceString: /^gulp(-|\.)([0-9]+)?/
});

const fs        = require('fs');
const del       = require('del');
const path      = require('path');
const mkdirp    = require('mkdirp');
const isparta   = require('isparta');
const esperanto = require('esperanto');
const rs        = require('run-sequence');

const manifest          = require('./package.json');
const config            = manifest.to5BoilerplateOptions;
const mainFile          = manifest.main;
const destinationFolder = path.dirname(mainFile);
const exportFileName    = path.basename(mainFile, path.extname(mainFile));

function test() {
  return gulp.src(['test/setup/node.js', 'test/unit/**/*.js'], {read: false})
    .pipe($.plumber())
    .pipe($.mocha(
      {reporter: 'dot', globals: config.mochaGlobals, bail: process.env.BAIL}
    ));
}

// Remove the build files
gulp.task('clean', function(cb) {
  del([destinationFolder], cb);
});

// Remove our temporary files
gulp.task('clean-tmp', function(cb) {
  del(['tmp'], cb);
});

// Lint our source code
gulp.task('lint-src', function() {
  return gulp.src(['src/**/*.js'])
    .pipe($.plumber())
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'));
});

// Lint our test code
gulp.task('lint-test', function() {
  return gulp.src(['test/unit/**/*.js'])
    .pipe($.plumber())
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'));
});

// Build two versions of the library
gulp.task('build', ['lint-src', 'clean'], function(done) {
  esperanto.bundle({
    base: 'src',
    entry: config.entryFileName,
  }).then(function(bundle) {
    var res = bundle.toUmd({
      sourceMap: true,
      sourceMapSource: config.entryFileName + '.js',
      sourceMapFile: exportFileName + '.js',
      name: config.exportVarName
    });

    // Write the generated sourcemap
    mkdirp.sync(destinationFolder);
    var sourceFile = path.join(destinationFolder, exportFileName + '.js');
    fs.writeFileSync(sourceFile, res.map.toString());

    $.file(exportFileName + '.js', res.code, { src: true })
      .pipe($.plumber())
      .pipe($.sourcemaps.init({ loadMaps: true }))
      .pipe($.to5({ blacklist: ['useStrict'] }))
      .pipe($.sourcemaps.write('./', {addComment: false}))
      .pipe(gulp.dest(destinationFolder))
      .pipe($.filter(['*', '!**/*.js.map']))
      .pipe($.rename(exportFileName + '.min.js'))
      .pipe($.uglifyjs({
        outSourceMap: true,
        inSourceMap: destinationFolder + '/' + exportFileName + '.js.map',
      }))
      .pipe(gulp.dest(destinationFolder))
      .on('end', done);
  });
});

gulp.task('coverage', function(done) {
  require('6to5/register')({ modules: 'common' });
  gulp.src(['src/*.js', 'src/modules/*.js'])
    .pipe($.plumber())
    .pipe($.istanbul({ instrumenter: isparta.Instrumenter }))
    .pipe($.istanbul.hookRequire())
    .on('finish', function() {
      return test()
      .pipe($.istanbul.writeReports())
      .on('end', done);
    });
});

// Lint and run our tests, use the cache
gulp.task('test', ['lint-src', 'lint-test'], function() {
  if (process.env.CI) {
    // Sets the fixture directory to one that will be available on a CI server
    // that directory should contain scrubbed data
    // ...forces sepia to "playback" which results in errors if cache 404's
    console.log('running tests against scrubbed fixtures');
    process.env.VCR_MODE = 'playback';
    process.env.FIXTURES = 'fixtures/scrubbed';
  } else {
    process.env.VCR_MODE = 'cache';
    process.env.FIXTURES = 'fixtures/generated';
  }

  require('6to5/register')({ modules: 'common' });
  return test();
});

// Lint and run our tests, force refresh of cache
gulp.task('clean', ['lint-src', 'lint-test'], function() {
  process.env.VCR_MODE = 'record';
  process.env.FIXTURES = 'fixtures/generated';
  require('6to5/register')({ modules: 'common' });
  return test();
});

// Runs against the scrubbed data, ideally scrub data before hand
// we also "BAIL" so mocha will stop after the first fail
gulp.task('ci', function(cb) {
  process.env.CI = true;
  process.env.BAIL = true;
  return rs(['test'], cb);
});

// An alias of test
gulp.task('default', ['test']);
