module.exports = function(config) {
  config.set({

    basePath: './',
    
    files : [
             'js/lib/angular/angular.js',
             'js/lib/angular/angular-mocks.js',
             'js/app/**/*.js',
             'tests/**/*.js'
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
