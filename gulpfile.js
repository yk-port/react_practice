var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('watch', function() {
  watch(['./**/*.html', './js/**/*.js'], function() {
    browserSync.reload();
  });
});

gulp.task('default', ['browser-sync', 'watch']);
