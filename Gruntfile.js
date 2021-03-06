module.exports = function (grunt) {
    let nodemailer = require('nodemailer');
    let config = grunt.file.readJSON('config.json');
    //var gmailTransport = nodemailer.createTransport('smtps://john.doe%40gmail.com:password@smtp.gmail.com');
    

    grunt.initConfig({
        /**
         * Prepare banner.
         * This will be used as header for generated files.
         */
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> ' + '<%= grunt.template.today("yyyy-mm-dd h:MM:ss") %>' + '*/' + "\n",
        
        config: config,

        /**
         * Template patterns
         */
        replacePatterns: [
            {
                match: '{imgUrl}',
                replacement: '<%= config.imgUrl %>'
            },
            {
                match: '{title}',
                replacement: '<%= config.title %>'
            },
            {
                match: '{fontUrl}',
                replacement: '<%= config.fontUrl %>'
            },
            {
                match: '{fontFamily}',
                replacement: '<%= config.fontFamily %>'              
            },
            {
                match: '{bgColor}',
                replacement: '<%= config.bgColor %>'  
            },
            {
                match: '{txtColor}',
                replacement: '<%= config.txtColor %>'  
            },
            {
                match: '{txtAlign}',
                replacement: '<%= config.txtAlign %>'  
            },
            {
                match: '{headingTxtColor}',
                replacement: '<%= config.headingTxtColor %>'  
            },
            {
                match: '{btnColor}',
                replacement: '<%= config.btnColor %>'  
            },
            {
                match: '{btnTxtColor}',
                replacement: '<%= config.btnTxtColor %>'  
            },
            {
                match: '{description}',
                replacement: '<%= config.description %>'  
            },
            {
                match: '{width}',
                replacement: '<%= config.width %>'  
            },
            {
                match: '{footerBgColor}',
                replacement: '<%= config.footerBgColor %>'  
            },
            {
                match: '{imgBgColor}',
                replacement: '<%= config.imgBgColor %>'  
            }        
                       
        ],

        /* Minify html */
        minifyHtml: {
            options: {
                cdata: true,
                conditionals: true
            },
            dist: {
                files: {
                    'pub/mail.html': 'pub/mail.html'
                }
            }
        },

        /* Include css file inside html */
        inline: {
            dist: {
                src: 'src/compiled.html',
                dest: 'pub/mail.html'
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
        },

        /* Enable template inclusion */
        includes: {
            files: {
                src: ['src/mail.html'],
                dest: 'src/compiled.html',
                flatten: true,
                cwd: '.',
                options: {
                    silent: true
                }
            }
        },

        /* Replace template vars */
        replace: {
            options: {
                patterns: '<%= replacePatterns %>'
            },
            dist: {
                files: [
                    { expand: true, flatten: true, src: ['src/compiled.html'], dest: 'src/' }
                ]
            },
            preview: {
                files: [
                    { expand: true, flatten: true, src: ['src/compiled.html'], dest: 'src/' }
                ]
            }
        },

        copy: {
            main: {
                files: [
                    // includes files within path and its sub-directories
                    { expand: true, cwd: 'src/', src: ['assets/**'], dest: 'pub/' }
                ],
            },
        },


    });

    grunt.loadNpmTasks('grunt-minify-html');
    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-copy');

    /**
     * Strips output out of HTML comments and compress it.
     */
    grunt.registerTask('default', ['sass', 'includes', 'replace:dist', 'inline', 'minifyHtml', 'copy']);

    /**
     * Warning! Do not use files generated by a preview task for production purposes.
     * Messages with comments may lead your campaign to SPAM blockages. 
     */
    grunt.registerTask('preview', ['sass', 'includes', 'replace:preview', 'inline', 'copy']);
};