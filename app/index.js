'use strict';

var generators = require('yeoman-generator');
var figlet = require('figlet');
var updateNotifier = require('update-notifier');
var pkg = require('../package.json');

module.exports = class extends generators {
	constructor(args, opts) {
		super(args, opts);
		this.res = {};
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
	}
	prompting() {
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
			this.res.githubAccount = answers.githubAccount;
			this.res.moduleName = answers.moduleName;
			this.res.moduleSlug = slugify(answers.moduleName);
			this.res.objectName = answers.objectName;
			this.res.objectSlug = slugify(answers.objectName);
		}.bind(this));
	}
	writing() {
		var self = this;
		var tpl = function (input, output) {
			self.fs.copyTpl(
				self.templatePath(input),
				self.destinationPath(output),
				self.res
			);
		};
		var cp = function (input, output) {
			self.fs.copy(
				self.templatePath(input),
				self.destinationPath(output)
			);
		};

		tpl('src/_amd-module.js', 'src/' + this.moduleName + '.js');
		tpl('example/_app.js', 'example/app.js');
		tpl('example/_index.html', 'example/index.html');
		cp('example/main.css', 'example/main.css');
		cp('example/require-2.1.10.min.js', 'example/require-2.1.10.min.js');
		tpl('_gruntfile.js', 'Gruntfile.js');
		cp('bowerrc', '.bowerrc');
		tpl('_package.json', 'package.json');
		tpl('_bower.json', 'bower.json');
		tpl('_README.md', 'README.md');
		cp('gitignore', '.gitignore');
		cp('gitattributes', '.gitattributes');
		cp('jscs.json', '.jscs.json');
		cp('editorconfig', '.editorconfig');
		cp('jshintrc', '.jshintrc');
	}
	install() {
		this.installDependencies({skipInstall: this.option('skip-install')});
	}
};
