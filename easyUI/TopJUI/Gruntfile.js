module.exports = function (grunt) {
    //配置参数
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';',
                stripBanners: true
            },
            dist: {
                src: [
                    "plugins/jquery.easyui.min.js",
                    "plugins/datagrid-filter.js",
                    "plugins/jquery.edatagrid.js",
                    "src/topjui.combotree.js",
                    "src/topjui.common.js",
                    "src/topjui.core.js",
                    "src/topjui.datagrid.js",
                    "src/topjui.dialog.js",
                    "src/topjui.edatagrid.js",
                    "src/topjui.extend.js",
                    "src/topjui.form.js",
                    "src/topjui.function.js",
                    "src/topjui.linkbutton.js",
                    "src/topjui.menubutton.js",
                    "src/topjui.plugins.js",
                    "src/topjui.tabs.js",
                    "src/topjui.toolbar.js",
                    "src/topjui.tree.js",
                    "src/topjui.treegrid.js",
                    "src/topjui.window.js",
                    "plugins/jquery.base64.js"
                ],
                dest: 'demo/topjui/js/topjui.core.js'
                //dest: 'E:/wwwroot/Java/ewsdEMIS/application/src/main/webapp/static/topjui/js/topjui.core.js'
            }
        },
        uglify: {
            options: {
                banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                files: {
                    'demo/topjui/js/topjui.core.min.js': 'demo/topjui/js/topjui.core.js'
                }
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: 0 /* 删除所有注释 */
            },
            compress: {
                files: {
                    'demo/topjui/css/topjui.core.min.css': [
                        "demo/topjui/themes/default/topjui.base.css",
                        "demo/topjui/css/topjui.style.css"
                    ]
                }
            }
        }
    });

    //载入concat和uglify插件，分别对于合并和压缩
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //注册任务
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
}