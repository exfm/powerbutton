"use strict";

var fs = require('fs'),
    browserify = require('browserify'),
    templatify = require('templatify');

// Setup template bundle
var templateBundle = browserify().
    use(templatify('./', {
        files: ['./views/*.html', './views/partials/*.html'],
        helpers: ['./lib/helpers/*.js']
    })
);

var appBundle = browserify('./lib/main.js', {'require': {
    'backbone': 'backbone-browserify'}});


module.exports = function(grunt){
    grunt.initConfig({
        lint: {
            all: ['grunt.js']
        },
        jshint: {
            options: {
                browser: true
            }
        }
    });

    grunt.registerTask('dev', function(){
        // Watch for changes and rebuild.
        // Dev shell should reload on file changes
    });

    grunt.registerTask('build', function(){
        fs.writeFileSync('./static/js/templates.js', templateBundle.bundle());

        appBundle.prepends.splice(0, 1);
        appBundle.prepend(fs.readFileSync('./vendor/jquery.js'));
        appBundle.prepend(templateBundle.bundle());
        fs.writeFileSync('./static/js/app.js', appBundle.bundle());
    });
};
