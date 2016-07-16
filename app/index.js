'use strict';

var util = require('util'),
    base = require('yeoman-generator').Base,
    figlet = require('figlet'),

AmdGenerator;

AmdGenerator = module.exports = function AmdGenerator(args, options) {
	base.apply(this, arguments);

	this.on('end', function () {
		this.installDependencies({ skipInstall: options['skip-install'] });
	});

	this.pkg = require('../package.json');
};

util.inherits(AmdGenerator, base);

AmdGenerator.prototype.askFor = function askFor() {
	var cb, t;

	cb = this.async();

	t = this;
	figlet('yo amd', function (err, data) {
		if (err) {
			console.log('Something went wrong with figlet');
			console.dir(err);
			return;
		} else {
			console.log(data);
			var updateNotifier, notifier, prompts;

			updateNotifier = require('update-notifier');
			notifier = updateNotifier(
				{
					pkg: t.pkg
				}
			);

			if (notifier.update) {
				notifier.notify();
			}

			if (t.yeoman) {
				console.log(t.yeoman);
			}

			prompts = [
				{
					name: 'githubAccount',
					message: 'What is your github account?'
				},
				{
					name: 'moduleName',
					message: 'What is the name of your AMD module (the slug-name of the Github repository)?'
				},
				{
					name: 'objectName',
					message: 'What is the name of the object?'
				}
			];

			t.prompt(prompts, function (props) {
				var slugify = function (text) {
					return text.toString().toLowerCase()
					.replace(/\s+/g, '-') // Replace spaces with -
					.replace(/[^\w\-]+/g, '') // Remove all non-word chars
					.replace(/\-\-+/g, '-') // Replace multiple - with single -
					.replace(/^-+/, '') // Trim - from start of text
					.replace(/-+$/, ''); // Trim - from end of text
				};
				t.githubAccount = props.githubAccount;
				t.moduleName = props.moduleName;
				t.moduleSlug = slugify(props.moduleName);
				t.objectName = props.objectName;
				t.objectSlug = slugify(props.objectName);
				cb();
			}.bind(t));
		}
	});
};

AmdGenerator.prototype.app = function app() {

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
};

AmdGenerator.prototype.projectfiles = function projectfiles() {
	this.copy('editorconfig', '.editorconfig');
	this.copy('jshintrc', '.jshintrc');
};
