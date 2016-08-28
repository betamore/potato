var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// static server

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// watch html, css and js files and reload browser

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('css/*.css', browserSync.reload);
  gulp.watch('js/*.js', browserSync.reload);
});
