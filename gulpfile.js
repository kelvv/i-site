var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');

// 代理
gulp.task('default', ['browser-sync'], function () {
});

gulp.task('browser-sync',['nodemon'], function() {
    browserSync.init(null,{
        proxy: "http://localhost:3000",
        files: ["public/**/*.*"],
        browser: "google chrome",
		port: 7000,
    });
});

gulp.task('nodemon', function (cb) {
	
	var started = false;
	
	return nodemon({
		script: 'bin/run.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
            cb();
            started = true; 
		} 
	})
});