/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('test generator', function () {
		beforeEach(function (done) {
				helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
						if (err) {
								return done(err);
						}

						this.app = helpers.createGenerator('amd:app', [
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

				helpers.mockPrompt(this.app, {
						'someOption': true
				});
				this.app.options['skip-install'] = true;
				this.app.run({}, function () {
						helpers.assertFiles(expected);
						done();
				});
		});
});