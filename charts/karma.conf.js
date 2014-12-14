// Karma configuration

module.exports = function (config) {

	config.set({

		// base path, that will be used to resolve files and exclude
		basePath: '',

		// frameworks to use
		frameworks: ['mocha', 'chai', 'sinon'],

		plugins: [
			'karma-mocha',
			'karma-chai',
			'karma-sinon',
			'karma-coverage',
			'karma-script-launcher',
			'karma-phantomjs-launcher',
			'karma-chrome-launcher',
			require('cogwheels-tools/karma/spec')
		],

		// list of files / patterns to load in the browser
		//files: [],

		// list of files to exclude
		//exclude: [],

		// test results reporter to use
		// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		reporters: ['progress', 'coverage'],

		preprocessors: {
			'builds/web/development/js/features-*.js': ['coverage'],
			'features/*/specs/**/*.spec.js': ['spec-feature']
		},

		coverageReporter: {
			type: 'html',
			dir: 'builds/reports/coverage/'
		},

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['PhantomJS'],

		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: false
	});

};
