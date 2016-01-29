var gulp = require('gulp');
var autobundler = require('autobundler');

gulp.task('default', function () {
  autobundler({
    source: 'js',
    moduleDir: 'modules',
    destination: 'scripts',
  });
});

gulp.start('default');