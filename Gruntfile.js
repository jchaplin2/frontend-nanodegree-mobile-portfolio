module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	var config = grunt.file.readYAML("Gruntconfig.yml");

	grunt.initConfig({
		responsive_images: {
			dev : {
				options : {
			        engine: 'gm',  // added
					sizes : [{
						name: '600',
						width: 600
					},{
						name: '800',
						width: 800
					},{
						name: '1000',
						width: 1000
					},{
						name: '1200',
						width: 1200
					}]
				},
	    		files : [{
	    			expand : true,
	    			src : ['img/*.*'],
	    			cwd : 'src/',
	    			dest : 'dist/'
	    		}]
			}
  		},
  		imagemin : {
  			dynamic : {
		        files: [{
		          expand: true,
		          cwd: 'src/',
		          src: ['img/*.{png,jpg}', 'views/images/*.{png,jpg}'],
		          dest: 'dist/'
		        }]
			}
		},
		htmlmin: {
		      dist: {
		        options: {
		          removeComments: true,
		          collapseWhitespace: true
		        },
		        files: {
		          'dist/index.html': 'src/index.html',
		          'dist/project-2048.html': 'src/project-2048.html',
		          'dist/project-mobile.html': 'src/project-mobile.html',
		          'dist/project-webperf.html': 'src/project-webperf.html',
		          'dist/views/pizza.html': 'src/views/pizza.html',
		        }
		      }
		},
	    cssmin: {
	      target: {
	        files: [{
	          expand: true,
	          cwd: 'src/',
	          src: ['css/*.css', 'views/css/*.css'],
	          dest: 'dist/',
	          ext: '.css'
	        }]
	      }
	    },
	    uglify: {
	      all: {
	        files: [{
	          expand: true,
	          cwd: 'src/',
	          src: ['js/*.js', 'views/js/*.js'],
	          dest: 'dist/',
	          ext: '.js'
	        }]
	      }
	    }
	});

	grunt.registerTask('default', [
		'htmlmin',
		'cssmin',
		'uglify',
		'responsive_images',
		'imagemin'
	]);
};