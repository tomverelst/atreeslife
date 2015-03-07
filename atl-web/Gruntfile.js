module.exports = function(grunt){
    grunt.initConfig({

        less: {
            development: {
                options: {
                    compress: true
                },
                files: { "./app/styles.css": "./app/styles.less"}
            }
        },

        watch: {
            less: {
                files: ["./app/styles.less"],
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