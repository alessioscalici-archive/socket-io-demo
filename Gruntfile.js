module.exports = function(grunt) {


  var vendorFiles = [
    'src/vendor/angular/angular.js',
    'src/vendor/angular-animate/angular-animate.min.js',
    'src/vendor/angular-ui-router/release/angular-ui-router.min.js',
    'src/vendor/angular-touch/angular-touch.min.js'
  ];

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
          'build/js/app.min.js': vendorFiles.concat([
            'tmp/templates.js',
            'tmp/output.min.js'
          ])
        }
      },
      css: {
        files: {
          'build/css/main.min.css': [
            'tmp/main.css'
          ]
        }
      }
    },


    sass: {
      app: {
        files: {
          'tmp/style.css': 'src/sass/main.scss'
        }
      }
    },

    compass: {
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'src/sass',
          cssDir: 'tmp',
          environment: 'production'
        }
      }
    },

    karma: {
      unit: {
        options: {
          files: vendorFiles.concat([
            'src/modules/**/module.js',
            'src/modules/**/*.js',
            'src/vendor/angular-mocks/angular-mocks.js',
            'test/mocks.js',
            'test/**/*.test.js'
          ]),
          plugins : [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-coverage'
          ],
          frameworks: ['jasmine'],
          reporters: ['progress', 'dots', 'coverage'],
          preprocessors: {
            'src/modules/**/*.js': ['coverage']
          },
          singleRun: true,
          browsers: ['PhantomJS'],
          colors: true,

          // optionally, configure the reporter
          coverageReporter: {
            type : 'html',
            dir : 'report/',
            subdir: 'coverage',
            includeAllSources: true
          }
        }
      }
    },


    watch: {
      index: {
        files: ['src/*.jade'],
        tasks: ['jade'],
        options: {
          interrupt: true
        }
      },
      js: {
        files: ['src/modules/**/*.js', 'src/modules/**/*.jade'],
        tasks: ['html2js', 'uglify', 'concat'],
        options: {
          interrupt: true
        }
      },
      compass: {
        files: ['src/sass/*.scss', 'src/sass/**/*.scss'],
        tasks: ['compass', 'concat:css'],
        options: {
          interrupt: true
        }
      }
    }




  });








  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-karma');

  grunt.loadNpmTasks('grunt-contrib-watch');


  // Tasks

  grunt.registerTask('default', ['jade', 'html2js', 'uglify', 'compass', 'concat']);

};