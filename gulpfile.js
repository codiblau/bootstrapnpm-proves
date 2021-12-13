const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { series } = require('gulp')

function buildStyles() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
}

function copy() {
    return gulp.src('./node_modules/**/bootstrap.bundle.min.js')
        .pipe(gulp.dest('./js'));
}

exports.compila = buildStyles
exports.copy = copy
exports.build = series(buildStyles, copy);