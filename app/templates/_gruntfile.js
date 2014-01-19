'use strict';
module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'src/<%= _.slugify(moduleName) %>.js',
				'example/app.js'
			]
		},
		uglify: {
			options: {
				mangle: false,
				sourceMap: true,
				sourceMapName: 'dist/<%= _.slugify(moduleName) %>.min.map'
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
					{src: ['src/<%= _.slugify(moduleName) %>.js'], dest: 'dist/<%= _.slugify(moduleName) %>.js'},
					{src: ['dist/<%= _.slugify(moduleName) %>.min.js'], dest: 'example/<%= _.slugify(moduleName) %>.min.js'},
					{src: ['dist/<%= _.slugify(moduleName) %>.min.map'], dest: 'example/<%= _.slugify(moduleName) %>.min.map'},
					{src: ['bower_components/jquery/jquery.min.js'], dest: 'example/jquery.min.js'}
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
			src: "src/*.js",
			options: {
				config: ".jscs.json"
			}
		}
	});

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks("grunt-jscs-checker");

	// Register tasks
	grunt.registerTask('build', [
		'jshint',
		'jscs',
		'uglify',
		'copy',
		'jsdoc'
	]);
	
	grunt.registerTask('serve', [
		'build'
	]);
};