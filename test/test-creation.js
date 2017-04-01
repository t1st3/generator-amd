/* global describe,it,before */
'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('yo amd:app', () => {
	before(done => {
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

	it('creates files', () => {
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
