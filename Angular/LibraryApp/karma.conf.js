module.exports = function(config) {
  config.set({

    basePath: './',
    
    files : [
             'resources/js/lib/angular/angular.js',
             'resources/js/lib/angular/angular-route.js',
             'resources/js/lib/angular/angular-mocks.js',
             'resources/js/app/**/*.js',
             'resources/tests/**/*.js'
           ],

    frameworks: ['jasmine'],

    port: 9876,

    autoWatch: true,
    
    browsers: ['Firefox'],

    singleRun: false,
    
    reporters: ['progress'],
    
    logLevel: config.LOG_INFO,
    
    plugins : [
               'karma-firefox-launcher',
               'karma-jasmine'
               ]
  });
};
