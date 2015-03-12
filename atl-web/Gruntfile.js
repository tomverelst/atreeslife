module.exports = function(grunt){
    grunt.initConfig({

        less: {
            development: {
                options: {
                    compress: true
                },
                files: { "./public/css/styles.css": "./less/styles.less"}
            }
        },

        watch: {
            less: {
                files: ["./less/**/*.less"],
                tasks: ["less"],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["less", "watch"]);
};