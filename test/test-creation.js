/*global describe, beforeeach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('amd generator', function () {
	beforeeach(function (done) {
		helpers.testdirectory(path.join(__dirname, 'temp'), function (err) {
			if (err) {
				return done(err);
			}

			this.app = helpers.creategenerator('amd:app', [
				'../../app'
			]);
			done();
		}.bind(this));
	});

	it('creates expected files', function (done) {
		var expected = [
			// add files you expect to exist here.
			'.jshintrc',
			'.editorconfig',
			'.bowerrc',
			'.gitignore',
			'bower.json',
			'Gruntfile.js',
			'package.json',
			'example/app.js',
			'example/index.html'
		];

		helpers.mockprompt(this.app, {
			'someoption': true
		});
		this.app.options['skip-install'] = true;
		this.app.run({}, function () {
			helpers.assertfiles(expected);
			done();
		});
	});
});
