'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var AmdGenerator = module.exports = function AmdGenerator(args, options, config) {
	yeoman.generators.Base.apply(this, arguments);

	this.on('end', function () {
		this.installDependencies({ skipInstall: options['skip-install'] });
	});

	this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(AmdGenerator, yeoman.generators.Base);

AmdGenerator.prototype.askFor = function askFor() {
	var cb = this.async();

	// have Yeoman greet the user.
	console.log(this.yeoman);

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
			name: 'moduleVersion',
			message: 'What is the version of your AMD module?'
		},
		{
			name: 'objectName',
			message: 'What is the name of the object?'
		}
	];

	this.prompt(prompts, function (props) {
		this.githubAccount = props.githubAccount;
		this.moduleName = props.moduleName;
		this.moduleVersion = props.moduleVersion;
		this.objectName = props.objectName;
		cb();
	}.bind(this));
};

AmdGenerator.prototype.app = function app() {

	this.mkdir('src');
	this.template('src/_amd-module.js', 'src/' + this.moduleName + '.js');

	this.mkdir('example');
	this.template('example/_app.js', 'example/app.js');
	this.template('example/_index.html', 'example/index.html');
	this.copy('example/main.css', 'example/main.css');
	this.copy('example/require-2.1.9.min.js', 'example/require-2.1.9.min.js');
	
	this.mkdir('dist');
	this.mkdir('doc');
	
	this.template('_gruntfile.js', 'Gruntfile.js');
	this.copy('bowerrc', '.bowerrc');
	this.template('_package.json', 'package.json');
	this.template('_bower.json', 'bower.json');
	this.template('_README.md', 'README.md');
	this.copy('gitignore', '.gitignore');
	
};

AmdGenerator.prototype.projectfiles = function projectfiles() {
	this.copy('editorconfig', '.editorconfig');
	this.copy('jshintrc', '.jshintrc');
};
