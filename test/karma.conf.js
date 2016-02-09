// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-04-26 using
// generator-karma 1.0.0

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "jasmine"
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-bing-maps/dist/angular-bing-maps.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/jquery-ui/ui/jquery-ui.js',
      'bower_components/angular-ui-slider/src/slider.js',
      'bower_components/angular-strap/dist/angular-strap.js',
      'bower_components/angular-strap/dist/angular-strap.tpl.js',
      'bower_components/angular-google-chart/ng-google-chart.js',
      'bower_components/angular-ui-tree/dist/angular-ui-tree.js',
      'bower_components/angular-ui-tree/dist/angular-ui-tree.min.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-ui-select/dist/select.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-ui-grid/ui-grid.js',
      'bower_components/angular-base64/angular-base64.js',
      'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
      'bower_components/pdfmake/build/pdfmake.js',
      'bower_components/pdfmake/build/vfs_fonts.js',
      'bower_components/html2canvas/build/html2canvas.js',
      'bower_components/canvg/dist/canvg.bundle.js',
      'bower_components/canvg/dist/canvg.bundle.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
	    'http://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0',
      "app/scripts/**/*.js",
      "test/mock/**/*.js",
      "test/spec/**/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8010,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "PhantomJS"
	    //"Chrome"
    ],

    // Which plugins to enable
    plugins: [
      "karma-phantomjs-launcher",
      //"karma-chrome-launcher",
      "karma-jasmine"
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
