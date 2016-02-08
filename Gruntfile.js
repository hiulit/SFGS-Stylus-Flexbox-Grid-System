// Gruntfile.js
module.exports = grunt => {
    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
      watch: {
        stylus: {
          files: ['stylus/{,*/,**/}*.styl'],
          tasks: ['stylus:compile'],
          // options: {
          //   livereload: true
          // }
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
              ],
              files: {'css/main.css', 'stylus/main.styl'}
            }
          }
        }
      }
    });

    grunt.registerTask('default', [
      grunt.task.run([
        'stylus:compile'
        'watch'
      ]);
    ]);
};
