/*
 * grunt-gaej
 * https://github.com/
 *
 * Copyright (c) 2013 Eduardo Marin Izquierdo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Load local tasks.
  grunt.loadTasks('tasks');

  // Default task.
  grunt.registerTask('default', ['gaej']);

};
