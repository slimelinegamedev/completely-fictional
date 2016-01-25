var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

gulp.task('default', function () {
  gulp.src('**/*.js', { cwd: 'js' })
    .pipe(concat('app.js'))
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('scripts'));
});

gulp.start('default');