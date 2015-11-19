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

gulp.task('html', ['index'], function() {
  return gulp.src('src/jade/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('dist/html'))
});

gulp.task('index', function() {
  return gulp.src('./index.jade')
    .pipe(jade())
    .pipe(gulp.dest('./'))
});