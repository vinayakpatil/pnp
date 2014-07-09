module.exports = function(grunt) {
    'use strict';

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
                files: [{
                    "index.html": ["templates/index.jade"],
                    "furniture.html": ["templates/furniture.jade"],
                    "accent-tables.html": ["templates/accent-tables.jade"],
                    "contemporary-table.html": ["templates/contemporary-table.jade"],
                    "shopping-cart.html": ["templates/shopping-cart.jade"],
                    "checkout.html": ["templates/checkout.jade"],
                    "signin.html": ["templates/signin.jade"],
                    "register.html": ["templates/register.jade"],
                    "account-information.html": ["templates/account-information.jade"],
                    "change-password.html": ["templates/change-password.jade"],
                    "contact-us.html": ["templates/contact-us.jade"],
                    "my-orders.html": ["templates/my-orders.jade"],
                    "lighting.html": ["templates/lighting.jade"],
                    "decor.html": ["templates/decor.jade"],
                    "walls-floors.html": ["templates/walls-floors.jade"],
                    "kitchen.html": ["templates/kitchen.jade"],
                    "gifts.html": ["templates/gifts.jade"],
                    "whatsnew.html": ["templates/whatsnew.jade"],
                    "bed-bath.html": ["templates/bed-bath.jade"],
                    "peachicks.html": ["templates/peachicks.jade"],
                    "order-confirmation.html": ["templates/order-confirmation.jade"],
                    "blog.html": ["templates/blog.jade"],
                    "gift-certificate.html": ["templates/gift-certificate.jade"],
                    "who-we-are.html": ["templates/who-we-are.jade"],
                    "terms.html": ["templates/terms.jade"],
                    "privacy.html": ["templates/privacy.jade"],
                    "shipping.html": ["templates/shipping.jade"],
                    "return.html": ["templates/return.jade"],
                    "faq.html": ["templates/faq.jade"],
                    "sale.html": ["templates/sale.jade"]
                }]
            }
        },

        jshint: {
            all: ['Gruntfile.js', 'js/**/*.js'],
            options: {
                ignores: ['js/libraries/**/*.js'],
                jshintrc: '.jshintrc'
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
        },

        bowercopy: {
            options: {
                srcPrefix: 'bower_components'
            },
            scripts: {
                options: {
                    destPrefix: 'js/libraries'
                },
                files: {
                    'jquery/jquery.js': 'jquery/jquery.js',
                    'jcarousel/jquery.jcarousel.js': 'jcarousel/dist/jquery.jcarousel.js',
                    'foundation/foundation.js': 'foundation/js/foundation.js',
                    'jqzoom/jquery.jqzoom.js': 'jqzoom/js/jquery.jqzoom-core.js',
                    'jquery-placeholder/jquery.placeholder.js': 'jquery-placeholder/jquery.placeholder.js'
                }
            }
        },

        copy: {
            build: {
                files: [{
                    expand: true,
                    cwd: '.',
                    src: ['js/**/*', 'stylesheets/**/*', 'imgs/**/*', '*.html'],
                    dest: 'public/'
                }]
            }
        },

        clean: {
            build: {
                src: ['public']
            }
        },

        uglify: {
            build: {
                files: [{
                    expand: true,
                    src: 'public/**/*.js'
                }]
            }
        },

        connect: {
            server: {
                options: {
                    port: 8000,
                    base: 'public',
                    hostname: '*'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // grunt.registerTask('build', ['sass']);
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['clean', 'bowercopy', 'copy', 'uglify']);
    grunt.registerTask('server', ['connect', 'watch']);


};