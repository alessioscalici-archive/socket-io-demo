module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          "build/index.html": ["src/index.jade"]
        }
      }
    },

    html2js: {
      options: {
        base: 'src'
      },
      main: {
        src: ['src/modules/**/*.jade'],
        dest: 'tmp/templates.js'
      },
    },

    uglify: {
      options: {
        mangle: false//{
          //except: ['angular']
        //}
      },
      app: {
        files: {
          'tmp/output.min.js': ["src/modules/*/module.js", "src/modules/**/*.js"]
        }
      }
    },


    concat: {
      options: {
        separator: ';\n'
      },
      js: {
        files: {
          'build/js/app.min.js': [

            // extra / angular libs
         //   'src/vendor/socket.io-client/socket.io.js',

            // angular libs
            'src/vendor/angular/angular.js',
            'src/vendor/angular-ui-router/release/angular-ui-router.min.js',
            'src/vendor/angular-socket-io/socket.min.js',
            'src/vendor/angular-touch/angular-touch.min.js',
            'src/vendor/angular-carousel/dist/angular-carousel.min.js',


            // app modules
            'tmp/templates.js',
            'tmp/output.min.js'
          ]
        }
      },
      css: {
        files: {
          'build/css/main.min.css': [

            'src/vendor/angular-carousel/dist/angular-carousel.min.css',
            'tmp/style.css',

          ]
        }
      }
    },


    watch: {
      index: {
        files: ['src/*.jade'],
        tasks: ['jade'],
        options: {
          interrupt: true,
        },
      },
      js: {
        files: ['src/modules/**/*.js', 'src/modules/**/*.jade'],
        tasks: ['html2js', 'uglify', 'concat'],
        options: {
          interrupt: true,
        },
      },
    },



  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.loadNpmTasks('grunt-contrib-watch');


  // Tasks

  grunt.registerTask('default', ['jade', 'html2js', 'uglify', 'concat']);


};