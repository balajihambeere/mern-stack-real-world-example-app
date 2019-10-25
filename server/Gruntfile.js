module.exports = function (grunt) {
    grunt.initConfig({
        eslint: {
            target: ["*.js", "./modules/**/*.js"],
            options: {
                configFile: "./eslint.json"
            }
        }
    });

    grunt.loadNpmTasks("grunt-eslint");
    grunt.registerTask("default", ["eslint"]);
};