'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-eslint');

  grunt.initConfig({

    mochaTest: {
      test: {
        options: {
          reporter:    'spec',
          captureFile: 'results.txt',
          quiet:       false
        },
        src:
          ['test/**/*.js']
      }
    },

    eslint: {
      options: {
        configFile: '.eslintrc'
      },
      target:
        ['*.js', 'test/**/*.js']
    }
  });

  grunt.registerTask('default', ['mochaTest', 'eslint']);
};
