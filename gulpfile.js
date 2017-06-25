var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });
    gulp.watch("./app/*.html").on('change', reload);
    gulp.watch("./app/**/*.css").on('change', reload);
    gulp.watch("./app/**/*.js").on('change', reload);
});

gulp.task('default', ['browser-sync']);
