var gulp = require('gulp');
var jade = require('gulp-jade');

var src = {
  js: ['src/js/**/*.js', '!app.js'],
  html: ['src/jade/**/*.jade', 'index.jade']
};

gulp.task('default', function(){
  gulp.watch(src.html, { cwd: './' }, ['html']);
});

gulp.task('build', ['html']);

gulp.task('html', function() {
  gulp.src('./index.jade')
    .pipe(jade())
    .pipe(gulp.dest('./'))
  return gulp.src('src/jade/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('dist/html'));
});