var gulp = require('gulp');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

var root = require('./build/paths').app;
var dest = require('./build/paths').output;
var tree = require('./build/paths').tree;
var glob = require('./build/paths').glob;


gulp.task('default', function () {
  gulp.watch(tree.jade + glob.jade, { cwd: root }, ['html']);
  gulp.watch(tree.js + glob.js, { cwd: root }, ['js']);
});

gulp.task('build', ['html', 'js']);

gulp.task('html', function () {
  gulp.src(tree.jade + glob.jade, { cwd: root })
    .pipe(jade())
    .pipe(gulp.dest(tree.html, { cwd: dest }));
});

gulp.task('js', function () {
  gulp.src(tree.js + glob.js, { cwd: root })
    .pipe(concat('app.js'))
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(tree.js, { cwd: dest }));
});