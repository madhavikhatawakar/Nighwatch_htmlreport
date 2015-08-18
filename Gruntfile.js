//running
module.exports = function(grunt) {
  var nightwatch = require('nightwatch');
  nightwatch.initGrunt(grunt);
  grunt.initConfig({
  nightwatch: {
    options: {
      cwd: './'
    },

    'default' : {},

    /*browserstack: {
      argv: {
        env: 'browserstack'
      },
      settings: {
        silent: true
      }
    },

    'all' : {
      argv: {
        env: 'default,browserstack'
      }
    },*/
  }
});

 grunt.registerTask('default', ['nightwatch']);

};

/*module.exports = function(grunt) {

  // Project configuration.
 
    // Before generating any new files, remove any previously-created files.
var nightwatch = require('nightwatch');
  nightwatch.initGrunt(grunt);
  grunt.initConfig({
  nightwatch: {
    options: {
      cwd: './'
    },

    'default' : {},

    browserstack: {
      argv: {
        env: 'browserstack'
      },
      settings: {
        silent: true
      }
    },

    'all' : {
      argv: {
        env: 'default,browserstack'
      }
    },
  },

      
      
    clean: {
      tests: ['reports']
    },
                   
    nightwatch_report: {
      files: ['reports/*.xml'],
      options: {
        outputDir: 'reports'
      }
    }
      
      

  });

  //Actually load this plugin's task(s).
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-nightwatch-report');
  grunt.loadNpmTasks('grunt-contrib-clean');
    
 grunt.registerTask('gen-test', ['clean','nightwatch', 'nightwatch_report']);
    
  grunt.registerTask('default', ['gen-test']);

};
*/
