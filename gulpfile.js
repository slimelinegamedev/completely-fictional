var gulp = require('gulp');
var jade = require('gulp-jade');

var src = {
  jade: ['src/jade/**/*.jade'],
  index: ['src/jade/index.jade'],
  states: ['src/jade/**/*.jade', '!src/jade/index.jade']
};

gulp.task('default', function(){
  gulp.watch(src.jade, ['html']);
});

gulp.task('build', ['html']);

gulp.task('html', function() {
  gulp.src(src.index)
    .pipe(jade())
    .pipe(gulp.dest('./'))
  gulp.src(src.states)
    .pipe(jade())
    .pipe(gulp.dest('dist/html'));
});