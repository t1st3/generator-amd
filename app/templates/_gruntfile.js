'use strict';

var LIVERELOAD_PORT = 35729;
var SERVER_PORT = 9000;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {

	require('time-grunt')(grunt);

	require('load-grunt-tasks')(grunt, {
		scope: 'devDependencies',
		config: 'package.json',
		pattern: ['grunt-*']
	});

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: [
				'src/**/*.js',
				'example/app.js',
				'Gruntfile.js'
			]
		},
		uglify: {
			options: {
				mangle: false,
				sourceMap: true,
				sourceMapName: 'dist/<%= moduleName %>.min.map'
			},
			myTarget: {
				files: {
					'dist/<%= moduleName %>.min.js': ['src/<%= moduleName %>.js']
				}
			}
		},
		copy: {
			main: {
				files: [
					{src: ['src/<%= moduleName %>.js'], dest: 'dist/<%= moduleName %>.js'},
					{src: ['dist/<%= moduleName %>.min.js'], dest: 'example/<%= moduleName %>.min.js'},
					{src: ['dist/<%= moduleName %>.min.map'], dest: 'example/<%= moduleName %>.min.map'},
					{src: ['bower_components/jquery/jquery.min.js'], dest: 'example/jquery.min.js'},
					{src: ['bower_components/jquery/jquery.min.map'], dest: 'example/jquery.min.map'}
				]
			}
		},
		jsdoc : {
			dist : {
				src: ['src/**/*.js'],
				options: {
					destination: 'doc'
				}
			}
		},
		jscs: {
			src: ['src/**/*.js', 'Gruntfile.js', 'example/app.js'],
			options: {
				config: '.jscs.json'
			}
		},
		version: {
			js: {
				options: {
					prefix: '@version\\s*'
				},
				src: ['src/**/*.js']
			},
			json: {
				options: {
					prefix: '"version":\\s"*'
				},
				src: ['bower.json']
			}
		},
		watch: {
			options: {
				nospawn: true,
				livereload: true
			},
			js: {
				files: ['src/**/*.js', 'example/**/*', 'Gruntfile.js'],
				tasks: ['jshint', 'jscs', 'uglify', 'copy:main'],
				options: {
					livereload: {
						port: LIVERELOAD_PORT
					}
				},
			},
		},
		connect: {
			options: {
				port: SERVER_PORT,
				hostname: 'localhost'
			},
			livereload: {
				options: {
					base: 'example',
					middleware: function (connect) {
						return [
							lrSnippet,
							mountFolder(connect, 'example')
						];
					}
				}
			}
		},
		open: {
			server: {
				path: 'http://localhost:' + SERVER_PORT
			}
		}
	});

	// Register tasks
	grunt.registerTask('build', [
		'version:js',
		'version:json',
		'jshint',
		'jscs',
		'uglify',
		'copy:main',
		'jsdoc:dist'
	]);

	grunt.registerTask('serve', [
		'connect:livereload',
		'open',
		'watch:js'
	]);
};
