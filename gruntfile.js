module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jade: {
            compile: {
                options: {
                    data: {
                        debug: false
                    },
                    pretty: true
                },
                files: {
                    "index.html": ["templates/index.jade"],
                    "furniture.html": ["templates/furniture.jade"],
                    "accent-tables.html": ["templates/accent-tables.jade"],
                    "contemporary-table.html": ["templates/contemporary-table.jade"],
                    "shopping-cart.html": ["templates/shopping-cart.jade"]
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            jade: {
                files: 'templates/**/*.jade',
                tasks: ['jade']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');

    // grunt.registerTask('build', ['sass']);
    grunt.registerTask('default', ['watch']);

}