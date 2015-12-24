var gulp = require('gulp');
var jade = require('gulp-jade');
var babel = require('gulp-babel');
var annotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var paths = require('./paths');


gulp.task('default', function(){
  gulp.watch(paths.jade, ['html']);
  gulp.watch(paths.js, ['js']);
});

gulp.task('build', ['html', 'js']);

gulp.task('html', function() {
  gulp.src(paths.indexRoot)
    .pipe(jade())
    .pipe(gulp.dest(paths.root))
  gulp.src(paths.statesRoot)
    .pipe(jade())
    .pipe(gulp.dest(paths.htmlOutput));
});

gulp.task('js', function() {
  gulp.src(paths.jsRoot)
    .pipe(babel({
			presets: ['es2015'],
      plugins: ['transform-es2015-modules-systemjs'],
		}))
    .pipe(annotate())
    .pipe(uglify())
    .pipe(gulp.dest(paths.jsOutput));
});