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
const rimraf    = require('rimraf');

const manifest            = require('./package.json');
const config              = manifest.to5BoilerplateOptions;
const mainFile            = manifest.main;
const destinationFolder   = path.dirname(mainFile);
const exportFileName      = path.basename(mainFile, path.extname(mainFile));
const fixturesGenerated   = 'fixtures/generated';
const fixturesScrubbed    = 'fixtures/scrubbed/generated';
const fixturesScrubSource = 'fixtures/scrubbed/source';

function test() {
  if (process.env.CI) {
    process.env.NOCK_BACK_MODE = 'lockdown';
    process.env.FIXTURES       = fixturesScrubbed;
  } else {
    process.env.NOCK_BACK_MODE = 'record';
    process.env.FIXTURES       = fixturesGenerated;
  }

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
  $.util.log('Using fixtures at ' + process.env.FIXTURES);
  require('6to5/register')({ modules: 'common' });
  return test();
});

gulp.task('clean', function() {
  rimraf(path.join(__dirname, fixturesGenerated), function (er) {
    if (er) throw er;
    $.util.log('Removed nock back fixtures at ' + fixturesGenerated);
    return true;
  });
});

// Runs against the scrubbed data, ideally 'gulp scrub' before hand
// This is to simulate what will run in CI, but, in CI this should not be ran
gulp.task('ci', function(cb) {
  process.env.CI = true;
  process.env.BAIL = true;
  return rs(['test'], cb);
});

// TO DO
// Takes the JSON scrubbed downloads from SWS documentation and inserts
// that into that into the copied generated fixtures
gulp.task('scrub', function(cb) {
  // copy all the files in fixturesGenerated into fixturesScrubbed
  // make sure each file has a matching scrubb file
  // replace the generated json in each file with respective scrubbed json
  var file = path.join(__dirname, fixturesScrubSource + "term_current.json");
  var data = fs.readFileSync(file, "utf8");

  // thanks Ivan for the regex!!!
  var scrubbed = data.replace(/(\S*?)(:)[^0-9]/g,'"$1":');
  scrubbed = JSON.stringify(JSON.parse(scrubbed));
  console.log(scrubbed);

  return true;
});

// An alias of test
gulp.task('default', ['test']);

