const gulp = require('gulp');
const gulpSass = require('gulp-sass');

function watchFiles(done) {
  gulp.watch('src/sass/**/*.scss', scss);
  done();
}

function scss() {
  return gulp.src('src/sass/**/*.scss')
    .pipe(gulpSass())
    .pipe(gulp.dest('dist/css'));
}

exports.dev = gulp.series(scss, watchFiles);
