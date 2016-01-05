var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');


gulp.task('mocha', function() {
    "use strict";
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
});

gulp.task('lint', function() {
  "use strict";
  return gulp.src(['*.js','test/*.js'])
    .pipe(jshint('jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch-mocha', function() {
  "use strict";
  gulp.watch(['./**', 'test/**','!package.json'], ['lint','mocha']);
});

gulp.task('default', ['mocha']);
gulp.task('testing', ['mocha', 'lint', 'watch-mocha']);
