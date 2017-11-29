'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dist: [
        "dist"
      ]
    },
    watch: {
      stylus: {
        files: ['src/sfgs/{,*/,**/}*.styl'],
        tasks: ['stylus']
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
        files: {'dist/sfgs/sfgs.css': 'src/sfgs/sfgs.styl'}
      }
    },
    cssmin: {
      dist: {
        files: [
          {
             expand: true,
             cwd: 'dist/sfgs',
             src: ['*.css', '!*.min.css'],
             dest: 'dist/sfgs',
             ext: '.min.css'
          }
        ]
      }
    }
  });

  grunt.registerTask('default', [
    'clean',
    'stylus',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'stylus',
    'cssmin',
  ]);

};
