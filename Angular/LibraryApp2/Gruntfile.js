module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: '<%= pkg.name %>.js',
        dest: '<%= pkg.name %>.min.js'
      }
    },
    screenshot: {
	    default_options: {
	      options: {
	        // necessary config 
	        path: 'screenshots',
	        files: [
	            // remote config options 
	            { src: "http://www.google.com", dest: "google.png", delay: 3000 }
	            // local config options 
	            
	        ],
	        viewport: ['1024x768','640x960', '320x480'] // any (X)x(Y) size 
	      }
	    }
	  }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-screenshot');

  // Default task(s).
  grunt.registerTask('default', ['screenshot']);

};