/*
 * grunt-gaej
 * https://github.com/
 *
 * Copyright (c) 2013 Eduardo Marin Izquierdo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    grunt.registerTask('gaej', 'Running Development Web Server.', function() {

        var spawn = require('child_process').spawn;
        var PIPE = {stdio: 'inherit'};
        var done = this.async();        

        var options = this.options({
            appengineSdkPath : 'C:/appengine-java-sdk-1.8.1.1/bin/dev_appserver.cmd' ,
            warPath : '.' ,
            address : '0.0.0.0' ,
            port: '8080'
        });
        
        spawn(options.appengineSdkPath, ['-a', options.address, '-p', options.port, options.warPath], PIPE).on('exit', function(status) {
            done(status === 0);
        });
        
    });

    grunt.registerTask('default', ['gaej']);

};
