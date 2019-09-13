module.exports = function (grunt) {
   grunt.initConfig({
      jshint: {
         options: {
            esversion: 6,
            bitwise: true,
            curly: true,
            asi: false,
            globals: {
               jQuery: true
            }
         },
         all: ['Gruntfile.js', 'app/js/**/*.js']
      },
      copy: {
         build: {
            files: [
               {expand: true, cwd: 'app/', src: ['**'], dest: 'docs/'},
               {expand: true, flatten: true, src: ['./node_modules/jquery/dist/jquery.min.js'], dest: 'docs/lib'}
            ]
         }
      },
      clean: {
         build: {
            src: ['docs']
         } 
      },
      watch: {
         dev: {
            files: ['app/**/*.js', 'app/**/*.css', 'app/**/*.html'],
            tasks: ['refresh'],
            options: {
               spawn: false
            }
         }
      }
   });

   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-clean');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-copy');

   // TAREFAS
   grunt.registerTask('default', ['jshint', 'clean', 'copy', 'watch']);
   grunt.registerTask('refresh', ['jshint', 'clean', 'copy']);
};