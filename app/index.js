'use strict';

var generators = require('yeoman-generator');
var figlet = require('figlet');
var updateNotifier = require('update-notifier');
var pkg = require('../package.json');

module.exports = generators.Base.extend({
	constructor: function () {
		generators.Base.apply(this, arguments);
		var done = this.async();
		var notifier = updateNotifier({
			pkg: pkg
		});
		if (notifier.update) {
			notifier.notify();
		}

		figlet('yo amd', function (err, data) {
			if (err) {
				done(err);
			} else {
				console.log(data);
				done();
			}
		});
	},
	prompting: function () {
		return this.prompt([{
			type: 'input',
			name: 'githubAccount',
			message: 'What is your github account?'
		}, {
			type: 'input',
			name: 'moduleName',
			message: 'What is the name of your AMD module (the slug-name of the Github repository)?'
		}, {
			type: 'input',
			name: 'objectName',
			message: 'What is the name of the object?'
		}]).then(function (answers) {
			this.log('github account', answers.githubAccount);
			this.log('module name', answers.moduleName);
			this.log('object name', answers.objectName);
			var slugify = function (text) {
				return text.toString().toLowerCase()
				.replace(/\s+/g, '-') // Replace spaces with -
				.replace(/[^\w-]+/g, '') // Remove all non-word chars
				.replace(/--+/g, '-') // Replace multiple - with single -
				.replace(/^-+/, '') // Trim - from start of text
				.replace(/-+$/, ''); // Trim - from end of text
			};
			this.githubAccount = answers.githubAccount;
			this.moduleName = answers.moduleName;
			this.moduleSlug = slugify(answers.moduleName);
			this.objectName = answers.objectName;
			this.objectSlug = slugify(answers.objectName);
		}.bind(this));
	},
	writing: function () {
		this.mkdir('src');
		this.template('src/_amd-module.js', 'src/' + this.moduleName + '.js');

		this.mkdir('example');
		this.template('example/_app.js', 'example/app.js');
		this.template('example/_index.html', 'example/index.html');
		this.copy('example/main.css', 'example/main.css');
		this.copy('example/require-2.1.10.min.js', 'example/require-2.1.10.min.js');

		this.mkdir('dist');
		this.mkdir('doc');

		this.template('_gruntfile.js', 'Gruntfile.js');
		this.copy('bowerrc', '.bowerrc');
		this.template('_package.json', 'package.json');
		this.template('_bower.json', 'bower.json');
		this.template('_README.md', 'README.md');
		this.copy('gitignore', '.gitignore');
		this.copy('gitattributes', '.gitattributes');
		this.copy('jscs.json', '.jscs.json');
		this.copy('editorconfig', '.editorconfig');
		this.copy('jshintrc', '.jshintrc');
	},
	install: function () {
		this.installDependencies({skipInstall: this.option('skip-install')});
	}
});
