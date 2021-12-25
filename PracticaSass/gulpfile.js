var gulp = require('gulp'); 
var browserSync = require('browser-sync').create(); //paquete a utilizar
var minifyCss = require('gulp-minify-css');
var sourcesmaps = require('gulp-sourcemaps');

gulp.task('styles', function(){
    gulp.src(['src/styles/**/*.css'])
    .pipe(sourcesmaps.init())
    .pipe(minifyCss())
    .pipe(sourcesmaps.write())
    .pipe(gulp.dest('dist/styles'))
    .pipe(browserSync.stream());
    });
    

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
gulp.watch("*.html").on("change", browserSync.reload);
