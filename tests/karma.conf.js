// Karma configuration
// Generated on Sat Oct 17 2015 15:45:01 GMT+0200 (Mitteleuropäische Sommerzeit)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [

      '../www/lib/ionic/js/ionic.bundle.js',
      '../www/lib/angular-translate/angular-translate.min.js',
      '../www/lib/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
      '../www/lib/lokijs/src/lokijs.js',
      '../www/lib/lokijs/src/loki-angular.js',
      '../www/lib/ngCordova/dist/ng-cordova.js',
      '../www/lib/angular-mocks/angular-mocks.js',
      '../www/js/app.js',
      '../www/js/controllers.js',
      '../www/js/services.js',
      '../www/js/directives.js',
      'controllers/**/*.js',
      'services/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },





    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['PhantomJS'],
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
