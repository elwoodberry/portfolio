const gulp = require('gulp');
const sass = require('gulp-sass');

// GULP SASS
gulp.task('sass', function(){
  gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function(){
  gulp.watch('src/sass/*.scss',['sass']);
});
