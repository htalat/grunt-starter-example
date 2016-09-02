module.exports = function(grunt){

	grunt.initConfig({
		concat: {

		    js: {
		      src: ['src/a.js', 'src/b.js'],
		      dest: 'dist/js/scripts.js',
		    },
		    css: {
		    	src: 'css/**/*.css',
		    	dest: 'build/css/styles.css',
		    }
	  	},

		sass: {                              
		    dist: {
		    	option: {
		    		style:'expanded'
		    	},
				files: [{
				    expand: true,
				    cwd: 'sass',
				    src: ['**/*.scss'],
				    dest: 'css',
				    ext: '.css'
				}]
		    }
		  },

		  watch: {

		  	  sass: {
		  	  	files: ['sass/**/*.scss'],
		  	  	tasks: ['sass']
		  	  },
			  js: {
			    files: ['src/**/*.js'],
			    tasks: ['concat:js']
			  },
			  css: {
			    files: ['css/**/*.css'],
			    tasks: ['concat:css']
			  }		 
		  }

	});

	//load tasks
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//register the default task
	grunt.registerTask('default',['sass','concat','watch']);
};