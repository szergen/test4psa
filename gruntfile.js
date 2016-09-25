module.exports = function(grunt) {
  grunt.initConfig({
        
   

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files : [{
          src: 'components/sass/style.scss',
          dest: 'builds/development/css/style.css'
        }]
      }
    }, //sass

    wiredep: {
      task: {
        src: 'builds/development/**/*.html'
      }
    },

    connect: {
      sever: {
        options: {
          hostname: 'localhost',
          port: 3000,
          base: 'builds/development/',
          livereload: true
        }
      }
    },

    watch: {
      options: {
        spawn: false,
        livereload: true
      },
      scripts: {
        files: ['builds/development/**/*.html',
        'components/scripts/**/*.js',
        'components/sass/**/*.scss'],
        tasks: ['sass']
      }
    }


  }); //initConfig

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('default', ['wiredep', 'sass', 'connect', 'watch']);

}; //wrapper function
