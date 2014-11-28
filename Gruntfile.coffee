module.exports = (grunt)->
  grunt.initConfig(
    pkg: grunt.file.readJSON('package.json')
    # task definitions
    copy:
      main:
        files: [{filter: 'isFile', expand: true, flatten: true, src: ['vendor/famous/dist/famous-global.min.js', 'vendor/famous-angular/dist/famous-angular.min.js', 'vendor/angular/angular.min.js', 'vendor/angular/angular.min.js'], dest: 'app/js/'}, {filter: 'isFile', expand: true, flatten: true, src: ['vendor/famous-angular/dist/famous-angular.min.css'], dest: 'app/css/'}]
    )    
  # load modules
  grunt.loadNpmTasks 'grunt-contrib-copy'
  
  # register tasks
  grunt.registerTask 'default', ['copy']
  
  # return grunt
  grunt