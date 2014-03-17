module.exports = function(grunt) {
    'use strict';
 
    var gruntConfig = {
      nodewebkit: {
        options: {
            build_dir: './build', // Where the build version of my node-webkit app is saved
            mac_icns: 'icon.icns',
            mac: true, // We want to build it for mac
            win: true, // We want to build it for win
            linux32: true, // We don't need linux32
            linux64: false // We don't need linux64
        },
        src: './public/**/*'
      },
    };
 
    grunt.initConfig(gruntConfig);
 
    grunt.loadNpmTasks('grunt-node-webkit-builder');
 
    // tarefas
    grunt.registerTask('default', ['nodewebkit']);
};
