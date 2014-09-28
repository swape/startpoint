'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');

var buildPath = 'build/';

/* concat , uglify */
gulp.task('scripts', function() {
	gulp.src(['app/js/*.js' ,'!app/js/*.min.js'])
	.pipe($.concat('scripts.min.js'))
	.pipe($.uglify())
	.pipe(gulp.dest(buildPath + 'js'))
	.on('error', $.util.log);

});

/* sass */
gulp.task('sass', function () {
	return gulp.src('app/sass/*.scss')
	.pipe($.sass())
	.pipe(gulp.dest('app/css/compiled-sass'));
});

/* minify , concat, autoprefix */
gulp.task('styles', function() {
	gulp.src(['app/css/**/*.css' , '!app/css/**/*.min.css'])
	.pipe($.concat('styles.min.css'))
	.pipe($.autoprefixer('last 3 versions'))
	.pipe(minifyCSS())
	.pipe(gulp.dest(buildPath + 'css'));
});

/* minify the html */
gulp.task('minify-html', function() {
	var opts = {comments:true,spare:true};
	gulp.src('app/*.html')
	.pipe(minifyHTML(opts))
	.pipe(gulp.dest(buildPath));

	gulp.src('app/partials/*.html')
	.pipe(minifyHTML(opts))
	.pipe(gulp.dest(buildPath + 'partials'));
});

/* minify images */
gulp.task('images', function () {
	 gulp.src('app/img/*')
	.pipe($.imagemin({progressive: true,interlaced:true}))
	.pipe(gulp.dest(buildPath + 'img'));
});

/* other lib files */
gulp.task('lib' , function (){
	gulp.src('app/lib/**/*.*')
	.pipe(gulp.dest(buildPath + 'lib'));
});

gulp.task('default',
	['minify-html','sass','lib','scripts','styles','images'], function() {
});

gulp.task('watch', function () {
	gulp.watch(['app/**/*.html'], ['minify-html']);
	gulp.watch(['app/sass/**/*.scss'], ['sass']);
	gulp.watch(['.tmp/css/**/*.css'], ['styles']);
	gulp.watch(['app/js/**/*.js'], ['scripts']);
	gulp.watch(['app/img/**/*'], ['images']);
});
