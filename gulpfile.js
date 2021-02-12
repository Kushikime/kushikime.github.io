const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss to css
function style(){
    //1.where is scss
    return gulp.src('./scss/**/*.scss')
    //2.compile
    .pipe(sass())
    //3.where to save compiled css
    .pipe(gulp.dest('./css'))
    //4. stream changes to all browsers
    .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server: {
            baseDir: './',
            port: 4030
        }
    });

    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}






exports.watch = watch;
exports.style = style;