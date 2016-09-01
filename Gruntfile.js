module.exports = function(grunt){

	grunt.initConfig({
	  concat: {

	    js: {
	      src: ['src/a.js', 'src/b.js'],
	      dest: 'dist/js/scripts.js',
	    },
	    css: {
	    	src: ['css/main.css','css/theme.css'],
	    	dest: 'build/css/styles.css',
	    }
	  },
	  watch: {
		  js: {
		    files: ['src/**/*.js'],
		    tasks: ['concat:js'],
		  },
		  css: {
		    files: ['css/**/*.css'],
		    tasks: ['concat'],
		  },		 
	  },
	});


	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['concat','watch']);
};