'use strict';

var path = require('path'),
assert = require('yeoman-assert'),
helpers = require('yeoman-test');

describe('yo amd:app', function () {
	before(function (done) {
		helpers.run(path.join(__dirname, '../app'))
		.inDir(path.join(__dirname, '../../tmp'))
		.withOptions({
			'skip-install': true
		})
		.withPrompts({
			moduleName: 'my-super-module',
			githubAccount: 'myGitAccount',
			objectName: 'mySuperModule'
		})
		.on('end', done);
	});

	it('creates files', function () {
		assert.file([
			'.jshintrc',
			'.editorconfig',
			'.bowerrc',
			'.gitignore',
			'bower.json',
			'Gruntfile.js',
			'package.json',
			'example/app.js',
			'example/index.html'
		]);
	});
});
