const gulp = require('gulp');
const browserSync = require('browser-sync');

const server = browserSync.create();

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: './public'
    }
  });
  done();
}

function watchFiles(done) {
  gulp.watch('./public/**/*.html', reload);
  done();
}

exports.dev = gulp.series(serve, watchFiles);
