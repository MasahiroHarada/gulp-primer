const gulp = require('gulp');
const gulpSass = require('gulp-sass');

function scss() {
  return gulp.src('src/sass/**/*.scss')
    .pipe(gulpSass())
    .pipe(gulp.dest('dist/css'));
}

exports.dev = scss;
