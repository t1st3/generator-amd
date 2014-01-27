'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var figlet = require('figlet');

var AmdGenerator = module.exports = function AmdGenerator(args, options) {
	yeoman.generators.Base.apply(this, arguments);

	this.on('end', function () {
		this.installDependencies({ skipInstall: options['skip-install'] });
	});

	this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(AmdGenerator, yeoman.generators.Base);

AmdGenerator.prototype.askFor = function askFor() {
	var cb = this.async();

	var t = this;
	figlet('yo amd', function (err, data) {
		if (err) {
			console.log('Something went wrong with figlet');
			console.dir(err);
			return;
		} else {
			console.log(data);
			var updateNotifier = require('update-notifier');
			var notifier = updateNotifier(
				{
					packagePath: '../package.json',
					packageName: 'generator-amd'
				}
			);
			if (notifier.update) {
				notifier.notify();
			}
			console.log(t.yeoman);
			var prompts = [
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
				t.githubAccount = props.githubAccount;
				t.moduleName = props.moduleName;
				t.objectName = props.objectName;
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
