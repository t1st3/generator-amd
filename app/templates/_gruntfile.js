'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'src/<%= moduleName %>.js',
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
				src: ['src/*.js'],
				options: {
					destination: 'doc'
				}
			}
		},
		jscs: {
			src: ['src/*.js', 'Gruntfile.js', 'example/app.js'],
			options: {
				config: '.jscs.json'
			}
		},
		version: {
			js: {
				options: {
					prefix: '@version\\s*'
				},
				src: ['src/*.js']
			},
			json: {
				options: {
					prefix: '"version":\\s"*'
				},
				src: ['bower.json']
			}
		}
	});

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-jscs-checker');
	grunt.loadNpmTasks('grunt-version');

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
		'build'
	]);
};
