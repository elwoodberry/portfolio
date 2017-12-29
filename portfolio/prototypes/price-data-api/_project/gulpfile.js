const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

// GULP SASS
gulp.task('sass', function(){
  gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'))
});

// GULP CONCAT
gulp.task('scripts', function(){
  gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('public/js'));
});

gulp.task('watch', function(){
  gulp.watch('src/sass/*.scss',['sass']);
  gulp.watch('src/js/*.js',['scripts']);
});
