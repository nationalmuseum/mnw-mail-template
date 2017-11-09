module.exports = function (grunt) {
    grunt.initConfig({
        /**
      * Prepare banner.
      * This will be used as header for generated files.
      */
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> ' + '<%= grunt.template.today("yyyy-mm-dd h:MM:ss") %>' + '*/' + "\n",

        /* Minify html */
        minifyHtml: {
            options: {
                cdata: true
            },
            dist: {
                files: {
                    'pub/index.html': 'pub/index.html'
                }
            }
        },

        inline: {
            dist: {
                src: 'src/index.html',
                dest: 'pub/index.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-minify-html');
    grunt.loadNpmTasks('grunt-inline');

    grunt.registerTask('default', ['inline', 'minifyHtml']);
};