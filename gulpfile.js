const gulp = require('gulp')
const plumber = require('gulp-plumber')
const browserSync = require('browser-sync')
const sass = require('gulp-sass')
gulp.task('style', function () {
    return gulp.src('./source/scss/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('./source/css'));
});

gulp.task('watch', function () {
    browserSync.init({
        server: './source/'
    });
    gulp.watch('./source/scss/*/.scss', gulp.series('style'));
});