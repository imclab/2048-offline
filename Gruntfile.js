module.exports = function(grunt) {
    'use strict';
 
    var gruntConfig = {
      nodewebkit: {
        options: {
            build_dir: './webkitbuilds', // Where the build version of my node-webkit app is saved
            mac: true, // We want to build it for mac
            win: true, // We want to build it for win
            linux32: false, // We don't need linux32
            linux64: false // We don't need linux64
        },
        src: ['package.json']
      },
    };
 
    grunt.initConfig(gruntConfig);
 
    grunt.loadNpmTasks('grunt-node-webkit-builder');
 
    // tarefas
    grunt.registerTask('default', ['nodewebkit']);
};
