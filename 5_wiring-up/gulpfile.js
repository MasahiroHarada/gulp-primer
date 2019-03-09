const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const gulpEjs = require('gulp-ejs');
const browserSync = require('browser-sync');

const server = browserSync.create();

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: './dist'
    }
  });
  done();
}

function scss() {
  return gulp.src('src/sass/**/*.scss')
    .pipe(gulpSass())
    .pipe(gulp.dest('dist/css'));
}

function ejs() {
  return gulp.src([
    'src/ejs/**/*.ejs',
    '!src/ejs/**/_*.ejs'
  ])
    .pipe(gulpEjs({}, {}, { ext: '.html' }))
    .pipe(gulp.dest('dist'));
}

function watchFiles(done) {
  gulp.watch('src/sass/**/*.scss', gulp.series(scss, reload));
  gulp.watch('src/ejs/**/*.ejs', gulp.series(ejs, reload));
  done();
}

exports.dev = gulp.series(
  gulp.parallel(scss, ejs),
  serve,
  watchFiles
);
