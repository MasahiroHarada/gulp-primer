const gulp = require('gulp');
const gulpEjs = require('gulp-ejs');

function ejs() {
  return gulp.src([
    'src/ejs/**/*.ejs',
    '!src/ejs/**/_*.ejs'
  ])
    .pipe(gulpEjs({}, {}, { ext: '.html' }))
    .pipe(gulp.dest('dist'));
}

exports.dev = ejs;
