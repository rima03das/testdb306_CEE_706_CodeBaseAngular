// // Karma configuration file, see link for more information
// // https://karma-runner.github.io/1.0/config/configuration-file.html

var milliseconds = new Date().getTime();
module.exports = function (config) {
  config.set({
    basePath: "",
    
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
       require("karma-coverage"),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-sonarqube-reporter'),
    ],
    client: {
      jasmine: {
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
  },
  jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
  },
    coverageIstanbulRepoter: {
      dir: require("path").join(__dirname, "./coverage"),
      reports: ["lcov", "text-summary"],
      fixWebpackSourcePaths: true,
    },
    reporters: ["progress",'kjhtml',"coverage","sonarqube"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadlessNoSandbox'],
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '',
      reporters: [
      // { type: 'html', subdir: 'html-report' },
      
      { type: 'lcov', subdir: "lcov" }
      ]
  },
    customLaunchers: {

      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }

    },
    singleRun: false,
    restartOnFileChange: true,
    sonarqubeReporter: {

      basePath: 'src', // test files folder
      filePattern: '**/*spec.ts', // test files glob pattern
      encoding: 'utf-8', // test files encoding
      outputFolder: 'reports', // report destination
      legacyMode: false, // report for Sonarqube < 6.2 (disabled)
      reportName: function (metadata) {
        return 'sonarqube_report.xml';

      },
    }
  });
};


