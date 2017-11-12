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
                cdata: true,
                conditionals: true
            },
            dist: {
                files: {
                    'pub/index.html': 'pub/index.html'
                }
            }
        },

        /* Include css file inside html */
        inline: {
            dist: {
                src: 'src/index.html',
                dest: 'pub/index.html'
            }
        },

        /* Sass */
        sass: {
            dist: {
                options: {
                    style: 'compressed', 
                    sourcemap: 'none'
                },
                files: [{
                    expand: true,
                    cwd: 'src/scss',
                    src: ['**/*.scss'],
                    dest: 'src/css',
                    ext: '.css'
                }]
            }
        }


    });

    grunt.loadNpmTasks('grunt-minify-html');
    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass', 'inline', 'minifyHtml']);
};