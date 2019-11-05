var gulp = require("gulp");
var babel = require("gulp-babel");  //es6转es5
var browserSync = require('browser-sync'); // 浏览器实时响应
var sass = require('gulp-sass'); // sass编译
var sourcemaps = require("gulp-sourcemaps"); // sourcemap
var del = require('del'); // 删除文件
var autoprefixer = require('gulp-autoprefixer'); // css前缀补全
var minifycss = require('gulp-clean-css'); // css压缩
var replace = require('gulp-replace'); // 文本替换
var runSequence = require('gulp-sequence'); // 任务队列
var concat = require('gulp-concat');   //合并文件

var env = 'dist';
// 监视文件改动并重新载入
gulp.task('serve', function () {
    browserSync.init({
        server: "src"
    });
    gulp.watch('src/demo/sass/*.scss', ['autoprefixer']);
    gulp.watch(["src/demo/**/*.html", "src/demo/sass/*.scss", "src/demo/js/**/*.js"]).on('change', browserSync.reload);
});

//autoFx，压缩css
gulp.task('autoprefixer', function () {
    if (env == 'dist') {
        return gulp.src('src/demo/sass/super*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: ['last 2 versions', 'Android >= 4.0', 'Firefox >= 20'],
                remove: false //是否去掉不必要的前缀 默认：true
            }))
            .pipe(minifycss()) //执行压缩
            .pipe(gulp.dest('src/demo/css'));
    } else {
        return gulp.src('src/demo/sass/super*.scss')
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest('src/demo/css'))
    }
});

gulp.task('copy', function () {
    gulp.src('src/demo/js/*').pipe(gulp.dest('dist/super'));
    gulp.src('src/demo/css/font-awesome.min.css').pipe(gulp.dest('dist/super/css'));
    gulp.src('src/demo/fonts/*').pipe(gulp.dest('dist/super/fonts'));
    gulp.src('src/easyui/themes/gray/images/*').pipe(gulp.dest('dist/super/images'));
    gulp.src('src/demo/css/super*.css').pipe(gulp.dest('dist/super')) ;
});


//清除之前生成的文件
gulp.task('clean', function (cb) {
    return del(['dist/*'], cb);
});

gulp.task('default', function (cb) {
    console.log('开发环境：gulp dev');
    console.log('生成打包：gulp dist');
});

/*开发环境*/
gulp.task('dev', function (cb) {
    env = 'dev';
    runSequence('clean', ['autoprefixer'], 'serve')(cb);
});

/*生成打包*/
gulp.task('dist', function (cb) {
    env = 'dist';
    runSequence('clean', ['autoprefixer'], 'copy')(cb);
});


