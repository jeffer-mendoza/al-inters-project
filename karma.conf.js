// Karma configuration
// Generated on Thu Jun 08 2017 03:28:09 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      'src/main/vendor/jquery/dist/jquery.min.js',
      'src/main/vendor/angular/angular.min.js',
      {pattern: 'src/main/**/*.test.js', included: false, served: true},
      {pattern: 'src/test/main-test.js', included: true} //setting file test
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/main/tmdb/**/*.js': 'coverage'
    },

    coverageReporter: {
           reporters: [
               {type: 'html', dir: 'src/main/coverage', subdir: 'PhantomJS' },
               {type: 'cobertura', dir: 'coverage', subdir: 'PhantomJS' }
           ]
       },

    junitReporter: {
              outputFile: 'src/main/integration/junit/unit-tests.xml',
              outputDir: 'src/main/integration/junit/',
              suite: ''
          }

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'junit'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    //plugin
    plugins: [
      'karma-requirejs',
      'karma-jasmine',
      'karma-phantom-launcher',
      'karma-converage',
      'karma-junit-reporter'
    ]
  })
}
