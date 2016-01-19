'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

const buildPath = 'build/';

/* concat, uglify */
gulp.task('scripts', function () {
  return gulp.src(['app/js/**/*.js'])
    .pipe($.uglifyjs('scripts.min.js'))
    .pipe(gulp.dest(buildPath + 'js'))
    .on('error', $.util.log);
});

gulp.task('styles', function () {
  return gulp.src('app/styles/styles.styl')
    .pipe($.stylus({
      compress: true
    }))
    .pipe($.autoprefixer('last 3 versions'))
    .pipe($.csso())
    .pipe(gulp.dest(buildPath + '/styles'));
});

/* minify the html */
gulp.task('minify-html', function () {
  return gulp.src('app/**/*.html')
    .pipe($.changed(buildPath))
    .pipe($.htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(buildPath));
});


/* minify images */
gulp.task('images', function () {
  gulp.src('app/img/*')
    .pipe($.changed(buildPath + 'img'))
    .pipe($.imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(buildPath + 'img'));
});

/* other lib files */
gulp.task('libs', function () {
  gulp.src('app/libs/**/*.*')
    .pipe($.changed(buildPath + 'libs'))
    .pipe(gulp.dest(buildPath + 'libs'));
});

gulp.task('all', ['minify-html', 'libs', 'scripts', 'styles', 'images'], function () {});

gulp.task('default', ['all', 'watch'], function () {});

gulp.task('watch', function () {
  gulp.watch(['app/**/*.html'], ['minify-html']);
  gulp.watch(['app/styles/**/*'], ['styles']);
  gulp.watch(['app/js/**/*.js'], ['scripts']);
  gulp.watch(['app/img/**/*'], ['images']);
  gulp.watch(['app/libs/**/*'], ['libs']);
});
