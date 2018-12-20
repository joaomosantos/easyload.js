var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gulp.task('minify-js', function() {
	gulp.src('./src/easyload.js')
	.pipe(rename(function (path) { path.basename += ".min";}))
	.pipe(uglify({ preserveComments: 'all' }))
	.pipe(gulp.dest('./src'));
});
