'use strict';
module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'src/<%= _.slugify(moduleName) %>.js'
			]
		},
		uglify: {
			options: {
				mangle: false
			},
			my_target: {
				files: {
					'dist/<%= _.slugify(moduleName) %>.min.js': ['src/<%= _.slugify(moduleName) %>.js']
				}
			}
		},
		copy: {
			main: {
				files: [
					{src: ['dist/<%= _.slugify(moduleName) %>.min.js'], dest: 'example/<%= _.slugify(moduleName) %>.min.js'},
					{src: ['bower_components/jquery/jquery.min.js'], dest: 'example/jquery.min.js'},
					{src: ['bower_components/requirejs/require.js'], dest: 'example/require.js'}
				]
			}
		}
	});

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Register tasks
	grunt.registerTask('build', [
		'jshint',
		'uglify',
		'copy'
	]);
	
	grunt.registerTask('serve', [
		'build'
	]);
};