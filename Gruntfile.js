'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      stylus: {
        files: ['stylus/{,*/,**/}*.styl'],
        tasks: ['stylus:compile']
      }
    },
    stylus: {
      compile: {
        options: {
          sourcemap: {
            inline: true
          },
          compress: true,
          use: [
            function() {
              return require('autoprefixer-stylus')('last 2 versions', 'ie 8-10');
            }
          ]
        },
        files: {'css/main.css': 'stylus/main.styl'}
      }
    }
  });

  grunt.registerTask('default', [
    'stylus:compile',
    'watch'
  ]);

};
