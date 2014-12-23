'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var buildPath = 'build/';

/* concat, uglify */
gulp.task('scripts', function() {
	gulp.src(['app/js/*.js' ,'!app/js/*.min.js'])
	.pipe($.concat('scripts.min.js'))
	.pipe($.uglify())
	.pipe(gulp.dest(buildPath + 'js'))
	.on('error', $.util.log);
});

/* minify, concat, autoprefix */
gulp.task('styles', function() {
	gulp.src(['app/css/**/*.css' , '!app/css/**/*.min.css'])
	.pipe($.concat('styles.min.css'))
	.pipe($.autoprefixer('last 3 versions'))
	.pipe($.csso())
	.pipe(gulp.dest(buildPath + 'css'));
});

/* minify the html */
gulp.task('minify-html', function() {
	var opts = {collapseWhitespace:true};
	gulp.src('app/*.html')
	.pipe($.changed(buildPath))
	.pipe($.htmlmin(opts))
	.pipe(gulp.dest(buildPath));

	gulp.src('app/partials/*.html')
	.pipe($.changed(buildPath + 'partials'))
	.pipe($.htmlmin(opts))
	.pipe(gulp.dest(buildPath + 'partials'));
});

/* minify images */
gulp.task('images', function () {
	 gulp.src('app/img/*')
	.pipe($.changed(buildPath + 'img'))
	.pipe($.imagemin({progressive: true,interlaced:true}))
	.pipe(gulp.dest(buildPath + 'img'));
});

/* other lib files */
gulp.task('libs' , function (){
	gulp.src('app/libs/**/*.*')
	.pipe($.changed(buildPath + 'libs'))
	.pipe(gulp.dest(buildPath + 'libs'));
});

gulp.task('default',
	['minify-html','libs','scripts','styles','images'], function() {
});

gulp.task('watch', function () {
	gulp.watch(['app/**/*.html'], ['minify-html']);
	gulp.watch(['app/css/**/*.css'], ['styles']);
	gulp.watch(['app/js/**/*.js'], ['scripts']);
	gulp.watch(['app/img/**/*'], ['images']);
});
