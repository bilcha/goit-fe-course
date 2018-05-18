var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('scripts', () =>
  gulp.src('./src/js/*.js')
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
);
gulp.task('start', ['scripts']);