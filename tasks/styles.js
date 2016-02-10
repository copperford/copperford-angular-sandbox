'use strict';

module.exports = function (gulp, $) {

	gulp.task('styles:copy-source', function () {
		return gulp.src('source/styles/*.css')
			.pipe(gulp.dest('dist'));
	});

	gulp.task('styles', function () {
		return gulp.src('source/styles/*.css')
			.pipe($.cssnano({ safe: true }))
			.pipe($.rename('copperford-angular-sandbox.min.css'))
			.pipe(gulp.dest('dist'));
	});

};