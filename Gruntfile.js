'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      stylus: {
        files: ['stylus/{,*/,**/}*.styl'],
        tasks: ['stylus:compile']
      },
      postcss: {
        files: ['css/{,*/,**/}*.css'],
        tasks: ['postcss']
      }
    },
    stylus: {
      compile: {
        options: {
          sourcemap: {
            inline: true
          },
          compress: false,
          "include css": true,
          use: [
            function() {
              return require("autoprefixer-stylus")("last 2 versions", "ie 8-11", "Safari");
            }
          ]
        },
        files: {'css/main.css': 'stylus/main.styl'}
      }
    },
    postcss: {
      options: {
        processors: [
          require('mdcss')({
            theme: require('mdcss-theme-github')({/*options*/})
          })
        ]
      },
      dist: {
        src: 'css/{,*/,**/}*.css'
      }
    }
  });

  grunt.registerTask('default', [
    'stylus:compile',
    'postcss',
    'watch'
  ]);

  grunt.registerTask('build', [
    'stylus:compile',
    'postcss',
  ]);

};
