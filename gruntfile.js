module.exports = function (grunt) {
  grunt.initConfig({
    uncss: {
      dist: {
        files: [{ src: "index.html", dest: "cleancss/tidy.css" }],
      },
    },
    cssmin: {
      dist: {
        files: [{ src: "cleancss/tidy.css", dest: "cleancss/tidy.css" }],
      },
    },
  });

  // Load the plugins
  grunt.loadNpmTasks("grunt-uncss");
  grunt.loadNpmTasks("grunt-contrib-cssmin");

  // Default tasks
  grunt.registerTask("default", ["uncss", "cssmin"]);
};

/*
npm install -g grunt-cli
npm install grunt grunt-uncss grunt-contrib-cssmin --save-dev
npm install
grunt
*/
